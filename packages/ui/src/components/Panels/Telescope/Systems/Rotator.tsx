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
        <span className="label">Mode</span>
        <Dropdown
          disabled={!canEdit}
          value={rotator?.tracking}
          options={['TRACKING', 'FIXED']}
          loading={loading}
          onChange={(e) => {
            if (rotator)
              void updateRotator({
                variables: { pk: rotator.pk, tracking: e.target.value as TrackingType },
              });
          }}
          placeholder="Select a tracking"
        />
        <span className="label">Position Angle</span>
        <InputNumber
          disabled={!canEdit || loading}
          value={rotator?.angle}
          minFractionDigits={2}
          maxFractionDigits={7}
          onValueChange={(e) => {
            if (rotator)
              void updateRotator({
                variables: { pk: rotator.pk, angle: e.target.value },
              });
          }}
          mode="decimal"
        />
      </div>
    </div>
  );
}
