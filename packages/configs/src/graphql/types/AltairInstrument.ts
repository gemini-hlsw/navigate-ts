export const AltairInstrumentTypeDefs = `#graphql
  type AltairInstrument {
    pk: Int!
    beamsplitter: String!
    startMagnitude: Float!
    seeing: Float!
    windSpeed: Float!
    forceMode: Boolean!
    ndFilter: Boolean!
    fieldLens: Boolean!
    deployAdc: Boolean!
    adjustAdc: Boolean!
    lgs: Boolean!
  }

  type Query {
    altairInstrument: AltairInstrument
  }

  type Mutation {
    updateAltairInstrument(
      pk: Int!                # Primary key
      beamsplitter: String
      startMagnitude: Float
      seeing: Float
      windSpeed: Float
      forceMode: Boolean
      ndFilter: Boolean
      fieldLens: Boolean
      deployAdc: Boolean
      adjustAdc: Boolean
      lgs: Boolean
    ): AltairInstrument!
  }
`;
