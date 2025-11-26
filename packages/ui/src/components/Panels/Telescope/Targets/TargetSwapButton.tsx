import { useCalParams } from '@gql/configs/CalParams';
import { useConfiguration } from '@gql/configs/Configuration';
import type { Target } from '@gql/configs/gen/graphql';
import { useConfiguredInstrument, useInstrument } from '@gql/configs/Instrument';
import { useRotator } from '@gql/configs/Rotator';
import { useNavigateState } from '@gql/server/NavigateState';
import { useRestoreTarget, useSwapTarget } from '@gql/server/TargetSwap';
import { Button } from 'primereact/button';

import { useCanEdit } from '@/components/atoms/auth';
import { useServerConfigValue } from '@/components/atoms/config';
import { useToast } from '@/Helpers/toast';

import {
  createInstrumentSpecificsInput,
  createRotatorTrackingInput,
  createTargetPropertiesInput,
  createTcsConfigInput,
} from './inputs';

export function TargetSwapButton({
  selectedTarget,
  selectedOi,
  selectedP1,
  selectedP2,
}: {
  selectedTarget: Target | undefined;
  selectedOi: Target | undefined;
  selectedP1: Target | undefined;
  selectedP2: Target | undefined;
}) {
  const { site } = useServerConfigValue();

  const canEdit = useCanEdit();
  const toast = useToast();

  const { data, loading: stateLoading, setStale } = useNavigateState();
  const [swapTarget, { loading: swapLoading }] = useSwapTarget(setStale);
  const [restoreTarget, { loading: restoreLoading }] = useRestoreTarget(setStale);

  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const configuration = configurationData?.configuration;

  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  const { data: acData, loading: acLoading } = useInstrument({
    variables: { name: `ACQ_CAM` },
  });

  const acInst = acData?.instrument;
  const { data: rotatorData, loading: rotatorLoading } = useRotator();
  const rotator = rotatorData?.rotator;

  const { data: calParamsData, loading: calParamsLoading } = useCalParams(site);
  const calParams = calParamsData?.calParams;

  const loading =
    stateLoading ||
    swapLoading ||
    restoreLoading ||
    instrumentLoading ||
    rotatorLoading ||
    acLoading ||
    calParamsLoading ||
    configurationLoading;

  const disabled = !canEdit;

  const label = data?.onSwappedTarget ? 'Point to Base' : 'Point to Guide Star';
  const severity = data?.onSwappedTarget ? 'danger' : undefined;

  const onClick = async () => {
    const guiderTarget = selectedOi ?? selectedP1 ?? selectedP2;
    if (selectedTarget?.id && instrument && rotator && guiderTarget && acInst && calParams && configuration) {
      // TODO: other inputs for swap/nonswap

      if (data?.onSwappedTarget) {
        // If restoring
        // Use the science target
        await restoreTarget({
          variables: {
            config: createTcsConfigInput(instrument, rotator, selectedTarget, guiderTarget, calParams, configuration),
          },
        });
      } else {
        // If swapping
        // Use the acquisition camera
        const instrumentInput = createInstrumentSpecificsInput(acInst);

        // Use Guide target if swapping
        const targetInput = createTargetPropertiesInput({ ...guiderTarget, id: guiderTarget.id ?? 't-000' });

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
      let detail: string;
      if (!selectedTarget) {
        detail = 'No target';
      } else if (!guiderTarget) {
        detail = 'No guide star';
      } else if (!acInst) {
        detail = 'No acquisition camera';
      } else if (!instrument) {
        detail = 'No instrument';
      } else if (!rotator) {
        detail = 'No rotator';
      } else if (!calParams) {
        detail = 'No cal params configuration';
      } else if (!configuration) {
        detail = 'No configuration';
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
