const { GraphQLServer, PubSub } = require('graphql-yoga');
const fetch = require('node-fetch');
const fs = require('fs');
const R = require('ramda');

const PATH_TO_GRAPHQL_SCHEMA = '../graphql/schema.graphql';
const UPDATE_FLIGHTS_CHANNEL = 'FLIGHT_UPDATES';
const REFRESH_CACHE_DATA_INTERVAL = 3 * 60 * 1000;
const API_URL = 'https://3gyucw6pqd.execute-api.eu-west-1.amazonaws.com/dev';

const cacheTime = 5 * 60 * 1000;

let lastFetchTime;
let getApiResponsePromise;

const cachedFlightData = {};

const formatFlightData = flights =>
  flights.map(flight => ({
    id: flight.id,
    orientation: flight.orientation,
    location: {
      lat: flight.location.coordinates[0],
      lng: flight.location.coordinates[1],
    },
  }));

const refreshCache = async pubsub => {
  const changedFlights = [];
  console.warn('Refreshing API data');

  const rawResponse = await fetch(API_URL);

  if (!rawResponse.ok) {
    console.warn('API is down');
    throw new Error(`API is down`);
  }

  const data = await rawResponse.json();
  updateFlightsCache(data, pubsub);
};

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
    console.log('updating flights');
    pubsub.publish(UPDATE_FLIGHTS_CHANNEL, {
      updated: formatFlightData(changedFlights),
      removed: removedFlightIds,
    });
  }
};

const fetchData = async () => {
  const timeDiff = Date.now() - lastFetchTime;

  if (!getApiResponsePromise || timeDiff >= cacheTime) {
    console.warn('Calling API');

    getApiResponsePromise = new Promise(async (resolve, reject) => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        return reject(new Error('API error'));
      }

      return resolve(response.json());
    });
    lastFetchTime = Date.now();
  } else {
    console.log('Using cached promise', timeDiff);
  }
  return getApiResponsePromise;
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
    flights: async (parent, args) => {
      const data = await fetchData();
      return formatFlightData(data.flights.slice(undefined, args.first));
    },
    stats: async () => {
      const data = await fetchData();
      return {
        activePassengers: data.activePassengersCount,
        activeFlights: data.activeFlightsCount,
        topNationalities: data.topNationalities.map(nationality => ({
          code: nationality.nationalityCode,
          passengers: nationality.count,
        })),
        flightsTakingOffSoon: data.takingOffCount,
        flightsLandingSoon: data.landingCount,
        mostOccupiedFlight: data.mostPaxInfo,
      };
    },
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

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { pubsub },
  port,
});
server.start(async () => {
  console.log(`Server is running on http://localhost:${port}`);

  // cache data initially
  await refreshCache(pubsub);
  setInterval(async () => {
    await refreshCache(pubsub);
  }, REFRESH_CACHE_DATA_INTERVAL);
});
