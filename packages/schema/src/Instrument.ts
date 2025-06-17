export const InstrumentTypeDefs = `#graphql

  enum WfsType {
    NONE
    PWFS1
    PWFS2
    OIWFS
  }

  type Instrument {
    pk: Int!                         # Record primary key
    name: String!                    # Instrument name
    iaa: Float!                      # Instrument Alignment Angle
    issPort: Int!                    # Instrument Support Structure port
    focusOffset: Float!              # Focus offset
    wfs: WfsType!                    # Asociated Wavefront Sensor
    originX: Float!                  # Origin of instrument X position
    originY: Float!                  # Origin of instrument Y position
    ao: Boolean!                     # Adaptive Optics is being used?
    extraParams: JSON!               # Instrument dependent set of parameters
  }

  type DistinctInstrument {
    name: String!
  }

  type DistinctPort {
    issPort: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    instrument(
      name: String
      issPort: Int
      wfs: WfsType
      extraParams: JSON
    ): Instrument

    instruments(
      name: String
      issPort: Int
      wfs: WfsType
      extraParams: JSON
    ): [Instrument!]!

    distinctInstruments: [DistinctInstrument!]!
    
    distinctPorts(name: String): [DistinctPort!]!
  }

  type Mutation {
    createInstrument(
      name: String!       # Instrument name
      iaa: Float          # Instrument Alignment Angle
      issPort: Int!       # Instrument Support Structure port
      focusOffset: Float  # Focus offset
      wfs: WfsType        # Asociated Wavefront Sensor
      originX: Float      # Origin of instrument X position
      originY: Float      # Origin of instrument Y position
      ao: Boolean         # Adaptive Optics is being used?
      extraParams: JSON   # Instrument dependent set of parameters
    ): Instrument!

    updateInstrument(
      pk: Int!
      name: String
      iaa: Float
      issPort: Int
      focusOffset: Float
      wfs: WfsType
      originX: Float
      originY: Float
      ao: Boolean
      extraParams: JSON
    ): Instrument!

    # Reset the instruments to their default values
    resetInstruments(name: String!): [Instrument!]!
  }
`;
