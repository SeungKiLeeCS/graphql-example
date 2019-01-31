const { gql } = require('apollo-server');

module.exports = gql`

  type Query {
    "A simple type for getting started"
    hello: String

    "Get all comments"
    comments: [Comment!]!

    "Get a single comment by its id"
    comment(id: ID): Comment
  }

  """
  Comment on a post or something else of interest!
  """
  type Comment {
    id: ID
    content: String
  }
`;