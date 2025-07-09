import { graphql } from './gen';

export const SERVER_CONFIGURATION = graphql(`
  query serverConfiguration {
    serverConfiguration {
      version
      site
      odbUri
      ssoUri
    }
  }
`);
