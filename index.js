const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const db = require('./db');

// Create the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db }
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
