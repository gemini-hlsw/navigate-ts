import type { AdjustTarget, GetTargetAdjustmentOffsetsQuery } from '@gql/server/gen/graphql';
import {
  useAbsorbTargetAdjustment,
  useAdjustTarget,
  useResetTargetAdjustment,
  useTargetAdjustmentOffsets,
} from '@gql/server/TargetsHandset';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { Dropdown } from 'primereact/dropdown';
import { useCallback, useState } from 'react';

import { AlignmentSelector, Autoadjust, CurrentCoordinates, InputControls, OpenLoopsInput } from './Controls';
import type { Coords, HandsetStrategy } from './strategy';
import { strategies } from './strategy';

type FocalPlaneOffset = NonNullable<GetTargetAdjustmentOffsetsQuery['targetAdjustmentOffsets']['oiwfs']>;

export default function TargetsHandset({ canEdit }: { canEdit: boolean }) {
  // GraphQL Queries
  const { data: offsets, loading: offsetsLoading } = useTargetAdjustmentOffsets();

  // GraphQL Mutations
  const [adjustTarget, { loading: adjustTargetLoading }] = useAdjustTarget();
  const [resetOffset, { loading: resetOffsetLoading }] = useResetTargetAdjustment();
  const [absorbOffset, { loading: absorbOffsetLoading }] = useAbsorbTargetAdjustment();

  const loading = offsetsLoading || adjustTargetLoading || resetOffsetLoading || absorbOffsetLoading;

  // State
  const [selectedTarget, setSelectedTarget] = useState(targetOptions[0]!.value);

  const defaultAlignment = 'AC';
  const [strategy, setStrategy] = useState<HandsetStrategy>(strategies[defaultAlignment]);

  let offset: FocalPlaneOffset | undefined;
  switch (selectedTarget) {
    case 'OIWFS':
      offset = offsets?.oiwfs ?? undefined;
      break;
    case 'PWFS1':
      offset = offsets?.pwfs1 ?? undefined;
      break;
    case 'PWFS2':
      offset = offsets?.pwfs2 ?? undefined;
      break;
    case 'SOURCE_A':
      offset = offsets?.sourceA ?? undefined;
      break;
    default:
      if (!loading) console.warn('Unknown target selected:', selectedTarget);
  }

  const [openLoops, setOpenLoops] = useState(true);

  const handleApply = useCallback(
    (coords: Coords) =>
      adjustTarget({
        variables: {
          target: selectedTarget,
          offset: strategy.toInput(coords),
          openLoops,
        },
      }),
    [adjustTarget, openLoops, selectedTarget, strategy],
  );

  return (
    <div className="handset">
      <div className="selector-group">
        <TargetSelector loading={loading} target={selectedTarget} onChange={setSelectedTarget} canEdit={canEdit} />
        <AlignmentSelector
          defaultAlignment={defaultAlignment}
          onChange={setStrategy}
          loading={loading}
          canEdit={canEdit}
        />
      </div>

      <InputControls loading={loading} handleApply={handleApply} strategy={strategy} canEdit={canEdit} />
      <OpenLoopsInput openLoops={openLoops} onChange={setOpenLoops} loading={loading} canEdit={canEdit} />

      <CurrentCoordinates
        horizontal={offset?.deltaX.arcseconds}
        vertical={offset?.deltaY.arcseconds}
        horizontalLabel="X"
        verticalLabel="Y"
      />

      <div className="control-row buttons">
        <ButtonGroup>
          <Button
            size="small"
            label="Reset"
            disabled={loading || !canEdit}
            onClick={() => resetOffset({ variables: { openLoops, target: selectedTarget } })}
          />
          <Button
            size="small"
            label="Absorb"
            disabled={loading || !canEdit}
            onClick={() => absorbOffset({ variables: { target: selectedTarget } })}
          />
        </ButtonGroup>
      </div>

      <Autoadjust />
    </div>
  );
}

const targetOptions: { label: string; value: AdjustTarget }[] = [
  { value: 'OIWFS', label: 'OIWFS' },
  { value: 'PWFS1', label: 'PWFS1' },
  { value: 'PWFS2', label: 'PWFS2' },
  { value: 'SOURCE_A', label: 'Base' },
];

function TargetSelector({
  target,
  onChange,
  loading,
  canEdit,
}: {
  target: AdjustTarget;
  onChange: (value: AdjustTarget) => void;
  loading: boolean;
  canEdit: boolean;
}) {
  return (
    <>
      <label htmlFor="handsets-target">Target</label>
      <Dropdown
        inputId="handsets-target"
        disabled={loading || !canEdit}
        value={target}
        onChange={(e) => onChange(e.value as AdjustTarget)}
        options={targetOptions}
      />
    </>
  );
}
