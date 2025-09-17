import type { Target } from '@gql/configs/gen/graphql';
import { useConfiguredInstrument, useInstrument } from '@gql/configs/Instrument';
import { useRotator } from '@gql/configs/Rotator';
import { useNavigateState } from '@gql/server/NavigateState';
import { useRestoreTarget, useSwapTarget } from '@gql/server/TargetSwap';
import { Button } from 'primereact/button';

import { useCanEdit } from '@/components/atoms/auth';
import { useToast } from '@/Helpers/toast';

import {
  createInstrumentSpecificsInput,
  createRotatorTrackingInput,
  createTargetPropertiesInput,
  createTcsConfigInput,
} from './inputs';

export function TargetSwapButton({
  selectedTarget,
  oiSelected,
  // p1Selected,
  // p2Selected,
}: {
  selectedTarget: Target | undefined;
  oiSelected: Target | undefined;
  // p1Selected: Target | undefined;
  // p2Selected: Target | undefined;
}) {
  const canEdit = useCanEdit();
  const toast = useToast();

  const { data, loading: stateLoading, setStale } = useNavigateState();
  const [swapTarget, { loading: swapLoading }] = useSwapTarget(setStale);
  const [restoreTarget, { loading: restoreLoading }] = useRestoreTarget(setStale);

  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  const { data: acData, loading: acLoading } = useInstrument({
    variables: { name: `ACQ_CAM` },
  });

  const acInst = acData?.instrument;
  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;

  const loading = stateLoading || swapLoading || restoreLoading || instrumentLoading || rotatorLoading || acLoading;

  const disabled = !canEdit;

  const label = data?.onSwappedTarget ? 'Point to Base' : 'Point to Guide Star';
  const severity = data?.onSwappedTarget ? 'danger' : undefined;

  const onClick = async () => {
    if (selectedTarget?.id && instrument && rotator && oiSelected && acInst) {
      // TODO: other inputs for swap/nonswap

      if (data?.onSwappedTarget) {
        // If restoring
        // Use the science target
        await restoreTarget({
          variables: {
            config: createTcsConfigInput(instrument, rotator, selectedTarget, oiSelected),
          },
        });
      } else {
        // If swapping
        // Use the acquisition camera
        const instrumentInput = createInstrumentSpecificsInput(acInst);

        // Use Guide target if swapping
        // TODO: Will use OI for now, in the future can be OI, P1 or P2
        const targetInput = createTargetPropertiesInput({ ...oiSelected, id: oiSelected.id ?? 't-000' });

        await swapTarget({
          variables: {
            swapConfig: {
              acParams: instrumentInput,
              rotator: createRotatorTrackingInput(rotator),
              guideTarget: targetInput,
            },
          },
        });
      }
    } else {
      let detail;
      if (!selectedTarget) {
        detail = 'No target';
      } else if (!oiSelected) {
        detail = 'No guide star';
      } else if (!acInst) {
        detail = 'No acquisition camera';
      } else if (!instrument) {
        detail = 'No instrument';
      } else if (!rotator) {
        detail = 'No rotator';
      } else {
        detail = 'Unknown error';
      }
      toast?.show({
        severity: 'warn',
        summary: data?.onSwappedTarget ? 'Cannot restore target' : 'Cannot swap target',
        detail,
      });
    }
  };

  return (
    <Button
      disabled={disabled}
      className="footer"
      label={label}
      onClick={onClick}
      severity={severity}
      loading={loading}
    />
  );
}
