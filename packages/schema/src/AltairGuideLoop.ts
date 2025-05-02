export const AltairGuideLoopTypeDefs = `#graphql
  type AltairGuideLoop {
    pk: Int!
    aoEnabled: Boolean!
    oiBlend: Boolean!
    focus: Boolean!
    p1Ttf: Boolean!
    strap: Boolean!
    oiTtf: Boolean!
    ttgs: Boolean!
    sfo: Boolean!
  }

  type Query {
    altairGuideLoop: AltairGuideLoop
  }

  type Mutation {
    updateAltairGuideLoop(
      pk: Int!
      aoEnabled: Boolean
      oiBlend: Boolean
      focus: Boolean
      p1Ttf: Boolean
      strap: Boolean
      oiTtf: Boolean
      ttgs: Boolean
      sfo: Boolean
    ): AltairGuideLoop!
  }
`;
