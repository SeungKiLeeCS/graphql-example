const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    user: () => ({
      id: '1234',
      name: 'Bo Jangles'
    })
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