import { Slew } from '@gql/server/Buttons';
import { TitleDropdown } from '@Shared/Title/Title';
import { Button } from 'primereact/button';

import { useCanEdit } from '@/components/atoms/auth';
import { useSetSlewVisible } from '@/components/atoms/slew';
import { Gear } from '@/components/Icons';

export function Footer() {
  const canEdit = useCanEdit();
  const setSlewVisible = useSetSlewVisible();
  return (
    <div className="footer">
      <TitleDropdown icon={<Gear />}>
        <Button
          disabled={!canEdit}
          className="p-button-text"
          label="Set slew flags"
          onClick={() => setSlewVisible(true)}
        />
      </TitleDropdown>
      <Slew label="Slew Telescope" disabled={!canEdit} />
      <Button disabled={!canEdit} label="Apply Parameters" aria-label="Apply Parameters" />
      <div></div>
      <Button
        disabled={!canEdit}
        severity="danger"
        size="small"
        className="right"
        label="Shutdown"
        aria-label="Shutdown"
      />
    </div>
  );
}
