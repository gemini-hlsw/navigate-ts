export const MechanismTypeDefs = `#graphql
  enum StatusType {
    PENDING
    ACTIVE
    DONE
    ERROR
  }

  type Mechanism {
    pk: Int!
    mcs: StatusType!
    mcsPark: StatusType!
    mcsUnwrap: StatusType!
    scs: StatusType!
    crcs: StatusType!
    crcsPark: StatusType!
    crcsUnwrap: StatusType!
    pwfs1: StatusType!
    pwfs1Park: StatusType!
    pwfs1Unwrap: StatusType!
    pwfs2: StatusType!
    pwfs2Park: StatusType!
    pwfs2Unwrap: StatusType!
    oiwfs: StatusType!
    oiwfsPark: StatusType!
    odgw: StatusType!
    odgwPark: StatusType!
    aowfs: StatusType!
    aowfsPark: StatusType!
    dome: StatusType!
    domePark: StatusType!
    domeMode: String!
    shutters: StatusType!
    shuttersPark: StatusType!
    shutterMode: String!
    shutterAperture: Int!
    wVGate: StatusType!
    wVGateClose: StatusType!
    wVGateValue: Int!
    eVGate: StatusType!
    eVGateClose: StatusType!
    eVGateValue: Int!
    agScienceFoldPark: StatusType!
    agAoFoldPark: StatusType!
    agAcPickoffPark: StatusType!
    agParkAll: StatusType!
  }

  type Query {
    mechanism: Mechanism
  }

  type Mutation {
    updateMechanism(
      pk: Int!                # Primary key
      mcs: StatusType
      mcsPark: StatusType
      mcsUnwrap: StatusType
      scs: StatusType
      crcs: StatusType
      crcsPark: StatusType
      crcsUnwrap: StatusType
      pwfs1: StatusType
      pwfs1Park: StatusType
      pwfs1Unwrap: StatusType
      pwfs2: StatusType
      pwfs2Park: StatusType
      pwfs2Unwrap: StatusType
      oiwfs: StatusType
      oiwfsPark: StatusType
      odgw: StatusType
      odgwPark: StatusType
      aowfs: StatusType
      aowfsPark: StatusType
      dome: StatusType
      domePark: StatusType
      domeMode: String
      shutters: StatusType
      shuttersPark: StatusType
      shutterMode: String
      shutterAperture: Int
      wVGate: StatusType
      wVGateClose: StatusType
      wVGateValue: Int
      eVGate: StatusType
      eVGateClose: StatusType
      eVGateValue: Int
      agScienceFoldPark: StatusType
      agAoFoldPark: StatusType
      agAcPickoffPark: StatusType
      agParkAll: StatusType
    ): Mechanism!
  }
`;
