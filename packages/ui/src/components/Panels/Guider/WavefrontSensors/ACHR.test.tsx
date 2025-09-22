import { WINDOW_CENTER } from '@gql/configs/WindowCenter';
import { AC_MECHS_STATE, AC_MECHS_STATE_SUB } from '@gql/server/MechState';
import type { MockedResponseOf } from '@gql/util';

import { renderWithContext } from '@/test/render';

import { ACHR } from './ACHR';

describe(ACHR.name, () => {
  it('should render', async () => {
    const sut = renderWithContext(<ACHR disabled={false} />, { mocks });
    await expect.element(sut.getByLabelText('X', { exact: true })).toHaveValue('449');
    expect(sut.getByLabelText('Y', { exact: true })).toHaveValue('522');
    expect(sut.getByLabelText('Lens', { exact: true })).toHaveValue('AC');
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
      },
    },
  },
} satisfies MockedResponseOf<typeof AC_MECHS_STATE_SUB>;

const windowCenterMock = {
  request: {
    query: WINDOW_CENTER,
    variables: () => true,
  },
  maxUsageCount: Infinity,
  result: {
    data: {
      windowCenter: {
        site: 'GS',
        x: 449,
        y: 522,
      },
    },
  },
} satisfies MockedResponseOf<typeof WINDOW_CENTER>;

const mocks = [mechsStateMock, mechsStateSubMock, windowCenterMock];
