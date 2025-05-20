import { useConfiguration } from '@gql/configs/Configuration';
import type { Instrument } from '@gql/configs/gen/graphql';
import { useInstrument, useUpdateInstrument } from '@gql/configs/Instrument';
import { Title, TitleDropdown } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import type { InputNumberProps } from 'primereact/inputnumber';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useCallback, useEffect, useId, useMemo, useState } from 'react';

import { useSetImportInstrument } from '@/components/atoms/instrument';
import { FloppyDisk, List } from '@/components/Icons';

export function Instrument({ canEdit }: { canEdit: boolean }) {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const [updateInstrument, { loading: updateInstrumentLoading }] = useUpdateInstrument();
  const configuration = configurationData?.configuration;
  const setImportInstrument = useSetImportInstrument();

  const { data, loading: instrumentLoading } = useInstrument({
    variables: {
      name: configuration?.obsInstrument ?? '',
      // issPort: 1,
      wfs: 'NONE',
    },
  });

  const instrument = data?.instrument;

  const [auxInstrument, setAuxInstrument] = useState<Instrument | undefined>(undefined);

  useEffect(() => {
    setAuxInstrument(instrument ?? undefined);
  }, [instrument]);

  const loading = configurationLoading || instrumentLoading || updateInstrumentLoading;

  const onUpdateInstrument = useCallback(
    (variables: Partial<Instrument>) => {
      if (auxInstrument)
        setAuxInstrument({
          ...auxInstrument,
          ...variables,
        });
    },
    [auxInstrument],
  );

  const onClickSave = useCallback(() => {
    if (auxInstrument && instrument)
      void updateInstrument({
        variables: {
          ...instrument,
          ...auxInstrument,
          pk: instrument.pk,
        },
      });
  }, [auxInstrument, instrument, updateInstrument]);

  // Check if any of the auxInstrument properties are different from the server instrument data. If so the save button is enabled
  const hasUnsavedChanges = useMemo(
    () =>
      !!instrument &&
      !!auxInstrument &&
      Object.entries(auxInstrument).some(([key, value]) => instrument[key as keyof Instrument] !== value),
    [auxInstrument, instrument],
  );

  if (!instrument?.name || !configuration?.obsInstrument) {
    return null;
  }

  const saveButton = (
    <Button
      className="save-instrument"
      disabled={!hasUnsavedChanges}
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
        <InputText
          id="instrument-name"
          disabled={!canEdit || loading || true}
          value={instrument.name}
          onChange={(e) => onUpdateInstrument({ name: e.target.value })}
        />

        <InstrumentInputNumber value={instrument.issPort} label="Port" disabled={true} minFractionDigits={0} />

        <InstrumentInputNumber
          label="Origin X"
          value={instrument.originX}
          disabled={!canEdit || loading}
          onChange={(e) => onUpdateInstrument({ originX: e.value! })}
        />
        <InstrumentInputNumber
          label="Origin Y"
          value={instrument.originY}
          disabled={!canEdit || loading}
          onChange={(e) => onUpdateInstrument({ originY: e.value! })}
        />
        <InstrumentInputNumber
          label="Focus Offset"
          value={instrument.focusOffset}
          disabled={!canEdit || loading}
          onChange={(e) => onUpdateInstrument({ focusOffset: e.value! })}
        />
        <InstrumentInputNumber
          label="IAA"
          value={instrument.iaa}
          disabled={!canEdit || loading}
          onChange={(e) => onUpdateInstrument({ iaa: e.value! })}
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
