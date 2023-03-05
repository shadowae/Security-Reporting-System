import { gql } from 'apollo-server-express';
import createReport from './mutations/create-report';
// import updateReport from "./mutations/update-report";
// import deleteReport from "./mutations/delete-report";
import report from './queries/report';

const typeDefs = gql`
  enum Status {
    Queued
    In_Progress
    Success
    Failure
  }
  type Report {
    id: ID!
    status: Status!
    repositoryName: String!
    findings: String!
    queuedAt: String!
    scanningAt: String!
    finishedAt: String!
  }
  input CreateReportInput {
    id: ID
    status: Status!
    repositoryName: String!
    findings: String!
    queuedAt: String!
    scanningAt: String!
    finishedAt: String!
  }
  input UpdateReportInput {
    id: ID
    status: Status!
    repositoryName: String!
    findings: String!
    queuedAt: String!
    scanningAt: String!
    finishedAt: String!
  }
  extend type Query {
    report(id: ID): Report!
  }
  extend type Mutation {
    createReport(input: CreateReportInput!): Report
    updateReport(id: ID!, input: UpdateReportInput!): Report
    deleteReport(id: ID!): Report
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  // Resolvers for Queries
  Query: {
    report,
  },
  // Resolvers for Mutations
  Mutation: {
    createReport,
    // updateReport,
    // deleteReport,
  },
};
export default { typeDefs, resolvers };
