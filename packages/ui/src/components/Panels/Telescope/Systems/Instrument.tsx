import type { SetTemporaryInstrumentMutationVariables } from '@gql/configs/gen/graphql';
import { useConfiguredInstrument, useSetTemporaryInstrument, useUpdateInstrument } from '@gql/configs/Instrument';
import { Title } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import type { InputNumberProps } from 'primereact/inputnumber';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import type { ReactNode } from 'react';
import { useId, useRef, useState } from 'react';

import { useSetImportInstrument } from '@/components/atoms/instrument';
import { FloppyDisk, List } from '@/components/Icons';
import { useToast } from '@/Helpers/toast';

export function Instrument({ canEdit }: { canEdit: boolean }) {
  const [updateInstrument, { loading: updateInstrumentLoading }] = useUpdateInstrument();
  const [setTemporaryInstrument, { loading: setTemporaryInstrumentLoading }] = useSetTemporaryInstrument();
  const setImportInstrument = useSetImportInstrument();
  const toast = useToast();

  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  const loading = instrumentLoading || updateInstrumentLoading || setTemporaryInstrumentLoading;

  if (instrument?.comment?.includes('Default fallback configuration')) {
    toast?.show({
      severity: 'warn',
      summary: 'Warning',
      detail: instrument.comment,
    });
  }

  // When changing any field, update the instrument as a temporary instrument
  const onUpdateInstrument = async (variables: Partial<SetTemporaryInstrumentMutationVariables>) => {
    if (instrument) {
      await setTemporaryInstrument({
        variables: {
          ...instrument,
          ...variables,
        },
      });
    }
  };

  const saveInstrument = async (comment: string) => {
    if (instrument) {
      await updateInstrument({
        variables: { pk: instrument.pk, comment, isTemporary: false },
        optimisticResponse: {
          updateInstrument: { ...instrument, comment, isTemporary: false },
        },
      });
    }
  };

  const saveButtonRef = useRef<Button>(null);
  const saveButton = (
    <>
      <Button
        ref={saveButtonRef}
        className="save-instrument"
        aria-label="Save instrument"
        disabled={!instrument?.isTemporary}
        loading={loading}
        icon={<FloppyDisk />}
        onClick={() =>
          confirmPopup({
            // @ts-expect-error group is not typed in primereact types
            group: 'instrument-save',
            message: 'Save as a permanent configuration?',
            target: saveButtonRef.current as unknown as HTMLElement,
          })
        }
      />
      <ConfirmPopup
        // @ts-expect-error group is not typed in primereact types
        group="instrument-save"
        // eslint-disable-next-line @typescript-eslint/unbound-method
        content={({ hide, acceptBtnRef, rejectBtnRef, message }) => (
          <SaveButtonPopup
            saveInstrument={saveInstrument}
            hide={() => hide()}
            message={message}
            loading={loading}
            acceptBtnRef={acceptBtnRef}
            rejectBtnRef={rejectBtnRef}
          />
        )}
      />
    </>
  );

  return (
    <div className="instrument">
      <Title title="Instrument" rightSide={saveButton}>
        <Button
          icon={<List />}
          text
          style={{ color: 'white' }}
          disabled={!canEdit}
          aria-label="Import Instrument"
          tooltip="Import Instrument"
          onClick={() => setImportInstrument(true)}
        />
      </Title>
      <div className="body">
        <label className="label" htmlFor="instrument-name">
          SF Name
        </label>
        <InputText id="instrument-name" disabled={true} value={instrument?.name ?? ''} />

        <InstrumentInputNumber value={instrument?.issPort} label="Port" disabled={true} minFractionDigits={0} />

        <InstrumentInputNumber
          label="Origin X"
          value={instrument?.originX ?? 0}
          disabled={!canEdit || loading}
          onValueChange={(e) => onUpdateInstrument({ originX: e.value! })}
        />
        <InstrumentInputNumber
          label="Origin Y"
          value={instrument?.originY ?? 0}
          disabled={!canEdit || loading}
          onValueChange={(e) => onUpdateInstrument({ originY: e.value! })}
        />
        <InstrumentInputNumber
          label="Focus Offset"
          value={instrument?.focusOffset ?? 0}
          disabled={!canEdit || loading}
          onValueChange={(e) => onUpdateInstrument({ focusOffset: e.value! })}
        />
        <InstrumentInputNumber
          label="IAA"
          value={instrument?.iaa ?? 0}
          disabled={!canEdit || loading}
          onValueChange={(e) => onUpdateInstrument({ iaa: e.value! })}
        />
      </div>
    </div>
  );
}

function InstrumentInputNumber({ label, ...props }: { label: string } & InputNumberProps) {
  const id = useId();
  return (
    <>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <InputNumber inputId={id} minFractionDigits={2} maxFractionDigits={5} mode="decimal" {...props} />
    </>
  );
}

/**
 * Similar to ConfirmPopup but with a comment box
 */
function SaveButtonPopup({
  saveInstrument,
  hide,
  message,
  loading,
  acceptBtnRef,
  rejectBtnRef,
}: {
  saveInstrument: (comment: string) => Promise<void>;
  hide: () => void;
  message: ReactNode;
  loading: boolean;
  acceptBtnRef: React.Ref<HTMLButtonElement>;
  rejectBtnRef: React.Ref<HTMLButtonElement>;
}) {
  const [comment, setComment] = useState('');

  return (
    <div className="save-instrument-popup">
      <span>{message}</span>
      <div className="save-instrument-comment-group">
        <label htmlFor="save-instrument-comment">Comment:</label>
        <InputText id="save-instrument-comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <div className="buttons">
        <Button size="small" text label="No" onClick={hide} ref={rejectBtnRef as React.Ref<Button>} />
        <Button
          size="small"
          label="Yes"
          loading={loading}
          onClick={() => saveInstrument(comment.trim()).then(() => hide())}
          ref={acceptBtnRef as React.Ref<Button>}
        />
      </div>
    </div>
  );
}
