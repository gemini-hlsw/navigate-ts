export const GuideAlarmTypeDefs = `#graphql
type GuideAlarm {
  wfs: WfsType!
  limit: Int!
  enabled: Boolean!
}

type GuideAlarms {
  OIWFS: GuideAlarm!
  PWFS1: GuideAlarm!
  PWFS2: GuideAlarm!
}

type Query {
  guideAlarms: GuideAlarms!
}

type Mutation {
  updateGuideAlarm(
    wfs: WfsType!
    limit: Int
    enabled: Boolean
  ): GuideAlarm!
}
`;
