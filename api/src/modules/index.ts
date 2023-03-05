import { gql } from 'apollo-server-express';
import reports from './reports';
import { GraphQLScalarType } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
const typeDefs = gql`
  scalar Time
  type Query {
    getVersion: String!
  }
  type Mutation {
    version: String!
  }
`;
const timeScalar = new GraphQLScalarType({
  name: 'Time',
  description: 'Time custom scalar type',
 serialize: (value: any) => value,
});
const resolvers = {
  Time: timeScalar,
  Query: {
    getVersion: () => `v1`,
  },
};
const schema = makeExecutableSchema({
  typeDefs: [typeDefs, reports.typeDefs],
  resolvers: [resolvers, reports.resolvers],
});
export default schema;