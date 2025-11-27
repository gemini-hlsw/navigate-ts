import { CAL_PARAMS } from '@gql/configs/CalParams';
import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import { GET_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_ROTATOR } from '@gql/configs/Rotator';
import { GET_TARGETS } from '@gql/configs/Target';
import { GET_INSTRUMENT_PORT } from '@gql/server/Instrument';
import { NAVIGATE_STATE, NAVIGATE_STATE_SUBSCRIPTION } from '@gql/server/NavigateState';
import { RESTORE_TARGET_MUTATION, SWAP_TARGET_MUTATION } from '@gql/server/TargetSwap';
import type { MockedResponseOf } from '@gql/util';
import { userEvent } from 'vitest/browser';
import type { RenderResult } from 'vitest-browser-react';

import { operationOutcome } from '@/test/helpers';
import { renderWithContext } from '@/test/render';
import type { TargetType } from '@/types';

import { TargetSwapButton } from './TargetSwapButton';

describe(TargetSwapButton.name, () => {
  let sut: RenderResult;

  describe('onSwappedTarget is false', () => {
    beforeEach(async () => {
      sut = await renderWithContext(
        <TargetSwapButton
          configurationPk={1}
          guiderTargets={[selectedOi]}
          selectedGuider={selectedOi}
          loading={false}
        />,
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
      await userEvent.click(sut.getByRole('button'));

      expect(swapTargetMock.request.variables).toHaveBeenCalledExactlyOnceWith({
        swapConfig: {
          acParams: {
            iaa: { degrees: 359.877 },
            focusOffset: { micrometers: 0 },
            agName: 'GMOS_SOUTH',
            origin: { x: { arcseconds: 0 }, y: { arcseconds: 0 } },
          },
          rotator: { ipa: { degrees: 0 }, mode: 'TRACKING' },
          guideTarget: {
            id: selectedOi.id,
            name: selectedOi.name,
            sidereal: {
              ra: { hms: selectedOi.ra.hms },
              dec: { dms: selectedOi.dec.dms },
              epoch: selectedOi.epoch,
              properMotion: {
                ra: {
                  microarcsecondsPerYear: selectedOi.properMotion?.ra,
                },
                dec: {
                  microarcsecondsPerYear: selectedOi.properMotion?.dec,
                },
              },
              radialVelocity: {
                centimetersPerSecond: selectedOi.radialVelocity,
              },
              parallax: {
                microarcseconds: selectedOi.parallax,
              },
            },
          },
        },
      });
    });
  });

  describe('onSwappedTarget is true', () => {
    beforeEach(async () => {
      sut = await renderWithContext(
        <TargetSwapButton
          configurationPk={1}
          guiderTargets={[selectedOi]}
          selectedGuider={selectedOi}
          loading={false}
        />,
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

      await userEvent.click(sut.getByRole('button'));

      expect(restoreTargetMock.request.variables).toHaveBeenCalledExactlyOnceWith({
        config: {
          baffles: {
            autoConfig: {
              nearirLimit: {
                micrometers: 3,
              },
              visibleLimit: {
                micrometers: 1.05,
              },
            },
          },
          instParams: {
            agName: 'GMOS_SOUTH',
            focusOffset: {
              micrometers: 0,
            },
            iaa: {
              degrees: 359.877,
            },
            origin: {
              x: {
                arcseconds: 0,
              },
              y: {
                arcseconds: 0,
              },
            },
          },
          instrument: 'GMOS_SOUTH',
          oiwfs: undefined,
          pwfs1: undefined,
          pwfs2: undefined,
          rotator: {
            ipa: {
              degrees: 0,
            },
            mode: 'TRACKING',
          },
          sourceATarget: {
            azel: undefined,
            id: 't-19e',
            name: 'TYC 4517-185-1',
            sidereal: {
              dec: {
                dms: '+80:04:21.618990',
              },
              epoch: 'J2000.000',
              parallax: {
                microarcseconds: 0,
              },
              properMotion: {
                dec: {
                  microarcsecondsPerYear: 0,
                },
                ra: {
                  microarcsecondsPerYear: 0,
                },
              },
              ra: {
                hms: '03:46:46.901006',
              },
              radialVelocity: {
                centimetersPerSecond: 0,
              },
            },
            wavelength: {
              nanometers: 100,
            },
          },
        },
      });
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
    __typename: 'RA',
  },
  dec: {
    degrees: 80.07267194527778,
    dms: '+80:04:21.618990',
    __typename: 'Dec',
  },
  properMotion: {
    ra: 0,
    dec: 0,
    __typename: 'ProperMotion',
  },
  radialVelocity: 0,
  parallax: 0,
  az: null,
  el: null,
  epoch: 'J2000.000',
  type: 'SCIENCE',
  wavelength: 100,
  createdAt: '2024-09-25T11:57:29.410Z',
  band: null,
  magnitude: null,
  __typename: 'Target',
} satisfies TargetType;

const selectedOi = {
  pk: 10,
  id: 't-000',
  name: 'OI Target',
  ra: {
    degrees: 56.69542085833334,
    hms: '03:46:46.901006',
    __typename: 'RA',
  },
  dec: {
    degrees: 80.07267194527778,
    dms: '+80:04:21.618990',
    __typename: 'Dec',
  },
  properMotion: {
    ra: 0,
    dec: 0,
    __typename: 'ProperMotion',
  },
  radialVelocity: 0,
  parallax: 0,
  az: null,
  el: null,
  epoch: 'J2000.000',
  type: 'OIWFS',
  createdAt: '2024-09-25T11:57:29.410Z',
  band: null,
  magnitude: null,
  wavelength: null,
  __typename: 'Target',
} satisfies TargetType;

const restoreTargetMock = {
  request: {
    query: RESTORE_TARGET_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: {
    data: { restoreTarget: operationOutcome },
  },
} satisfies MockedResponseOf<typeof RESTORE_TARGET_MUTATION>;

const swapTargetMock = {
  request: {
    query: SWAP_TARGET_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: {
    data: { swapTarget: operationOutcome },
  },
} satisfies MockedResponseOf<typeof SWAP_TARGET_MUTATION>;

const mocks = [
  {
    request: {
      query: GET_ROTATOR,
      variables: {},
    },
    result: {
      data: {
        rotator: {
          __typename: 'Rotator',
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
      variables: () => true,
    },
    maxUsageCount: Infinity,
    result: {
      data: {
        instrument: {
          __typename: 'InstrumentConfig',
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
          isTemporary: false,
          comment: null,
          createdAt: new Date().toISOString(),
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT>,
  swapTargetMock,
  restoreTargetMock,
  {
    request: {
      query: GET_CONFIGURATION,
      variables: () => true,
    },
    result: {
      data: {
        configuration: {
          __typename: 'Configuration',
          pk: 1,
          selectedTarget: 3,
          selectedOiTarget: 8,
          selectedP1Target: null,
          selectedP2Target: null,
          selectedGuiderTarget: null,
          oiGuidingType: 'NORMAL',
          p1GuidingType: 'NORMAL',
          p2GuidingType: 'NORMAL',
          obsTitle: 'Markarian 573',
          obsId: 'o-1e1',
          obsInstrument: 'GMOS_NORTH',
          obsSubtitle: null,
          obsReference: 'G-2025A-ENG-GMOSN-01-0004',
          baffleMode: 'AUTO',
          centralBaffle: null,
          deployableBaffle: null,
        },
      },
    },
  } satisfies MockedResponseOf<typeof GET_CONFIGURATION>,
  {
    request: {
      query: GET_INSTRUMENT_PORT,
      variables: () => true,
    },
    maxUsageCount: Infinity,
    result: {
      data: {
        instrumentPort: 3,
      },
    },
  } satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>,
  {
    request: {
      query: CAL_PARAMS,
      variables: () => true,
    },
    result: {
      data: {
        calParams: {
          __typename: 'CalParams',
          pk: 1,
          site: 'GN',
          acqCamX: 518,
          acqCamY: 550,
          baffleVisible: 1.05,
          baffleNearIR: 3,
          topShutterCurrentLimit: 27,
          bottomShutterCurrentLimit: 32,
          pwfs1CenterX: 2.324,
          pwfs1CenterY: -12.213,
          pwfs1CenterZ: 0,
          pwfs2CenterX: -3.493,
          pwfs2CenterY: -2.48,
          pwfs2CenterZ: 0,
          defocusEnabled: true,
          gmosSfoDefocus: 90,
          gnirsSfoDefocus: 30,
          gnirsP1Defocus: 3.7,
          gmosP1Defocus: -7,
          gmosOiDefocus: 0,
          comment: 'Initial CalParams for GN',
          createdAt: new Date().toISOString(),
        },
      },
    },
  } satisfies MockedResponseOf<typeof CAL_PARAMS>,
  {
    request: {
      query: GET_TARGETS,
      variables: {},
    },
    result: {
      data: {
        targets: [selectedTarget, selectedOi],
      },
    },
  } satisfies MockedResponseOf<typeof GET_TARGETS>,
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
          __typename: 'NavigateState',
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
          __typename: 'NavigateState',
          onSwappedTarget,
        },
      },
    },
  } satisfies MockedResponseOf<typeof NAVIGATE_STATE_SUBSCRIPTION>,
];
