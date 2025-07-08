import {
  useAbsorbOriginAdjustment,
  useAdjustOrigin,
  useOriginAdjustmentOffset,
  useResetOriginAdjustment,
} from '@gql/server/OriginHandset';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { useCallback, useEffect, useState } from 'react';

import {
  Autoadjust,
  CoordinatesInput,
  type CoordSystem,
  CoordSystemControls,
  CurrentCoordinates,
  ManualInput,
  OpenLoopsInput,
} from './Controls';
import { strategies } from './strategy';

export default function OriginHandset({ canEdit }: { canEdit: boolean }) {
  // GraphQL Queries
  const { data: offset, loading: offsetLoading } = useOriginAdjustmentOffset();

  // GraphQL Mutations
  const [adjustOrigin, { loading: adjustOriginLoading }] = useAdjustOrigin();
  const [resetAdjustment, { loading: resetAdjustmentLoading }] = useResetOriginAdjustment();
  const [absorbAdjustment, { loading: absorbAdjustmentLoading }] = useAbsorbOriginAdjustment();

  // State
  const [coordSystem, setCoordSystem] = useState<CoordSystem>('AC');

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
    void adjustOrigin({
      variables: {
        offset: offsetInput,
        openLoops,
      },
    });
  }, [adjustOrigin, auxCoords, openLoops, strategy]);

  const loading = offsetLoading || adjustOriginLoading || resetAdjustmentLoading || absorbAdjustmentLoading;

  // Effects
  useEffect(() => {
    // If we get new data, overwrite the auxX and auxY values and reset coordinate system to AC.
    if (
      !offsetLoading &&
      typeof offset?.deltaX.arcseconds === 'number' &&
      typeof offset?.deltaY.arcseconds === 'number'
    ) {
      setCoordSystem('AC');
      setAuxCoords({ horizontal: offset.deltaX.arcseconds, vertical: offset.deltaY.arcseconds });
    }
  }, [offsetLoading, offset]);

  return (
    <div className="handset">
      <div className="selector-group">
        <CoordSystemControls coordSystem={coordSystem} onChange={setCoordSystem} loading={loading} canEdit={canEdit} />
      </div>
      <CoordinatesInput
        loading={loading}
        onChange={handleCoordChange}
        x={auxCoords.horizontal}
        y={auxCoords.vertical}
        strategy={strategy}
        canEdit={canEdit}
      />

      <ManualInput
        loading={loading}
        onChange={handleCoordChange}
        auxCoords={auxCoords}
        strategy={strategy}
        canEdit={canEdit}
      />

      <CurrentCoordinates
        horizontal={offset?.deltaX.arcseconds as number}
        vertical={offset?.deltaY.arcseconds as number}
        horizontalLabel="X"
        verticalLabel="Y"
      />

      <OpenLoopsInput openLoops={openLoops} onChange={setOpenLoops} loading={loading} canEdit={canEdit} />

      <div className="control-row buttons">
        <ButtonGroup>
          <Button size="small" label="Apply" loading={loading} onClick={handleApply} disabled={canEdit} />
          <Button
            size="small"
            label="Reset"
            loading={loading}
            disabled={canEdit}
            onClick={() => void resetAdjustment({ variables: { openLoops } })}
          />
          <Button
            size="small"
            label="Absorb"
            loading={loading}
            disabled={canEdit}
            onClick={() => void absorbAdjustment()}
          />
        </ButtonGroup>
      </div>

      <Autoadjust />
    </div>
  );
}
