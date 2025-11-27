import { GET_CONFIGURATION, UPDATE_CONFIGURATION } from '@gql/configs/Configuration';
import type { Configuration } from '@gql/configs/gen/graphql';
import type { MockedResponseOf } from '@gql/util';

import { selectDropdownOption } from '@/test/helpers';
import { type RenderResultWithStore, renderWithContext } from '@/test/render';

import { M2Baffles } from './M2Baffles';

describe(M2Baffles.name, () => {
  let sut: RenderResultWithStore;
  beforeEach(async () => {
    sut = await renderWithContext(<M2Baffles canEdit={true} />, {
      mocks: [getConfigurationMock, updateConfigurationMock],
    });
  });

  it('should render', async () => {
    await expect.element(sut.getByLabelText('Mode', { exact: true })).toHaveValue('AUTO');
    expect(sut.getByLabelText('Central Baffle')).not.toBeInTheDocument();
    expect(sut.getByLabelText('Deployable Baffle')).not.toBeInTheDocument();
  });

  it('should render manual options when mode is MANUAL', async () => {
    await selectDropdownOption(sut, 'Select mode', 'MANUAL');

    expect(updateConfigurationMock.request.variables).toHaveBeenCalledExactlyOnceWith({
      pk: 1,
      baffleMode: 'MANUAL',
    });
    await expect.element(sut.getByLabelText('Central Baffle')).toBeVisible();
    expect(sut.getByLabelText('Deployable Baffle')).toBeVisible();
  });
});

const getConfigurationMock = {
  request: {
    query: GET_CONFIGURATION,
    variables: () => true,
  },
  result: {
    data: {
      configuration: {
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
        __typename: 'Configuration',
      },
    },
  },
} satisfies MockedResponseOf<typeof GET_CONFIGURATION>;

const updateConfigurationMock = {
  request: {
    query: UPDATE_CONFIGURATION,
    variables: vi.fn().mockReturnValue(true),
  },
  result: (arg) => ({
    data: {
      updateConfiguration: {
        ...getConfigurationMock.result.data.configuration,
        ...(arg as Configuration),
      },
    },
  }),
} satisfies MockedResponseOf<typeof UPDATE_CONFIGURATION>;
