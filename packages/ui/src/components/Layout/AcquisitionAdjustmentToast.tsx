import './AcquisitionAdjustmentToast.css';

import offsetsReceivedMp3 from '@assets/sounds/offsets-received.mp3';
import offsetsReceivedWebm from '@assets/sounds/offsets-received.webm';
import { useAcquisitionAdjustment, useAcquisitionAdjustmentState } from '@gql/server/AcquisitionAdjustment';
import type { AcquisitionAdjustmentInput } from '@gql/server/gen/graphql';
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
        <span>P = {state.offset.p.arcseconds}</span>
        <span>Q = {state.offset.q.arcseconds}</span>
        <span>IPA = {state.ipa?.degrees ?? 'N/A'}</span>
        <span>IAA = {state.iaa?.degrees ?? 'N/A'}</span>
      </div>
      <ButtonGroup>
        <Button
          loading={loading}
          icon={<Check />}
          size="small"
          severity="success"
          label="Accept"
          onClick={() =>
            void adjustAcquisition({
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
            void adjustAcquisition({
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
