export const GemsInstrumentTypeDefs = `#graphql
  type GemsInstrument {
    pk: Int!
    beamsplitter: String!
    adc: Boolean!
    astrometricMode: String!
  }

  type Query {
    gemsInstrument: GemsInstrument
  }

  type Mutation {
    updateGemsInstrument(
      pk: Int!
      beamsplitter: String
      adc: Boolean
      astrometricMode: String
    ): GemsInstrument!
  }
`;
