import {
  GET_INSTRUMENT,
  useConfiguredInstrument,
  useCreateInstrument,
  useUpdateInstrument,
} from '@gql/configs/Instrument';
import type { Instrument } from '@gql/odb/gen/graphql';
import { Title, TitleDropdown } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import type { InputNumberProps } from 'primereact/inputnumber';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useId } from 'react';

import { useSetImportInstrument } from '@/components/atoms/instrument';
import { FloppyDisk, List } from '@/components/Icons';
import type { InstrumentType } from '@/types';

export function Instrument({ canEdit }: { canEdit: boolean }) {
  const [updateInstrument, { loading: updateInstrumentLoading }] = useUpdateInstrument();
  const [createInstrument, { loading: createInstrumentLoading }] = useCreateInstrument();
  const setImportInstrument = useSetImportInstrument();

  const { data: instrument, loading: instrumentLoading } = useConfiguredInstrument();

  const loading = instrumentLoading || updateInstrumentLoading || createInstrumentLoading;

  // When changing any field, update the instrument (with a new temporary instrument if needed)
  const onUpdateInstrument = async (variables: Partial<InstrumentType>) => {
    if (instrument) {
      if (instrument.isTemporary) {
        await updateInstrument({
          variables: {
            ...variables,
            pk: instrument.pk,
          },
          refetchQueries: [GET_INSTRUMENT],
          awaitRefetchQueries: true,
        });
      } else {
        await createInstrument({
          variables: {
            ...instrument,
            ...variables,
            isTemporary: true,
          },
          refetchQueries: [GET_INSTRUMENT],
          awaitRefetchQueries: true,
        });
      }
    }
  };

  // When clicking save, update the instrument to be non-temporary
  const onClickSave = async () => {
    if (instrument)
      await updateInstrument({
        variables: {
          ...instrument,
          isTemporary: false,
        },
      });
  };

  const saveButton = (
    <Button
      className="save-instrument"
      disabled={!instrument?.isTemporary}
      loading={loading}
      onClick={onClickSave}
      icon={<FloppyDisk />}
    />
  );

  return (
    <div className="instrument">
      <Title title="Instrument" rightSide={saveButton}>
        <TitleDropdown icon={<List />}>
          <Button
            disabled={!canEdit}
            className="p-button-text"
            label="Import instrument"
            onClick={() => setImportInstrument(true)}
          />
          <Button disabled={!canEdit} className="p-button-text" label="Command 2" />
          <Divider />
          <Button disabled={!canEdit} className="p-button-text" label="Command 3" />
        </TitleDropdown>
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
