import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import type { Target } from '@gql/configs/gen/graphql';
import { GET_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_ROTATOR } from '@gql/configs/Rotator';
import { GET_INSTRUMENT_PORT } from '@gql/server/Instrument';
import { NAVIGATE_STATE, NAVIGATE_STATE_SUBSCRIPTION } from '@gql/server/NavigateState';
import { RESTORE_TARGET_MUTATION, SWAP_TARGET_MUTATION } from '@gql/server/TargetSwap';
import type { MockedResponseOf } from '@gql/util';
import type { RenderResult } from 'vitest-browser-react';

import { renderWithContext } from '@/test/render';

import { TargetSwapButton } from './TargetSwapButton';

describe(TargetSwapButton.name, () => {
  let sut: RenderResult;

  describe('onSwappedTarget is false', () => {
    beforeEach(async () => {
      sut = renderWithContext(
        <TargetSwapButton selectedTarget={selectedTarget as Target} oiSelected={oiSelected as Target} />,
        {
          mocks: [...mocks, ...navigateStatesMock(false)],
        },
      );
      // wait for state to load
      await expect.element(sut.getByRole('button')).toBeEnabled();
    });

    it('should render', async () => {
      await expect.element(sut.getByRole('button')).toHaveTextContent('Point to Guide Star');
      await expect.element(sut.getByRole('button')).not.toHaveClass('p-button-danger');
    });

    it('should swap target when onSwappedTarget is false', async () => {
      await sut.getByRole('button').click();

      const swapTargetMock = mocks.find((m) => m.request.query === SWAP_TARGET_MUTATION)!;
      expect(swapTargetMock.result).toHaveBeenCalledOnce();
    });
  });

  describe('onSwappedTarget is true', () => {
    beforeEach(async () => {
      sut = renderWithContext(
        <TargetSwapButton selectedTarget={selectedTarget as Target} oiSelected={oiSelected as Target} />,
        {
          mocks: [...mocks, ...navigateStatesMock(true)],
        },
      );
      // wait for state to load
      await expect.element(sut.getByRole('button')).toBeEnabled();
    });

    it('should restore target', async () => {
      await expect.element(sut.getByRole('button')).toHaveTextContent('Point to Base');
      await expect.element(sut.getByRole('button')).toHaveClass('p-button-danger');

      await sut.getByRole('button').click();

      const restoreTargetMock = mocks.find((m) => m.request.query === RESTORE_TARGET_MUTATION)!;
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
  wavelength: 100,
  createdAt: '2024-09-25T11:57:29.410Z',
};

const oiSelected = {
  pk: 10,
  id: 't-000',
  name: 'OI Target',
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
  type: 'OIWFS',
  createdAt: '2024-09-25T11:57:29.410Z',
};

const mocks = [
  {
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
  } satisfies MockedResponseOf<typeof GET_ROTATOR>,
  {
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
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT>,
  {
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
            id: oiSelected.id,
            name: oiSelected.name,
            sidereal: {
              ra: { hms: oiSelected.ra.hms },
              dec: { dms: oiSelected.dec.dms },
              epoch: oiSelected.epoch,
            },
          },
        },
      },
    },
    result: vi.fn().mockReturnValue({ data: { swapTarget: { result: 'SUCCESS', msg: '' } } }),
  } satisfies MockedResponseOf<typeof SWAP_TARGET_MUTATION>,
  {
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
            wavelength: { nanometers: selectedTarget.wavelength },
          },
          oiwfs: {
            tracking: {
              nodAchopA: true,
              nodAchopB: false,
              nodBchopA: false,
              nodBchopB: true,
            },
            target: {
              name: oiSelected.name,
              sidereal: {
                ra: { hms: oiSelected?.ra?.hms },
                dec: { dms: oiSelected?.dec?.dms },
                epoch: oiSelected.epoch,
              },
            },
          },
        },
      },
    },
    result: vi.fn().mockReturnValue({ data: { restoreTarget: { result: 'SUCCESS', msg: '' } } }),
  } satisfies MockedResponseOf<typeof RESTORE_TARGET_MUTATION>,
  {
    request: {
      query: GET_CONFIGURATION,
    },
    variableMatcher: () => true,
    result: {
      data: {
        configuration: {
          pk: 1,
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
          obsReference: 'G-2025A-ENG-GMOSN-01-0004',
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CONFIGURATION>,
  {
    request: { query: GET_INSTRUMENT_PORT },
    maxUsageCount: Infinity,
    variableMatcher: () => true,
    result: vi.fn().mockReturnValue({
      data: {
        instrumentPort: 3,
      },
    }),
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>,
];

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
  } satisfies MockedResponseOf<typeof NAVIGATE_STATE>,
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
  } satisfies MockedResponseOf<typeof NAVIGATE_STATE_SUBSCRIPTION>,
];
