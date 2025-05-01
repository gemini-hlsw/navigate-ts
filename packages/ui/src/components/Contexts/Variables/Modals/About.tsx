import { useVersion as useConfigsVersion } from '@gql/configs/Version';
import { useVersion as useServerVersion } from '@gql/server/Version';
import { Dialog } from 'primereact/dialog';
import { useCallback } from 'react';

import { useAboutVisible } from '@/components/atoms/about';
import { frontendVersion } from '@/Helpers/constants';

export function About() {
  const [aboutVisible, toggleAboutVisible] = useAboutVisible();

  const onHide = useCallback(() => toggleAboutVisible(false), [toggleAboutVisible]);
  const configsVersion = useConfigsVersion().data?.version.version;
  const serverVersion = useServerVersion().data?.serverVersion;

  return (
    <Dialog header="NAVIGATE" visible={aboutVisible} modal onHide={onHide}>
      <div className="about-dialog">
        <p>Frontend: {frontendVersion}</p>
        <p>Configs API: {configsVersion}</p>
        <p>Server: {serverVersion}</p>
      </div>
    </Dialog>
  );
}
