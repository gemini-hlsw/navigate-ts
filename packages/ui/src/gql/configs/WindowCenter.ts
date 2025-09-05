import { useMutation, useQuery } from '@apollo/client/react';

import { graphql } from './gen';

const WINDOW_CENTER = graphql(`
  query windowCenter($site: Site!) {
    windowCenter(site: $site) {
      site
      x
      y
    }
  }
`);

export function useWindowCenter(site: 'GN' | 'GS') {
  return useQuery(WINDOW_CENTER, {
    variables: { site },
    context: { clientName: 'navigateConfigs' },
  });
}

const SET_WINDOW_CENTER = graphql(`
  mutation setWindowCenter($site: Site!, $x: Float, $y: Float) {
    setWindowCenter(site: $site, x: $x, y: $y) {
      site
      x
      y
    }
  }
`);

export function useSetWindowCenter() {
  return useMutation(SET_WINDOW_CENTER, { context: { clientName: 'navigateConfigs' } });
}
