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
import { useState } from 'react';

import { AlignmentSelector, CurrentCoordinates, InputControls } from './Controls';
import { type Coords, strategies, type HandsetStrategy } from './strategy';

export default function PointingHandset({ canEdit }: { canEdit: boolean }) {
  // GraphQL Queries
  const { data: offset, loading: offsetLoading } = usePointingAdjustmentOffset();

  // GraphQL Mutations
  const [adjustPointing, { loading: adjustPointingLoading }] = useAdjustPointing();
  const [resetLocalAdjustment, { loading: resetLocalAdjustmentLoading }] = useResetLocalPointingAdjustment();
  const [resetGuideAdjustment, { loading: resetGuideAdjustmentLoading }] = useResetGuidePointingAdjustment();
  const [absorbAdjustment, { loading: absorbAdjustmentLoading }] = useAbsorbGuidePointingAdjustment();

  // State
  const defaultAlignment = 'Az/El';
  const [strategy, setStrategy] = useState<HandsetStrategy>(strategies[defaultAlignment]);

  const handleApply = (coords: Coords) => adjustPointing({ variables: { offset: strategy.toInput(coords) } });

  const loading =
    offsetLoading ||
    adjustPointingLoading ||
    resetLocalAdjustmentLoading ||
    resetGuideAdjustmentLoading ||
    absorbAdjustmentLoading;

  return (
    <div className="handset">
      <div className="selector-group">
        <AlignmentSelector
          defaultAlignment={defaultAlignment}
          onChange={setStrategy}
          loading={loading}
          canEdit={canEdit}
        />
      </div>

      <InputControls loading={loading} handleApply={handleApply} strategy={strategy} canEdit={canEdit} />

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
          <Button size="small" label="Reset" onClick={() => resetLocalAdjustment()} disabled={loading || !canEdit} />
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
          <Button size="small" label="Reset" onClick={() => resetGuideAdjustment()} disabled={loading || !canEdit} />
          <Button size="small" label="Absorb" onClick={() => absorbAdjustment()} disabled={loading || !canEdit} />
        </ButtonGroup>
      </div>
    </div>
  );
}
