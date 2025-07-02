import {
  useAbsorbGuidePointingAdjustment,
  useAdjustPointing,
  usePointingAdjustmentOffset,
  useResetGuidePointingAdjustment,
  useResetLocalPointingAdjustment,
} from '@gql/server/PointingHandset';
import { Title } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { useCallback, useEffect, useState } from 'react';

import { CoordinatesInput, type CoordSystem, CoordSystemControls, CurrentCoordinates, ManualInput } from './Controls';
import { strategies } from './strategy';

export default function PointingHandset() {
  // GraphQL Queries
  const { data: offset, loading: offsetLoading } = usePointingAdjustmentOffset();

  // GraphQL Mutations
  const [adjustPointing, { loading: adjustPointingLoading }] = useAdjustPointing();
  const [resetLocalAdjustment, { loading: resetLocalAdjustmentLoading }] = useResetLocalPointingAdjustment();
  const [resetGuideAdjustment, { loading: resetGuideAdjustmentLoading }] = useResetGuidePointingAdjustment();
  const [absorbAdjustment, { loading: absorbAdjustmentLoading }] = useAbsorbGuidePointingAdjustment();

  // State
  const [coordSystem, setCoordSystem] = useState<CoordSystem>('Az/El');

  const [auxCoords, setAuxCoords] = useState({
    horizontal: Number(offset?.local.azimuth.arcseconds ?? 0),
    vertical: Number(offset?.local.elevation.arcseconds ?? 0),
  });

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
    void adjustPointing({ variables: { offset: offsetInput } });
  }, [adjustPointing, auxCoords, strategy]);

  const loading =
    offsetLoading ||
    adjustPointingLoading ||
    resetLocalAdjustmentLoading ||
    resetGuideAdjustmentLoading ||
    absorbAdjustmentLoading;

  // Effects
  useEffect(() => {
    // If we get new data, overwrite the auxX and auxY values and reset coordinate system to AC.
    if (
      !offsetLoading &&
      typeof offset?.local.azimuth.arcseconds === 'number' &&
      typeof offset?.local.elevation.arcseconds === 'number'
    ) {
      setCoordSystem('AC');
      setAuxCoords({ horizontal: offset.local.azimuth.arcseconds, vertical: offset.local.elevation.arcseconds });
    }
  }, [offsetLoading, offset]);

  return (
    <div className="handset">
      <div className="selector-group">
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

      <Title title="Pointing correction" />
      <CurrentCoordinates
        horizontal={offset?.local.azimuth.arcseconds}
        vertical={offset?.local.elevation.arcseconds}
        horizontalLabel="Az"
        verticalLabel="El"
        currentLabel="Current pointing adjustment:"
      />
      <div className="control-row buttons">
        <ButtonGroup>
          <Button size="small" label="Apply" onClick={handleApply} disabled={loading} />
          <Button size="small" label="Reset" onClick={() => void resetLocalAdjustment()} disabled={loading} />
        </ButtonGroup>
      </div>
      <Title title="Guide correction" />
      <CurrentCoordinates
        horizontal={offset?.guide.azimuth.arcseconds}
        vertical={offset?.guide.elevation.arcseconds}
        horizontalLabel="Az"
        verticalLabel="El"
        currentLabel="Current guide adjustment:"
      />
      <div className="control-row buttons">
        <ButtonGroup>
          <Button size="small" label="Reset" onClick={() => void resetGuideAdjustment()} disabled={loading} />
          <Button size="small" label="Absorb" onClick={() => void absorbAdjustment()} disabled={loading} />
        </ButtonGroup>
      </div>
    </div>
  );
}
