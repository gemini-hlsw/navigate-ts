import type { MockedResponse } from '@apollo/client/testing';
import type {
  AdjustTarget,
  MutationAdjustOriginArgs,
  MutationAdjustPointingArgs,
  MutationAdjustTargetArgs,
} from '@gql/server/gen/graphql';
import {
  ABSORB_TARGET_ADJUSTMENT_MUTATION,
  ADJUST_TARGET_MUTATION,
  RESET_TARGET_ADJUSTMENT_MUTATION,
  TARGET_ADJUSTMENT_OFFSETS_QUERY,
  TARGET_ADJUSTMENT_OFFSETS_SUBSCRIPTION,
} from '@gql/server/TargetsHandset';
import type { MockedResponseOf } from '@gql/util';
import { userEvent } from '@vitest/browser/context';
import type { Mock } from 'vitest';

import { renderWithContext } from '@/test/render';

import type { Alignment } from './Controls';
import TargetsHandset from './TargetsHandset';

describe(TargetsHandset.name, () => {
  let sut: ReturnType<typeof renderWithContext>;

  beforeEach(() => {
    sut = renderWithContext(<TargetsHandset canEdit={true} />, { mocks });
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

  it('switching target sends different target to absorbTargetAdjustment mutation', async () => {
    await selectTarget('PWFS1');
    await sut.getByRole('button', { name: 'Absorb' }).click();

    expect(absorbTargetAdjustmentMutationMock.variableMatcher).toHaveBeenCalledWith({
      target: 'PWFS1',
    });
  });

  it('should be disabled when canEdit is false', () => {
    sut.unmount();
    sut = renderWithContext(<TargetsHandset canEdit={false} />, { mocks });

    expect(sut.getByRole('button', { name: 'Apply' })).toBeDisabled();
    expect(sut.getByRole('button', { name: 'Reset' })).toBeDisabled();
    expect(sut.getByRole('button', { name: 'Absorb' })).toBeDisabled();
  });

  it.each([
    [
      'UP',
      '+El',
      {
        elevation: { arcseconds: 0.5 },
        azimuth: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '-El',
      {
        elevation: { arcseconds: -0.5 },
        azimuth: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+Az',
      {
        elevation: { arcseconds: 0 },
        azimuth: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      '-Az',
      {
        elevation: { arcseconds: 0 },
        azimuth: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for Az/El %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('Az/El');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.variableMatcher, {
      target: 'OIWFS',
      offset: { horizontalAdjustment: expectedInput },
      openLoops: false,
    });
  });

  it.each([
    [
      'UP',
      '-X',
      {
        deltaX: { arcseconds: -0.5 },
        deltaY: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '+X',
      {
        deltaX: { arcseconds: 0.5 },
        deltaY: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+Y',
      {
        deltaY: { arcseconds: 0.5 },
        deltaX: { arcseconds: 0 },
      },
    ],
    [
      'LEFT',
      '-Y',
      {
        deltaX: { arcseconds: 0 },
        deltaY: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for AC %s matches %s', async (testId, label, expectedInput) => {
    await sut.getByLabelText('Open loops').click();
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.variableMatcher, {
      target: 'OIWFS',
      openLoops: true,
      offset: { focalPlaneAdjustment: expectedInput },
    });
  });

  it.each([
    [
      'UP',
      '-Q',
      {
        q: { arcseconds: -0.5 },
        p: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      '+Q',
      {
        q: { arcseconds: 0.5 },
        p: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      '+P',
      {
        q: { arcseconds: 0 },
        p: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      '-P',
      {
        q: { arcseconds: 0 },
        p: { arcseconds: -0.5 },
      },
    ],
  ])('inputs for Instrument %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('Instrument');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.variableMatcher, {
      target: 'OIWFS',
      offset: { instrumentAdjustment: expectedInput },
      openLoops: false,
    });
  });

  it.each([
    [
      'UP',
      'N',
      {
        deltaDec: { arcseconds: 0.5 },
        deltaRA: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      'S',
      {
        deltaDec: { arcseconds: -0.5 },
        deltaRA: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      'W',
      {
        deltaDec: { arcseconds: 0 },
        deltaRA: { arcseconds: -0.5 },
      },
    ],
    [
      'LEFT',
      'E',
      {
        deltaDec: { arcseconds: 0 },
        deltaRA: { arcseconds: 0.5 },
      },
    ],
  ])('inputs for RA/Dec %s matches %s', async (testId, label, expectedInput) => {
    await selectAlignment('RA/Dec');
    await testDirectionButtonClick(testId, label, adjustTargetMutationMock.variableMatcher, {
      target: 'OIWFS',
      offset: { equatorialAdjustment: expectedInput },
      openLoops: false,
    });
  });

  it.each([
    [
      'UP',
      {
        deltaV: { arcseconds: 0.5 },
        deltaU: { arcseconds: 0 },
      },
    ],
    [
      'DOWN',
      {
        deltaV: { arcseconds: -0.5 },
        deltaU: { arcseconds: 0 },
      },
    ],
    [
      'RIGHT',
      {
        deltaV: { arcseconds: 0 },
        deltaU: { arcseconds: 0.5 },
      },
    ],
    [
      'LEFT',
      {
        deltaV: { arcseconds: 0 },
        deltaU: { arcseconds: -0.5 },
      },
    ],
  ] as const)('inputs for PWFS2 %s matches', async (testId, expectedInput) => {
    await selectAlignment('PWFS2');
    await testDirectionButtonClick(testId, undefined, adjustTargetMutationMock.variableMatcher, {
      target: 'OIWFS',
      openLoops: false,
      offset: { probeFrameAdjustment: { ...expectedInput, probeFrame: 'PWFS_2' } },
    });
  });

  async function selectAlignment(alignment: Alignment) {
    // Bit ugly, but selecting with `selectOptions` does not work for primereact dropdowns
    const alignmentWrapper = sut.getByLabelText('Alignment').element().parentElement!.parentElement!;
    await userEvent.click(alignmentWrapper.lastElementChild!);
    const al = sut.getByText(alignment);
    await userEvent.click(al);
  }

  async function selectTarget(target: AdjustTarget) {
    const targetWrapper = sut.getByLabelText('Target').element().parentElement!.parentElement!;
    await userEvent.click(targetWrapper.lastElementChild!);
    const targetOption = sut.getByText(target);
    await userEvent.click(targetOption);
  }

  async function testDirectionButtonClick(
    testId: string,
    label: string | undefined,
    mock: Mock,
    expectedInput: MutationAdjustOriginArgs | MutationAdjustPointingArgs | MutationAdjustTargetArgs,
  ) {
    const button = sut.getByTestId(testId);
    if (label) expect(button).toHaveAttribute('aria-label', label);
    await button.click();

    expect(mock).toHaveBeenCalledWith(expectedInput);
  }
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
  variableMatcher: vi.fn().mockReturnValue(true),
  result: vi.fn().mockReturnValue({
    data: {
      resetTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  }),
} satisfies MockedResponseOf<typeof RESET_TARGET_ADJUSTMENT_MUTATION>;

const adjustTargetMutationMock = {
  request: {
    query: ADJUST_TARGET_MUTATION,
  },
  maxUsageCount: Infinity,
  variableMatcher: vi.fn().mockReturnValue(true),
  result: vi.fn().mockReturnValue({
    data: {
      adjustTarget: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  }),
} satisfies MockedResponseOf<typeof ADJUST_TARGET_MUTATION>;

const absorbTargetAdjustmentMutationMock = {
  request: {
    query: ABSORB_TARGET_ADJUSTMENT_MUTATION,
  },
  variableMatcher: vi.fn().mockReturnValue(true),
  result: vi.fn().mockReturnValue({
    data: {
      absorbTargetAdjustment: {
        result: 'SUCCESS',
        msg: null,
      },
    },
  }),
} satisfies MockedResponseOf<typeof ABSORB_TARGET_ADJUSTMENT_MUTATION>;

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
