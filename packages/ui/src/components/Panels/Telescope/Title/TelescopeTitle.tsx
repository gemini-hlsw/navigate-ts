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

  return (
    <Title title="TELESCOPE SETUP" prevPanel={prevPanel} nextPanel={nextPanel}>
      <TitleDropdown icon={<List />}>
        <Button
          disabled={!canEdit}
          className="p-button-text"
          label="Import from ODB"
          onClick={() => setOdbVisible(true)}
        />
        <Button
          disabled={!canEdit}
          className="p-button-text"
          label="Import from catalog"
          onClick={() => setCatalogVisible(true)}
        />
        <Divider />
        <Button disabled={!canEdit} className="p-button-text" label="Edit targets" />
      </TitleDropdown>
    </Title>
  );
}
