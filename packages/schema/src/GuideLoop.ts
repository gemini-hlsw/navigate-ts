export const GuideLoopTypeDefs = `#graphql
  type GuideLoop {
    pk: Int!
    m2TipTiltEnable: Boolean!
    m2TipTiltSource: String!
    m2FocusEnable: Boolean!
    m2FocusSource: String!
    m2TipTiltFocusLink: Boolean!
    m2ComaEnable: Boolean!
    m1CorrectionsEnable: Boolean!
    m2ComaM1CorrectionsSource: String!
    mountOffload: Boolean!
    daytimeMode: Boolean!
    probeTracking: String!
    lightPath: String!
  }

  type Query {
    guideLoop: GuideLoop
  }

  type Mutation {
    updateGuideLoop(
      pk: Int!                # Primary key
      m2TipTiltEnable: Boolean
      m2TipTiltSource: String
      m2FocusEnable: Boolean
      m2FocusSource: String
      m2TipTiltFocusLink: Boolean
      m2ComaEnable: Boolean
      m1CorrectionsEnable: Boolean
      m2ComaM1CorrectionsSource: String
      mountOffload: Boolean
      daytimeMode: Boolean
      probeTracking: String
      lightPath: String
    ): GuideLoop!
  }
`;
