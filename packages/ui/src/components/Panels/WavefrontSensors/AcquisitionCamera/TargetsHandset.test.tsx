import { render } from 'vitest-browser-react';
import TargetsHandset from './TargetsHandset';
import { renderWithContext } from '@gql/render';
import { MockedResponse } from '@apollo/client/testing';
import {
  ABSORB_TARGET_ADJUSTMENT_MUTATION,
  ADJUST_TARGET_MUTATION,
  RESET_TARGET_ADJUSTMENT_MUTATION,
  TARGET_ADJUSTMENT_OFFSETS_QUERY,
  TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
} from '@gql/server/TargetsHandset';
import { MockedResponseOf } from '@gql/util';

describe(TargetsHandset.name, () => {
  let sut: ReturnType<typeof renderWithContext>;

  beforeEach(() => {
    sut = renderWithContext(<TargetsHandset />, { mocks });
  });

  it('should render', () => {
    expect(sut.container).toBeVisible();
  });

  it('clicking applies calls adjustTarget mutation', async () => {
    await sut.getByRole('button', { name: 'Apply' }).click();

    expect(adjustTargetMutationMock.result).toHaveBeenCalledOnce();
    expect(adjustTargetMutationMock.variableMatcher).toHaveBeenCalledWith({
      target: 'OIWFS',
      offset: {
        focalPlaneAdjustment: {
          deltaX: { arcseconds: 0.0 },
          deltaY: { arcseconds: 0.0 },
        },
      },
      openLoops: false,
    });
  });

  it('changing variables updates the mutation variables', async () => {
    await sut.getByTestId('+X').click();
    await sut.getByTestId('-Y').click();
    await sut.getByLabelText('Open loops').click();

    await sut.getByRole('button', { name: 'Apply' }).click();

    expect(adjustTargetMutationMock.variableMatcher).toHaveBeenCalledWith({
      target: 'OIWFS',
      offset: {
        focalPlaneAdjustment: {
          deltaX: { arcseconds: 5 },
          deltaY: { arcseconds: -5 },
        },
      },
      openLoops: true,
    });
  });

  it('clicking reset calls resetTargetAdjustment mutation', async () => {
    await sut.getByRole('button', { name: 'Reset' }).click();

    expect(resetTargetAdjustmentMutationMock.result).toHaveBeenCalledOnce();
    expect(resetTargetAdjustmentMutationMock.variableMatcher).toHaveBeenCalledWith({
      target: 'OIWFS',
      openLoops: false,
    });
  });

  it('clicking absorb calls absorbTargetAdjustment mutation', async () => {
    await sut.getByRole('button', { name: 'Absorb' }).click();

    expect(absorbTargetAdjustmentMutationMock.result).toHaveBeenCalledOnce();
    expect(absorbTargetAdjustmentMutationMock.variableMatcher).toHaveBeenCalledWith({
      target: 'OIWFS',
    });
  });
});

const targetAdjustmentOffsetsData = {
  targetAdjustmentOffsets: {
    sourceA: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    pwfs1: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    pwfs2: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
    oiwfs: {
      deltaX: {
        arcseconds: 0.0,
      },
      deltaY: {
        arcseconds: 0.0,
      },
    },
  },
};

const resetTargetAdjustmentMutationMock = {
  request: {
    query: RESET_TARGET_ADJUSTMENT_MUTATION,
  },
  variableMatcher: vi.fn().mockImplementation(() => true),
  result: vi.fn().mockImplementation(() => ({
    data: {
      resetTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  })),
} satisfies MockedResponseOf<typeof RESET_TARGET_ADJUSTMENT_MUTATION>;

const adjustTargetMutationMock = {
  request: {
    query: ADJUST_TARGET_MUTATION,
  },
  variableMatcher: vi.fn().mockImplementation(() => true),
  result: vi.fn().mockImplementation(() => ({
    data: {
      adjustTarget: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  })),
} satisfies MockedResponseOf<typeof ADJUST_TARGET_MUTATION>;

const absorbTargetAdjustmentMutationMock = {
  request: {
    query: ABSORB_TARGET_ADJUSTMENT_MUTATION,
  },
  variableMatcher: vi.fn().mockImplementation(() => true),
  result: vi.fn().mockImplementation(() => ({
    data: {
      absorbTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  })),
} satisfies MockedResponseOf<typeof ADJUST_TARGET_MUTATION>;

const mocks: MockedResponse[] = [
  {
    request: {
      query: TARGET_ADJUSTMENT_OFFSETS_QUERY,
      variables: {},
    },

    result: {
      data: targetAdjustmentOffsetsData,
    },
  } satisfies MockedResponseOf<typeof TARGET_ADJUSTMENT_OFFSETS_QUERY>,
  {
    request: {
      query: TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
      variables: {},
    },
    maxUsageCount: 2,
    result: {
      data: targetAdjustmentOffsetsData,
    },
  } satisfies MockedResponseOf<typeof TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION>,
  adjustTargetMutationMock,
  resetTargetAdjustmentMutationMock,
  absorbTargetAdjustmentMutationMock,
];
