import {
  useAbsorbOriginAdjustment,
  useAdjustOrigin,
  useOriginAdjustmentOffset,
  useResetOriginAdjustment,
} from '@gql/server/OriginHandset';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { useCallback, useState } from 'react';

import {
  type Alignment,
  AlignmentSelector,
  Autoadjust,
  CurrentCoordinates,
  InputControls,
  OpenLoopsInput,
} from './Controls';
import type { Coords } from './strategy';
import { strategies } from './strategy';

export default function InstrumentHandset({ canEdit }: { canEdit: boolean }) {
  // GraphQL Queries
  const { data: offset, loading: offsetLoading } = useOriginAdjustmentOffset();

  // GraphQL Mutations
  const [adjustOrigin, { loading: adjustOriginLoading }] = useAdjustOrigin();
  const [resetAdjustment, { loading: resetAdjustmentLoading }] = useResetOriginAdjustment();
  const [absorbAdjustment, { loading: absorbAdjustmentLoading }] = useAbsorbOriginAdjustment();

  // State
  const [alignment, setAlignment] = useState<Alignment>('AC');

  const [openLoops, setOpenLoops] = useState(false);

  // Derived state
  const strategy = strategies[alignment];

  const handleApply = useCallback(
    async (coords: Coords) =>
      adjustOrigin({
        variables: {
          offset: strategy.toInput(coords),
          openLoops,
        },
      }),
    [adjustOrigin, openLoops, strategy],
  );

  const loading = offsetLoading || adjustOriginLoading || resetAdjustmentLoading || absorbAdjustmentLoading;

  return (
    <div className="handset">
      <div className="selector-group">
        <AlignmentSelector alignment={alignment} onChange={setAlignment} loading={loading} canEdit={canEdit} />
      </div>

      <InputControls loading={loading} handleApply={handleApply} strategy={strategy} canEdit={canEdit} />

      <OpenLoopsInput openLoops={openLoops} onChange={setOpenLoops} loading={loading} canEdit={canEdit} />

      <CurrentCoordinates
        horizontal={offset?.deltaX.arcseconds as number}
        vertical={offset?.deltaY.arcseconds as number}
        horizontalLabel="X"
        verticalLabel="Y"
      />

      <div className="control-row buttons">
        <ButtonGroup>
          <Button
            size="small"
            label="Reset"
            disabled={loading || !canEdit}
            onClick={() => resetAdjustment({ variables: { openLoops } })}
          />
          <Button size="small" label="Absorb" disabled={loading || !canEdit} onClick={() => absorbAdjustment()} />
        </ButtonGroup>
      </div>

      <Autoadjust />
    </div>
  );
}
