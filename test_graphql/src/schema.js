const { gql } = require('apollo-server');

const typeDefs = gql
`
    type User {
       id: Int
       firstname: String
       lastname: String
       email: String
       password: String
       is_active: String
   }

   type Message {
       message: String
   }

   type Query{
        users(id: Int): [User],
   }

   type Mutation {
       addUser (
           firstname: String!,
           lastname: String!,
           email: String!,
           password: String!,
       ): User,
       login (
           email: String!,
           password: String!,
       ): Message
   }

   schema {
       query: Query
       mutation: Mutation
   }
`;

module.exports = typeDefs;