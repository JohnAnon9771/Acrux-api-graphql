import { gql } from 'apollo-server-express';

export default gql`
  type Task {
    id: ID!
    title: String
    description: String
    term: String
    importance: String
  }

  type User {
    id: ID!
    name: String
    email: String
    password: String
    tasks: [Task]
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
  }
`;
