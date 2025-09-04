import { Title } from '@Shared/Title/Title';
import { TabPanel, TabView } from 'primereact/tabview';

import { useCanEdit } from '@/components/atoms/auth';

import { ACHR } from './ACHR';
import { PWFS1 } from './PWFS1';

export function WavefrontSensors() {
  const canEdit = useCanEdit();
  return (
    <div className="wavefront-sensors">
      <Title title="Wavefront Sensors" />
      <div className="body">
        <TabView>
          <TabPanel header="PWFS1" className="under-construction">
            <PWFS1 disabled={!canEdit} />
          </TabPanel>
          <TabPanel header="PWFS2" className="under-construction">
            <PWFS1 disabled={!canEdit} />
          </TabPanel>
          <TabPanel header="OIWFS" className="under-construction"></TabPanel>
          <TabPanel header="AC/HR">
            <ACHR disabled={!canEdit} />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
