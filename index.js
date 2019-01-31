const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    comments: () => {
      return [];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});