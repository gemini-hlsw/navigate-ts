import { useConfiguration } from '@gql/configs/Configuration';
import { useInstrument, useUpdateInstrument } from '@gql/configs/Instrument';
import type { Instrument } from '@gql/odb/gen/graphql';
import { useInstrumentPort } from '@gql/server/Instrument';
import { Title, TitleDropdown } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import type { InputNumberProps } from 'primereact/inputnumber';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { useEffect, useId, useState } from 'react';

import { useSetImportInstrument } from '@/components/atoms/instrument';
import { FloppyDisk, List } from '@/components/Icons';
import { getConfigWfs, isNullish } from '@/Helpers/functions';
import type { InstrumentType } from '@/types';

export function Instrument({ canEdit }: { canEdit: boolean }) {
  const { data: configurationData, loading: configurationLoading } = useConfiguration();
  const [updateInstrument, { loading: updateInstrumentLoading }] = useUpdateInstrument();
  const configuration = configurationData?.configuration;
  const setImportInstrument = useSetImportInstrument();

  const { data: portData, loading: instrumentPortLoading } = useInstrumentPort({
    variables: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      instrument: configuration?.obsInstrument! as Instrument,
    },
  });

  const { data, loading: instrumentLoading } = useInstrument({
    skip: isNullish(configuration?.obsInstrument) || isNullish(portData?.instrumentPort),
    variables: {
      name: configuration?.obsInstrument,
      issPort: portData?.instrumentPort,
      wfs: getConfigWfs(configuration),
    },
  });

  const instrument = data?.instrument;

  const [auxInstrument, setAuxInstrument] = useState<InstrumentType | undefined>(undefined);

  useEffect(() => {
    setAuxInstrument(instrument ?? undefined);
  }, [instrument]);

  const loading = configurationLoading || instrumentLoading || updateInstrumentLoading || instrumentPortLoading;

  const onUpdateInstrument = (variables: Partial<InstrumentType>) => {
    if (auxInstrument)
      setAuxInstrument({
        ...auxInstrument,
        ...variables,
      });
  };

  const onClickSave = async () => {
    if (auxInstrument && instrument)
      await updateInstrument({
        variables: {
          ...instrument,
          ...auxInstrument,
          pk: instrument.pk,
        },
      });
  };

  // Check if any of the auxInstrument properties are different from the server instrument data. If so the save button is enabled
  const hasUnsavedChanges =
    !!instrument &&
    !!auxInstrument &&
    Object.entries(auxInstrument).some(([key, value]) => instrument[key as keyof InstrumentType] !== value);
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
          onChange={(e) => onUpdateInstrument({ name: e.target.value as Instrument })}
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
