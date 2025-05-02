export const GemsGuideLoopTypeDefs = `#graphql
  type GemsGuideLoop {
    pk: Int!
    aoEnabled: Boolean!
    focus: Boolean!
    rotation: Boolean!
    tipTilt: Boolean!
    anisopl: Boolean!
    flexure: Boolean!
  }

  type Query {
    gemsGuideLoop: GemsGuideLoop
  }

  type Mutation {
    updateGemsGuideLoop(
      pk: Int!
      aoEnabled: Boolean
      focus: Boolean
      rotation: Boolean
      tipTilt: Boolean
      anisopl: Boolean
      flexure: Boolean
    ): GemsGuideLoop!
  }
`;
