import type { MockedResponse } from '@apollo/client/testing';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import type { Target } from '@gql/configs/gen/graphql';
import { GET_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_ROTATOR } from '@gql/configs/Rotator';
import { renderWithContext } from '@gql/render';
import { NAVIGATE_STATE, NAVIGATE_STATE_SUBSCRIPTION } from '@gql/server/NavigateState';
import { RESTORE_TARGET_MUTATION, SWAP_TARGET_MUTATION } from '@gql/server/TargetSwap';
import type { ResultOf, VariablesOf } from '@graphql-typed-document-node/core';
import type { RenderResult } from 'vitest-browser-react';

import { TargetSwapButton } from './TargetSwapButton';

describe(TargetSwapButton.name, () => {
  let sut: RenderResult;

  describe('onSwappedTarget is false', () => {
    beforeEach(async () => {
      sut = renderWithContext(<TargetSwapButton selectedTarget={selectedTarget as Target} />, {
        mocks: [getRotatorMock, getInstrumentMock, getConfigurationMock, swapTargetMock, ...navigateStatesMock(false)],
      });
      // wait for state to load
      await expect.element(sut.getByRole('button')).toBeVisible();
    });

    it('should render', async () => {
      await expect.element(sut.getByRole('button')).toHaveTextContent('Point to Guide Star');
    });

    it('should swap target when onSwappedTarget is false', async () => {
      await sut.getByRole('button').click();

      await expect.element(sut.getByRole('button')).not.toHaveClass('p-button-loading');
      expect(swapTargetMock.result).toHaveBeenCalledOnce();
    });
  });

  describe('onSwappedTarget is true', () => {
    beforeEach(async () => {
      sut = renderWithContext(<TargetSwapButton selectedTarget={selectedTarget as Target} />, {
        mocks: [
          getRotatorMock,
          getInstrumentMock,
          getConfigurationMock,
          restoreTargetMock,
          ...navigateStatesMock(true),
        ],
      });
      // wait for state to load
      await expect.element(sut.getByRole('button')).toBeInTheDocument();
    });

    it('should restore target', async () => {
      await expect.element(sut.getByRole('button')).toHaveTextContent('Point to Base');

      await sut.getByRole('button').click();

      expect(restoreTargetMock.result).toHaveBeenCalledOnce();
    });
  });
});

const selectedTarget = {
  pk: 3,
  id: 't-19e',
  name: 'TYC 4517-185-1',
  ra: {
    degrees: 56.69542085833334,
    hms: '03:46:46.901006',
  },
  dec: {
    degrees: 80.07267194527778,
    dms: '+80:04:21.618990',
  },
  az: null,
  el: null,
  epoch: 'J2000.000',
  type: 'SCIENCE',
  createdAt: '2024-09-25T11:57:29.410Z',
};

const getRotatorMock: MockedResponse<ResultOf<typeof GET_ROTATOR>> = {
  request: {
    query: GET_ROTATOR,
    variables: {},
  },
  result: {
    data: {
      rotator: {
        pk: 2,
        angle: 0,
        tracking: 'TRACKING',
      },
    },
  },
};

const getInstrumentMock: MockedResponse<ResultOf<typeof GET_INSTRUMENT>> = {
  request: {
    query: GET_INSTRUMENT,
  },
  maxUsageCount: 5,
  variableMatcher: () => true,
  result: {
    data: {
      instrument: {
        pk: 1,
        wfs: 'OIWFS',
        iaa: 359.877,
        issPort: 3,
        focusOffset: 0.0,
        name: 'GMOS_SOUTH',
        ao: false,
        originX: 0.0,
        originY: 0.0,
        extraParams: {},
      },
    },
  },
};

const navigateStatesMock = (onSwappedTarget: boolean) => [
  {
    request: {
      query: NAVIGATE_STATE,
      variables: {},
    },
    result: {
      data: {
        navigateState: {
          onSwappedTarget,
        },
      },
    },
  } satisfies MockedResponse<ResultOf<typeof NAVIGATE_STATE>>,
  {
    delay: 300,
    request: {
      query: NAVIGATE_STATE_SUBSCRIPTION,
      variables: {},
    },
    maxUsageCount: Infinity,
    result: {
      data: {
        navigateState: {
          onSwappedTarget,
        },
      },
    },
  } satisfies MockedResponse<ResultOf<typeof NAVIGATE_STATE_SUBSCRIPTION>>,
];

const swapTargetMock: MockedResponse<
  ResultOf<typeof SWAP_TARGET_MUTATION>,
  VariablesOf<typeof SWAP_TARGET_MUTATION>
> = {
  request: {
    query: SWAP_TARGET_MUTATION,
    variables: {
      swapConfig: {
        acParams: {
          iaa: { degrees: 359.877 },
          focusOffset: { micrometers: 0 },
          agName: 'GMOS_SOUTH',
          origin: { x: { micrometers: 0 }, y: { micrometers: 0 } },
        },
        rotator: { ipa: { degrees: 0 }, mode: 'TRACKING' },
        guideTarget: {
          id: selectedTarget.id,
          name: selectedTarget.name,
          sidereal: {
            ra: { hms: selectedTarget.ra.hms },
            dec: { dms: selectedTarget.dec.dms },
            epoch: selectedTarget.epoch,
          },
        },
      },
    },
  },
  result: vi.fn().mockImplementation(() => ({ data: { swapTarget: { result: 'SUCCESS', msg: '' } } })),
};

const restoreTargetMock: MockedResponse<
  ResultOf<typeof RESTORE_TARGET_MUTATION>,
  VariablesOf<typeof RESTORE_TARGET_MUTATION>
> = {
  request: {
    query: RESTORE_TARGET_MUTATION,
    variables: {
      config: {
        instrument: 'GMOS_SOUTH',
        instParams: {
          iaa: { degrees: 359.877 },
          focusOffset: { micrometers: 0 },
          agName: 'GMOS_SOUTH',
          origin: { x: { micrometers: 0 }, y: { micrometers: 0 } },
        },
        rotator: { ipa: { degrees: 0 }, mode: 'TRACKING' },
        sourceATarget: {
          id: selectedTarget.id,
          name: selectedTarget.name,
          sidereal: {
            ra: { hms: selectedTarget.ra.hms },
            dec: { dms: selectedTarget.dec.dms },
            epoch: selectedTarget.epoch,
          },
        },
      },
    },
  },
  result: vi.fn().mockImplementation(() => ({ data: { restoreTarget: { result: 'SUCCESS', msg: '' } } })),
};

const getConfigurationMock: MockedResponse<ResultOf<typeof GET_CONFIGURATION>> = {
  request: {
    query: GET_CONFIGURATION,
  },
  variableMatcher: () => true,
  result: {
    data: {
      configuration: {
        pk: 1,
        site: 'GN',
        selectedTarget: 3,
        selectedOiTarget: 8,
        selectedP1Target: null,
        selectedP2Target: null,
        oiGuidingType: 'NORMAL',
        p1GuidingType: 'NORMAL',
        p2GuidingType: 'NORMAL',
        obsTitle: 'Markarian 573',
        obsId: 'o-1e1',
        obsInstrument: 'GMOS_NORTH',
        obsSubtitle: null,
      },
    },
  },
};
