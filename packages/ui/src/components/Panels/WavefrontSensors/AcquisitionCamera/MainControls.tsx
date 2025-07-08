import { Title } from '@Shared/Title/Title';
import { TabPanel, TabView } from 'primereact/tabview';

import OriginHandset from './OriginHandset';
import PointingHandset from './PointingHandset';
import TargetsHandset from './TargetsHandset';

export default function MainControls({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="main-controls">
      <Title title="Handset" className="main-controls-title" />
      <TabView>
        <TabPanel header="Targets">
          <TargetsHandset canEdit={canEdit} />
        </TabPanel>
        <TabPanel header="Origin">
          <OriginHandset canEdit={canEdit} />
        </TabPanel>
        <TabPanel header="Pointing">
          <PointingHandset canEdit={canEdit} />
        </TabPanel>
      </TabView>
    </div>
  );
}
