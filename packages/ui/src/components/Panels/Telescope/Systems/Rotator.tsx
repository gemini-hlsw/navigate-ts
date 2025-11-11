import { useRotator, useUpdateRotator } from '@gql/configs/Rotator';
import { Title } from '@Shared/Title/Title';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

import type { TrackingType } from '@/types';

export function Rotator({ canEdit }: { canEdit: boolean }) {
  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;
  const [updateRotator, { loading: updateLoading }] = useUpdateRotator();

  const loading = rotatorLoading || updateLoading;

  return (
    <div className="rotator">
      <Title title={'Rotator'} />
      <div className="body">
        <label htmlFor="rotator-mode" className="label">
          Mode
        </label>
        <Dropdown
          inputId="rotator-mode"
          disabled={!canEdit}
          value={rotator?.tracking ?? null}
          options={['TRACKING', 'FIXED']}
          loading={loading}
          onChange={async (e) => {
            if (rotator)
              await updateRotator({
                variables: { pk: rotator.pk, tracking: e.target.value as TrackingType },
              });
          }}
          placeholder="Select a tracking"
        />
        <label htmlFor="rotator-pa" className="label">
          Position Angle
        </label>
        <InputNumber
          inputId="rotator-pa"
          disabled={!canEdit || loading}
          value={rotator?.angle ?? null}
          minFractionDigits={2}
          maxFractionDigits={3}
          onValueChange={async (e) => {
            if (rotator)
              await updateRotator({
                variables: { pk: rotator.pk, angle: e.target.value },
              });
          }}
          mode="decimal"
        />
      </div>
    </div>
  );
}
