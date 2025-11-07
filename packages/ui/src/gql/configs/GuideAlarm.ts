import { useMutation, useQuery } from '@apollo/client/react';

import { graphql } from './gen';

export const GET_GUIDE_ALARMS = graphql(`
  query guideAlarms {
    guideAlarms {
      OIWFS {
        wfs
        limit
        enabled
      }
      PWFS1 {
        wfs
        limit
        enabled
      }
      PWFS2 {
        wfs
        limit
        enabled
      }
    }
  }
`);

export function useGuideAlarms() {
  return useQuery(GET_GUIDE_ALARMS, {
    context: { clientName: 'navigateConfigs' },
  });
}

export const UPDATE_GUIDE_ALARM = graphql(`
  mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {
    updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {
      wfs
      limit
      enabled
    }
  }
`);

export function useUpdateGuideAlarm() {
  return useMutation(UPDATE_GUIDE_ALARM, {
    context: { clientName: 'navigateConfigs' },
  });
}
