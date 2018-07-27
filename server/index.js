const { GraphQLServer, PubSub } = require('graphql-yoga');
const fetch = require('node-fetch');
const fs = require('fs');
const R = require('ramda');

const PATH_TO_GRAPHQL_SCHEMA = '../graphql/schema.graphql';
const UPDATE_FLIGHTS_CHANNEL = 'FLIGHT_UPDATES';
const REFRESH_CACHE_INTERVAL_NORMAL = 2 * 60 * 1000;
const REFRESH_CACHE_INTERVAL_ERROR = 30 * 1000;
const API_URL = 'https://3gyucw6pqd.execute-api.eu-west-1.amazonaws.com/dev';

const cachedFlightData = {};
let fetchedData = {};

const pubsub = new PubSub();

const formatFlightData = flights =>
  flights.map(flight => ({
    id: flight.id,
    orientation: flight.orientation,
    location: {
      lat: flight.location.coordinates[0],
      lng: flight.location.coordinates[1],
    },
  }));

const updateFlightsCache = (data, pubsub) => {
  const changedFlights = [];
  const presentFlightIds = {};
  const removedFlightIds = [];

  // populate object with ids of cached flights
  Object.keys(cachedFlightData).forEach(flightId => {
    presentFlightIds[flightId] = false;
  });

  data.flights.forEach(flight => {
    if (!R.equals(flight, cachedFlightData[flight.id])) {
      cachedFlightData[flight.id] = flight;
      changedFlights.push(flight);
    }

    // mark flight as seen
    presentFlightIds[flight.id] = true;
  });

  Object.keys(presentFlightIds).forEach(flightId => {
    // remove flights that are not in API response
    if (!presentFlightIds[flightId]) {
      removedFlightIds.push(flightId);
      delete cachedFlightData[flightId];
    }
  });

  if (changedFlights.length || removedFlightIds.length) {
    console.log(
      `Updating flights | Changed: ${changedFlights.length}, Removed: ${
        removedFlightIds.length
      }`
    );
    pubsub.publish(UPDATE_FLIGHTS_CHANNEL, {
      updated: formatFlightData(changedFlights),
      removed: removedFlightIds,
    });
  }
};

const refreshCacheTick = refreshDelay => {
  setTimeout(() => {
    refreshCache();
  }, refreshDelay);
};

const refreshCache = () => {
  fetch(API_URL)
    .then(res => res.json())
    .then(json => {
      fetchedData = json;
      updateFlightsCache(json, pubsub);
      refreshCacheTick(REFRESH_CACHE_INTERVAL_NORMAL);
    })
    .catch(err => {
      refreshCacheTick(REFRESH_CACHE_INTERVAL_ERROR);
      console.warn('Refresh Cache: Fetch Error');
    });
};

function getQueryForCode(locationId) {
  return {
    query: `
      query FlagQuery($locationId: String!) {
          location(id: $locationId) {
            name
            code
            countryFlagURL
          }
        }
      }
    `,
    variables: { locationId },
    operationName: null,
  };
}

const typeDefs = fs.readFileSync(PATH_TO_GRAPHQL_SCHEMA, 'utf8');

const resolvers = {
  RootQuery: {
    flights: (parent, args) =>
      fetchedData.flights
        ? formatFlightData(fetchedData.flights.slice(undefined, args.first))
        : [],
    stats: () =>
      fetchedData.topNationalities
        ? {
            activePassengers: fetchedData.activePassengersCount,
            activeFlights: fetchedData.activeFlightsCount,
            topNationalities: fetchedData.topNationalities.map(nationality => ({
              code: nationality.nationalityCode,
              passengers: nationality.count,
            })),
            flightsTakingOffSoon: fetchedData.takingOffCount,
            flightsLandingSoon: fetchedData.landingCount,
            mostOccupiedFlight: fetchedData.mostPaxInfo,
          }
        : {},
    location: async (_, args) => {
      const response = await fetch('https://graphql.kiwi.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(getQueryForCode(args.id)),
      }).then(response => response.json());
      return response.data.location;
    },
    error: () => 'error example',
  },

  Subscription: {
    flightsData: {
      resolve: parent => parent,
      subscribe: (parent, args, { pubsub }) =>
        pubsub.asyncIterator(UPDATE_FLIGHTS_CHANNEL),
    },
  },
};

const port = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub },
  port,
});
server.start(async () => {
  console.log(`Server is running on http://localhost:${port}`);
  // start cache loop
  refreshCache();
});
