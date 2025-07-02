import type { GetTargetAdjustmentOffsetsQuery } from '@gql/server/gen/graphql';
import {
  useAbsorbTargetAdjustment,
  useAdjustTarget,
  useResetTargetAdjustment,
  useTargetAdjustmentOffsets,
} from '@gql/server/TargetsHandset';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { useCallback, useEffect, useState } from 'react';

import type { CoordSystem } from './Controls';
import {
  Autoadjust,
  CoordinatesInput,
  CoordSystemControls,
  CurrentCoordinates,
  ManualInput,
  OpenLoopsInput,
  targetOptions,
  TargetSelector,
} from './Controls';
import { strategies } from './strategy';

type FocalPlaneOffset = NonNullable<GetTargetAdjustmentOffsetsQuery['targetAdjustmentOffsets']['oiwfs']>;

export default function TargetsHandset() {
  // GraphQL Queries
  const { data: offsets, loading: offsetsLoading } = useTargetAdjustmentOffsets();

  // GraphQL Mutations
  const [adjustTarget, { loading: adjustTargetLoading }] = useAdjustTarget();
  const [resetOffset, { loading: resetOffsetLoading }] = useResetTargetAdjustment();
  const [absorbOffset, { loading: absorbOffsetLoading }] = useAbsorbTargetAdjustment();

  const loading = offsetsLoading || adjustTargetLoading || resetOffsetLoading || absorbOffsetLoading;

  // State
  const [selectedTarget, setSelectedTarget] = useState(targetOptions[0]);

  const [coordSystem, setCoordSystem] = useState<CoordSystem>('AC');

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

  const [auxCoords, setAuxCoords] = useState({
    horizontal: Number(offset?.deltaX.arcseconds ?? 0),
    vertical: Number(offset?.deltaY.arcseconds ?? 0),
  });
  const [openLoops, setOpenLoops] = useState(false);

  // Derived state
  const strategy = strategies[coordSystem];

  const handleCoordChange = useCallback(
    ({ horizontal, vertical }: { horizontal?: number; vertical?: number }) => {
      setAuxCoords({ horizontal: horizontal ?? auxCoords.horizontal, vertical: vertical ?? auxCoords.vertical });
    },
    [auxCoords],
  );

  const handleApply = useCallback(() => {
    const offsetInput = strategy.toInput(auxCoords);
    void adjustTarget({
      variables: {
        target: selectedTarget,
        offset: offsetInput,
        openLoops,
      },
    });
  }, [adjustTarget, auxCoords, openLoops, selectedTarget, strategy]);

  // Effects
  useEffect(() => {
    // If we get new data, overwrite the auxX and auxY values and reset coordinate system to AC.
    if (
      !offsetsLoading &&
      typeof offset?.deltaX.arcseconds === 'number' &&
      typeof offset?.deltaY.arcseconds === 'number'
    ) {
      setCoordSystem('AC');
      setAuxCoords({ horizontal: offset.deltaX.arcseconds, vertical: offset.deltaY.arcseconds });
    }
  }, [offsetsLoading, offset]);

  return (
    <div className="handset">
      <div className="selector-group">
        <TargetSelector loading={loading} target={selectedTarget} onChange={setSelectedTarget} />
        <CoordSystemControls coordSystem={coordSystem} onChange={setCoordSystem} loading={loading} />
      </div>

      <CoordinatesInput
        loading={loading}
        onChange={handleCoordChange}
        x={auxCoords.horizontal}
        y={auxCoords.vertical}
        strategy={strategy}
      />

      <ManualInput loading={loading} onChange={handleCoordChange} auxCoords={auxCoords} strategy={strategy} />

      <CurrentCoordinates
        horizontal={offset?.deltaX.arcseconds}
        vertical={offset?.deltaY.arcseconds}
        horizontalLabel="X"
        verticalLabel="Y"
      />

      <OpenLoopsInput openLoops={openLoops} onChange={setOpenLoops} loading={loading} />

      <div className="control-row buttons">
        <ButtonGroup>
          <Button size="small" label="Apply" loading={loading} onClick={handleApply} />
          <Button
            size="small"
            label="Reset"
            loading={loading}
            onClick={() => void resetOffset({ variables: { openLoops, target: selectedTarget } })}
          />
          <Button
            size="small"
            label="Absorb"
            loading={loading}
            onClick={() => void absorbOffset({ variables: { target: selectedTarget } })}
          />
        </ButtonGroup>
      </div>

      <Autoadjust />
    </div>
  );
}
