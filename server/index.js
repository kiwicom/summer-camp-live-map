const { GraphQLServer, PubSub } = require('graphql-yoga');
const fetch = require('node-fetch');

async function fetchData() {
  console.warn('Calling API');
  const rawResponse = await fetch('https://3gyucw6pqd.execute-api.eu-west-1.amazonaws.com/dev');
  return rawResponse.json();
}

const typeDefs = `
  type Query {
    flights(first: Int): [Flight]
    stats: Stats
    error: Int
  }

  type Subscription {
    counter: Counter
  }

  type Mutation {
    increaseCounter: Counter
  }

  type Flight {
    id: ID!
#    location: Coordinates
#    orientation: Float
  }

  type Stats {
    activePassengers: Int
    activeFlights: Int
    topNationalities: [Nationality]
  }

  type Nationality {
    code: String
    passengers: Int
  }

  type Counter {
    value: Int
  }
`;

let COUNTER = 0;

const resolvers = {
  Query: {
    flights: async (parent, args) => {
      const data = await fetchData();
      return data.flights.slice(undefined, args.first).map(flight => {
        return {
          id: flight.id,
        }
      })
    },
    stats: async () => {
      const data = await fetchData();
      return {
        activePassengers: data.activePassengersCount,
        activeFlights: data.activeFlightsCount,
        topNationalities: data.topNationalities.map(nationality => ({
          code: nationality.nationalityCode,
          passengers: nationality.count
        }))
      }
    },
    error: () => 'error example'
  },

  Subscription: {
    counter: {
      resolve: (parent) => parent,
      subscribe: (parent, args, { pubsub }) => {
        // TODO: poll the data from API instead

        return pubsub.asyncIterator('COUNTER_TOPIC')
      },
    }
  },

  Mutation: {
    increaseCounter: {
      resolve: () => {
        COUNTER += 1;
        pubsub.publish('COUNTER_TOPIC', { value: COUNTER });
        return {
          value: COUNTER
        }
      }
    }
  }
};

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(() => console.log(`Server is running on http://localhost:4000`));