import { GET_CONFIGURATION } from '@gql/configs/Configuration';
import { GET_INSTRUMENT } from '@gql/configs/Instrument';
import { GET_ROTATOR } from '@gql/configs/Rotator';
import { GET_TARGETS } from '@gql/configs/Target';
import type { MockedResponseOf } from '@gql/util';
import type { ResultOf, VariablesOf } from '@graphql-typed-document-node/core';

import { renderWithContext } from '@/test/render';

import { Slew, SLEW_MUTATION } from './Buttons';
import { GET_INSTRUMENT_PORT } from './Instrument';

describe(Slew.name, () => {
  it('should call slew mutation when pressed', async () => {
    const sut = renderWithContext(<Slew label="Slew Telescope" />, {
      mocks: [configurationMock, instrumentPortMock, rotatorMock, instrumentMock, getTargetsMock, slewMutationMock],
    });
    await sut.getByRole('button').click();

    expect(slewMutationMock.request.variables).toHaveBeenCalledOnce();
    const variables = slewMutationMock.request.variables.mock.calls[0]?.[0] as VariablesOf<typeof SLEW_MUTATION>;
    expect(variables).toMatchInlineSnapshot(`
      {
        "config": {
          "instParams": {
            "agName": "ACQ_CAM",
            "focusOffset": {
              "micrometers": 0,
            },
            "iaa": {
              "degrees": 0,
            },
            "origin": {
              "x": {
                "arcseconds": 0,
              },
              "y": {
                "arcseconds": 0,
              },
            },
          },
          "instrument": "ACQ_CAM",
          "rotator": {
            "ipa": {
              "degrees": 0,
            },
            "mode": "TRACKING",
          },
          "sourceATarget": {
            "azel": undefined,
            "id": "t-4e16",
            "name": "WG  22",
            "sidereal": {
              "dec": {
                "dms": "-49:48:00.219525",
              },
              "epoch": "J2000.000",
              "parallax": {
                "microarcseconds": 789.123,
              },
              "properMotion": {
                "dec": {
                  "microarcsecondsPerYear": 654321,
                },
                "ra": {
                  "microarcsecondsPerYear": 123456,
                },
              },
              "ra": {
                "hms": "12:38:49.781122",
              },
              "radialVelocity": {
                "centimetersPerSecond": 321.654,
              },
            },
            "wavelength": {
              "nanometers": 630,
            },
          },
        },
        "obsId": "o-3580",
        "slewOptions": {
          "autoparkAowfs": false,
          "autoparkGems": true,
          "autoparkOiwfs": false,
          "autoparkPwfs1": false,
          "autoparkPwfs2": true,
          "resetPointing": true,
          "shortcircuitMountFilter": true,
          "shortcircuitTargetFilter": false,
          "stopGuide": true,
          "zeroChopThrow": true,
          "zeroGuideOffset": false,
          "zeroInstrumentOffset": true,
          "zeroMountDiffTrack": true,
          "zeroMountOffset": true,
          "zeroSourceDiffTrack": true,
          "zeroSourceOffset": true,
        },
      }
    `);
  });
});

const configurationMock = {
  request: {
    query: GET_CONFIGURATION,
    variables: () => true,
  },
  result: {
    data: {
      configuration: {
        pk: 2,
        selectedTarget: 8,
        selectedOiTarget: null,
        selectedP1Target: null,
        selectedP2Target: null,
        oiGuidingType: 'NORMAL',
        p1GuidingType: 'NORMAL',
        p2GuidingType: 'NORMAL',
        obsTitle: 'WG  22',
        obsId: 'o-3580',
        obsInstrument: 'GMOS_SOUTH',
        obsSubtitle: null,
        obsReference: 'G-2025A-0159-D-0433',
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_CONFIGURATION>;

const instrumentPortMock = {
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
} satisfies MockedResponseOf<typeof GET_INSTRUMENT_PORT>;

const rotatorMock = {
  request: {
    query: GET_ROTATOR,
    variables: {},
  },
  result: {
    data: {
      rotator: {
        pk: 1,
        angle: 0,
        tracking: 'TRACKING',
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_ROTATOR>;

const instrumentMock = {
  request: {
    query: GET_INSTRUMENT,
    variables: () => true,
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      instrument: {
        pk: 27,
        name: 'ACQ_CAM',
        iaa: 0,
        issPort: 1,
        focusOffset: 0,
        wfs: 'NONE',
        originX: 0,
        originY: 0,
        ao: false,
        extraParams: {},
        isTemporary: false,
        comment: null,
        createdAt: new Date().toISOString(),
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_INSTRUMENT>;

const getTargetsMock = {
  request: {
    query: GET_TARGETS,
  },
  result: {
    data: {
      targets: [
        {
          pk: 8,
          id: 't-4e16',
          name: 'WG  22',
          ra: {
            degrees: 189.7074213416667,
            hms: '12:38:49.781122',
          },
          dec: {
            degrees: 310.1999390236111,
            dms: '-49:48:00.219525',
          },
          az: null,
          el: null,
          properMotion: {
            ra: 123456,
            dec: 654321,
          },
          parallax: 789.123,
          radialVelocity: 321.654,
          magnitude: 13.792915,
          band: 'G',
          epoch: 'J2000.000',
          type: 'SCIENCE',
          wavelength: 630,
          createdAt: '2025-07-22T14:13:04.094Z',
        },
      ],
    },
  },
} satisfies MockedResponseOf<typeof GET_TARGETS>;

const slewMutationMock = {
  request: {
    query: SLEW_MUTATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: vi.fn().mockReturnValue({
    data: {
      slew: {
        result: 'SUCCESS',
      },
    } satisfies ResultOf<typeof SLEW_MUTATION>,
  }),
} satisfies MockedResponseOf<typeof SLEW_MUTATION>;
