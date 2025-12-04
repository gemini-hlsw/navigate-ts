import { useConfiguredInstrument, useUpdateInstrument } from '@gql/configs/Instrument';
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

import { when } from '@/Helpers/functions';

import { AlignAngleInput, AlignmentSelector, CurrentCoordinates, InputControls } from './Controls';
import { type Coords, type HandsetStrategy, strategies } from './strategy';

export default function PointingHandset({ canEdit }: { canEdit: boolean }) {
  // GraphQL Queries
  const { data: offset, loading: offsetLoading } = usePointingAdjustmentOffset();
  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  // GraphQL Mutations
  const [adjustPointing, { loading: adjustPointingLoading }] = useAdjustPointing();
  const [resetLocalAdjustment, { loading: resetLocalAdjustmentLoading }] = useResetLocalPointingAdjustment();
  const [resetGuideAdjustment, { loading: resetGuideAdjustmentLoading }] = useResetGuidePointingAdjustment();
  const [absorbAdjustment, { loading: absorbAdjustmentLoading }] = useAbsorbGuidePointingAdjustment();
  const [updateInstrument, { loading: updateInstrumentLoading }] = useUpdateInstrument();

  // State
  const defaultAlignment = 'Az/El';
  const [strategy, setStrategy] = useState<HandsetStrategy>(strategies[defaultAlignment]);

  const alignAngleEnabled = strategy.name === 'OIWFS';

  const handleApply = (coords: Coords) =>
    adjustPointing({
      variables: {
        offset: strategy.toInput(
          coords,
          when(alignAngleEnabled, () => instrument?.alignAngle),
        ),
      },
    });

  const loading =
    offsetLoading ||
    adjustPointingLoading ||
    resetLocalAdjustmentLoading ||
    resetGuideAdjustmentLoading ||
    absorbAdjustmentLoading ||
    instrumentLoading ||
    updateInstrumentLoading;

  return (
    <div className="handset">
      <div className="selector-group">
        <AlignmentSelector
          defaultAlignment={defaultAlignment}
          onChange={setStrategy}
          loading={loading}
          canEdit={canEdit}
          instrumentWfs={instrument?.wfs}
        />

        {alignAngleEnabled && (
          <AlignAngleInput
            disabled={loading || !canEdit || !instrument}
            value={instrument?.alignAngle ?? null}
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            onChange={(value) => updateInstrument({ variables: { pk: instrument?.pk!, alignAngle: value } })}
          />
        )}
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
