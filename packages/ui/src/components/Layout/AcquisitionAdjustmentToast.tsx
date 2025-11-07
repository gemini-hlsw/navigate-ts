import './AcquisitionAdjustmentToast.css';

import offsetsReceivedMp3 from '@assets/sounds/offsets-received.mp3';
import offsetsReceivedWebm from '@assets/sounds/offsets-received.webm';
import { useAcquisitionAdjustment, useAcquisitionAdjustmentState } from '@gql/server/AcquisitionAdjustment';
import type { AcquistionAdjustmentCommand } from '@gql/server/gen/graphql';
import { Button } from 'primereact/button';
import type { ToastMessage } from 'primereact/toast';
import { useEffect } from 'react';

import { formatToSignedArcseconds } from '@/Helpers/functions';
import { useAudio } from '@/Helpers/hooks';
import { useToast } from '@/Helpers/toast';

import { Check, XMark } from '../Icons';

type AcquisitionAdjustmentState = NonNullable<
  ReturnType<typeof useAcquisitionAdjustmentState>['data']
>['acquisitionAdjustmentState'];

export function useAcquisitionAdjustmentToast() {
  const toast = useToast();

  const { data } = useAcquisitionAdjustmentState();

  const alarmAudio = useAudio(offsetsReceivedMp3, offsetsReceivedWebm);

  useEffect(() => {
    if (data?.acquisitionAdjustmentState.command === 'ASK_USER') {
      const acquisitionAdjustmentToast: ToastMessage = {
        id: `acquisition-adjustment`,
        severity: 'info',
        summary: `Apply GACQ offsets?`,
        closable: false,
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
}

function AcquisitionAdjustmentPrompt({ state }: { state: AcquisitionAdjustmentState }) {
  const [adjustAcquisition, { loading }] = useAcquisitionAdjustment();

  const adjustCommand = (command: AcquistionAdjustmentCommand) =>
    adjustAcquisition({
      variables: {
        input: {
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
          command,
        },
      },
    });

  return (
    <>
      <div className="acquisition-adjustment-prompt">
        <div>P:</div>
        <div>{formatToSignedArcseconds(state.offset.p.arcseconds)}</div>
        <div>Q:</div>
        <div>{formatToSignedArcseconds(state.offset.q.arcseconds)}</div>
        <div>IPA:</div>
        <div>{formatToSignedArcseconds(state.ipa?.degrees)}</div>
        <div>IAA:</div>
        <div>{formatToSignedArcseconds(state.iaa?.degrees)}</div>
      </div>
      <div className="acquisition-adjustment-buttons">
        <Button
          loading={loading}
          icon={<XMark />}
          severity="secondary"
          label="Cancel"
          size="small"
          onClick={() => adjustCommand('USER_CANCELS')}
        />
        <Button
          loading={loading}
          icon={<Check />}
          label="Accept"
          size="small"
          onClick={() => adjustCommand('USER_CONFIRMS')}
        />
      </div>
    </>
  );
}
