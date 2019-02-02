const { gql } = require('apollo-server');

module.exports = gql`

  type Query {
    getFeed: [FeedItem!]!

    getUsers: [User!]!
    getUser(id: ID!): User
  }

  type Mutation {
    createPost: Post
    createCheckin: Checkin
  }

  """
  Can comment types, so documentation is built in
  """
  type User {
    id: ID!
    "Can comment fields as well"
    name: String!
    picture: String!

    posts: [Post!]!
  }

  type Post {
    id: ID!
    content: String!
    "User who made the post"
    user: User!
  }

  type Checkin {
    id: ID!
    latitude: Float!
    longitude: Float!
    user: User!
  }

  type Ad {
    id: ID!
    content: String!
    link: String
  }

  union FeedItem = Post | Checkin | Ad
`;
