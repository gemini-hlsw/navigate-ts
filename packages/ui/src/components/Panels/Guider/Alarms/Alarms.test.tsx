import type { MockedResponse } from '@apollo/client/testing';
import { GET_GUIDE_ALARMS, UPDATE_GUIDE_ALARM } from '@gql/configs/GuideAlarm';
import { GUIDE_QUALITY_QUERY, GUIDE_QUALITY_SUBSCRIPTION } from '@gql/server/GuideQuality';
import { GUIDE_STATE_QUERY, GUIDE_STATE_SUBSCRIPTION } from '@gql/server/GuideState';
import type { MockedResponseOf } from '@gql/util';
import { page, userEvent } from '@vitest/browser/context';

import { guideAlarmSoundAtom } from '@/components/atoms/alarm';
import type { RenderResultWithStore } from '@/test/render';
import { renderWithContext } from '@/test/render';

import { Alarms } from './Alarms';

describe(Alarms.name, () => {
  let store: RenderResultWithStore['store'];
  beforeEach(async () => {
    store = renderWithContext(<Alarms />, { mocks }).store;

    // Wait for the alarms to be loaded
    await expect.element(page.getByText('PWFS1')).toBeEnabled();
  });

  it('should render 3 alarms', async () => {
    await expect.element(page.getByText('PWFS1')).toBeInTheDocument();
    await expect.element(page.getByText('PWFS2')).toBeInTheDocument();
    await expect.element(page.getByText('OIWFS')).toBeInTheDocument();
  });

  it('calls updateAlarm when limit is changed', async () => {
    const limitInput = page.getByTestId('limit-PWFS1');

    await userEvent.fill(limitInput, '900');

    await expect.element(page.getByTestId('limit-PWFS1')).toHaveValue('900');
    expect(store.get(guideAlarmSoundAtom)).true;
  });
});

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_GUIDE_ALARMS,
      variables: {},
    },
    result: {
      data: {
        guideAlarms: {
          OIWFS: {
            wfs: 'OIWFS',
            limit: 900,
            enabled: true,
          },
          PWFS1: {
            wfs: 'PWFS1',
            limit: 901,
            enabled: false,
          },
          PWFS2: {
            wfs: 'PWFS2',
            limit: 902,
            enabled: false,
          },
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_GUIDE_ALARMS>,
  {
    request: {
      query: GUIDE_QUALITY_QUERY,
      variables: {},
    },
    result: {
      data: {
        guidersQualityValues: {
          oiwfs: {
            flux: 901,
            centroidDetected: false,
          },
          pwfs1: {
            flux: 902,
            centroidDetected: false,
          },
          pwfs2: {
            flux: 903,
            centroidDetected: false,
          },
        },
      },
    },
  } satisfies MockedResponseOf<typeof GUIDE_QUALITY_QUERY>,
  {
    request: {
      query: GUIDE_QUALITY_SUBSCRIPTION,
      variables: {},
    },
    maxUsageCount: 2,
    result: {
      data: {
        guidersQualityValues: {
          oiwfs: {
            flux: 901,
            centroidDetected: false,
          },
          pwfs1: {
            flux: 902,
            centroidDetected: false,
          },
          pwfs2: {
            flux: 903,
            centroidDetected: false,
          },
        },
      },
    },
  } satisfies MockedResponseOf<typeof GUIDE_QUALITY_SUBSCRIPTION>,
  {
    request: {
      query: UPDATE_GUIDE_ALARM,
      variables: { wfs: 'PWFS1', limit: 900 },
    },
    result: {
      data: {
        updateGuideAlarm: {
          wfs: 'PWFS1',
          limit: 900,
          enabled: true,
        },
      },
    },
  } satisfies MockedResponseOf<typeof UPDATE_GUIDE_ALARM>,
  {
    request: {
      query: GUIDE_STATE_QUERY,
      variables: {},
    },
    result: {
      data: {
        guideState: {
          m2Inputs: ['OIWFS'],
          m2Coma: false,
          m1Input: null,
          mountOffload: true,
          p1Integrating: false,
          p2Integrating: false,
          oiIntegrating: true,
          acIntegrating: false,
        },
      },
    },
  } satisfies MockedResponseOf<typeof GUIDE_STATE_QUERY>,
  {
    request: {
      query: GUIDE_STATE_SUBSCRIPTION,
      variables: {},
    },
    maxUsageCount: 2,
    result: {
      data: {
        guideState: {
          m2Inputs: ['OIWFS'],
          m2Coma: false,
          m1Input: null,
          mountOffload: true,
          p1Integrating: false,
          p2Integrating: false,
          oiIntegrating: true,
          acIntegrating: false,
        },
      },
    },
  } satisfies MockedResponseOf<typeof GUIDE_STATE_SUBSCRIPTION>,
];
