import './AcquisitionAdjustmentToast.css';

import offsetsReceivedMp3 from '@assets/sounds/offsets-received.mp3';
import offsetsReceivedWebm from '@assets/sounds/offsets-received.webm';
import { useAcquisitionAdjustment, useAcquisitionAdjustmentState } from '@gql/server/AcquisitionAdjustment';
import type { AcquisitionAdjustmentInput } from '@gql/server/gen/graphql';
import { signedArcSeconds } from 'lucuma-core';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import type { ToastMessage } from 'primereact/toast';
import { useEffect } from 'react';

import { useAudio } from '@/Helpers/hooks';
import { useToast } from '@/Helpers/toast';

import { Check, XMark } from '../Icons';

type AcquisitionAdjustmentState = NonNullable<
  ReturnType<typeof useAcquisitionAdjustmentState>['data']
>['acquisitionAdjustmentState'];

export function AcquisitionAdjustmentToast() {
  const toast = useToast();

  const { data } = useAcquisitionAdjustmentState();

  const alarmAudio = useAudio(offsetsReceivedMp3, offsetsReceivedWebm);

  useEffect(() => {
    if (data?.acquisitionAdjustmentState.command === 'ASK_USER') {
      const acquisitionAdjustmentToast: ToastMessage = {
        id: `acquisition-adjustment`,
        severity: 'info',
        summary: `Apply GACQ offsets?`,
        detail: <AcquisitionAdjustmentPrompt state={data.acquisitionAdjustmentState} />,
        sticky: true,
      };
      toast?.show(acquisitionAdjustmentToast);
      void alarmAudio.play();

      return () => {
        alarmAudio.pause();
        toast?.remove(acquisitionAdjustmentToast);
      };
    }
    return;
  }, [data, toast, alarmAudio]);

  return <></>;
}

function AcquisitionAdjustmentPrompt({ state }: { state: AcquisitionAdjustmentState }) {
  const [adjustAcquisition, { loading }] = useAcquisitionAdjustment();

  const input: Omit<AcquisitionAdjustmentInput, 'command'> = {
    offset: {
      p: {
        arcseconds: state.offset.p.arcseconds,
      },
      q: {
        arcseconds: state.offset.q.arcseconds,
      },
    },
    iaa: {
      degrees: state.iaa?.degrees,
    },
    ipa: {
      degrees: state.ipa?.degrees,
    },
  };

  return (
    <div>
      <div className="acquisition-adjustment-prompt">
        <div>P:</div>
        <div>{formatToFixed(signedArcSeconds(state.offset.p.arcseconds))}</div>
        <div>Q:</div>
        <div>{formatToFixed(signedArcSeconds(state.offset.q.arcseconds))}</div>
        <div>IPA:</div>
        <div>{state.ipa?.degrees ? formatToFixed(state.ipa.degrees) : 'N/A'}</div>
        <div>IAA:</div>
        <div>{state.iaa?.degrees ? formatToFixed(state.iaa.degrees) : 'N/A'}</div>
      </div>
      <ButtonGroup>
        <Button
          loading={loading}
          icon={<Check />}
          size="small"
          severity="success"
          label="Accept"
          onClick={() =>
            adjustAcquisition({
              variables: {
                input: {
                  ...input,
                  command: 'USER_CONFIRMS',
                },
              },
            })
          }
        />
        <Button
          loading={loading}
          icon={<XMark />}
          size="small"
          severity="secondary"
          label="Cancel"
          onClick={() =>
            adjustAcquisition({
              variables: {
                input: {
                  ...input,
                  command: 'USER_CANCELS',
                },
              },
            })
          }
        />
      </ButtonGroup>
    </div>
  );
}

/**
 * Formats value to 2 decimal places.
 */
function formatToFixed(value: number | string): string {
  const digits = 2;
  const num = typeof value === 'number' ? value : parseFloat(value);
  return num.toFixed(digits);
}
