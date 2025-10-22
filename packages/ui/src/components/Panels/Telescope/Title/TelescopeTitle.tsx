import { useImportObservation } from '@Contexts/Variables/Modals/OdbImport/useImportObservation';
import { useConfiguration } from '@gql/configs/Configuration';
import { useObservationById } from '@gql/odb/Observation';
import { Title, TitleDropdown } from '@Shared/Title/Title';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import { useCanEdit } from '@/components/atoms/auth';
import { useSetCatalogVisible } from '@/components/atoms/catalog';
import { useSetOdbVisible } from '@/components/atoms/odb';
import { List } from '@/components/Icons';

interface ParamsInterface {
  prevPanel: () => void;
  nextPanel: () => void;
}

export function TelescopeTitle({ prevPanel, nextPanel }: ParamsInterface) {
  const canEdit = useCanEdit();
  const setOdbVisible = useSetOdbVisible();
  const setCatalogVisible = useSetCatalogVisible();

  const configuration = useConfiguration().data?.configuration;
  const [importObservation, { loading: importLoading }] = useImportObservation();
  const [getObservation, { loading: getObservationLoading }] = useObservationById();

  async function reimportObservation() {
    if (!configuration?.obsId) return;
    const { data } = await getObservation({
      context: { clientName: 'odb' },
      variables: {
        obsId: configuration?.obsId,
      },
    });

    await importObservation(data?.observation ?? null);
  }

  return (
    <Title title="TELESCOPE SETUP" prevPanel={prevPanel} nextPanel={nextPanel}>
      <TitleDropdown icon={<List />}>
        <Button
          disabled={!canEdit}
          className="p-button-text"
          label="Import new observation from ODB"
          onClick={() => setOdbVisible(true)}
        />
        <Button
          disabled={!canEdit || importLoading || getObservationLoading || !configuration?.obsId}
          className="p-button-text"
          label="Reimport current observation from ODB"
          onClick={reimportObservation}
        />
        <Button
          disabled={!canEdit}
          className="p-button-text"
          label="Import from catalog"
          onClick={() => setCatalogVisible(true)}
        />
        <Divider />
        <Button disabled={!canEdit} className="p-button-text under-construction" label="Edit targets" />
      </TitleDropdown>
    </Title>
  );
}
