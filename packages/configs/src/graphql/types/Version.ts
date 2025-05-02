export const VersionTypeDefs = `#graphql
  type Version {
    version: String!
    databaseVersion: String!
  }

  type Query {
    version: Version!
  }
`;
