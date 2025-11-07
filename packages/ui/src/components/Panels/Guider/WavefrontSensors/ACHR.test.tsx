import { CAL_PARAMS } from '@gql/configs/CalParams';
import { AC_MECHS_STATE, AC_MECHS_STATE_SUB } from '@gql/server/MechState';
import type { MockedResponseOf } from '@gql/util';

import { renderWithContext } from '@/test/render';

import { ACHR } from './ACHR';

describe(ACHR.name, () => {
  it('should render', async () => {
    const sut = await renderWithContext(<ACHR disabled={false} />, { mocks });
    await expect.element(sut.getByLabelText('Lens', { exact: true })).toHaveValue('AC');
    expect(sut.getByLabelText('Filter', { exact: true })).toHaveValue('B-blue');
    expect(sut.getByLabelText('Neutral density', { exact: true })).toHaveValue('ND2');
  });
});

const mechsStateMock = {
  request: {
    query: AC_MECHS_STATE,
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      acMechsState: {
        lens: 'AC',
        filter: 'B_BLUE',
        ndFilter: 'ND2',
        __typename: 'AcMechs',
      },
    },
  },
} satisfies MockedResponseOf<typeof AC_MECHS_STATE>;

const mechsStateSubMock = {
  request: {
    query: AC_MECHS_STATE_SUB,
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      acMechsState: {
        lens: 'AC',
        filter: 'B_BLUE',
        ndFilter: 'ND2',
        __typename: 'AcMechs',
      },
    },
  },
} satisfies MockedResponseOf<typeof AC_MECHS_STATE_SUB>;

const calParamsMock = {
  request: {
    query: CAL_PARAMS,
    variables: () => true,
  },
  result: {
    data: {
      calParams: {
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
        __typename: 'CalParams',
      },
    },
  },
} satisfies MockedResponseOf<typeof CAL_PARAMS>;

const mocks = [mechsStateMock, mechsStateSubMock, calParamsMock];
