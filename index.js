const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    comments: () => {
      return [];
    },
    comment: (idk, args) => {
      return {
        id: args.id
      }
    }
  }
};

// Create the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});