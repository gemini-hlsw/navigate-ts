export const ConfigurationTypeDefs = `#graphql
  enum GuidingType {
    NORMAL
  }

  enum SiteType {
    GN
    GS
  }

  type Configuration {
    pk: Int!
    site: SiteType!
    selectedTarget: Int
    selectedOiTarget: Int
    selectedP1Target: Int
    selectedP2Target: Int
    oiGuidingType: GuidingType!
    p1GuidingType: GuidingType!
    p2GuidingType: GuidingType!
    obsTitle: String
    obsId: String
    obsInstrument: String
    obsSubtitle: String
    obsReference: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    configuration(pk: Int): Configuration
  }

  type Mutation {
    createConfiguration(
      site: SiteType
      selectedTarget: Int
      selectedOiTarget: Int
      selectedP1Target: Int
      selectedP2Target: Int
      oiGuidingType: GuidingType!
      p1GuidingType: GuidingType!
      p2GuidingType: GuidingType!
      obsTitle: String
      obsId: String
      obsInstrument: String
      obsSubtitle: String
      obsReference: String
    ): Configuration!

    updateConfiguration(
      pk: Int!
      site: SiteType
      selectedTarget: Int
      selectedOiTarget: Int
      selectedP1Target: Int
      selectedP2Target: Int
      oiGuidingType: GuidingType
      p1GuidingType: GuidingType
      p2GuidingType: GuidingType
      obsTitle: String
      obsId: String
      obsInstrument: String
      obsSubtitle: String
      obsReference: String
    ): Configuration!
  }
`;
