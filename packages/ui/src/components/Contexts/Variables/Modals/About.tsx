import { useVersion as useConfigsVersion } from '@gql/configs/Version';
import { useVersion as useServerVersion } from '@gql/server/Version';
import { Dialog } from 'primereact/dialog';
import { useCallback } from 'react';

import { useAboutVisible } from '@/components/atoms/about';
import { useServerConfigValue } from '@/components/atoms/config';
import { frontendVersion } from '@/Helpers/constants';

export function About() {
  const [aboutVisible, toggleAboutVisible] = useAboutVisible();
  const { odbUri, site } = useServerConfigValue();
  const odbHost = odbUri && URL.canParse(odbUri) ? new URL(odbUri).hostname.split('.')[0] : 'dev';
  const environmentType = odbHost.includes('staging')
    ? 'staging'
    : odbHost.includes('dev')
      ? 'development'
      : 'production';

  const onHide = useCallback(() => toggleAboutVisible(false), [toggleAboutVisible]);
  const configsVersion = useConfigsVersion().data?.version.version;
  const serverVersion = useServerVersion().data?.serverVersion;

  return (
    <Dialog header="About Navigate" visible={aboutVisible} modal onHide={onHide}>
      <div className="about-dialog">
        <table>
          <tbody>
            <tr>
              <td>Environment</td>
              <td>{site}</td>
            </tr>
            <tr>
              <td>ODB</td>
              <td>{environmentType}</td>
            </tr>
            <tr>
              <td>Frontend</td>
              <td>{frontendVersion}</td>
            </tr>
            <tr>
              <td>Configs API</td>
              <td>{configsVersion}</td>
            </tr>
            <tr>
              <td>Server</td>
              <td>{serverVersion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Dialog>
  );
}
