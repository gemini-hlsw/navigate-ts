import { Title } from '@Shared/Title/Title';
import WavefrontSensor from './WavefrontSensor/WavefrontSensor';
import AcquisitionCamera from './AcquisitionCamera/AcquisitionCamera';
import Logs from './Logs/Logs';
import './WavefrontSensors.scss';
import { useCanEdit } from '@/components/atoms/auth';

export function WavefrontSensors({ prevPanel, nextPanel }: { prevPanel: () => void; nextPanel: () => void }) {
  const canEdit = useCanEdit();

  return (
    <div className="wavefront-sensors">
      <Title title="WAVEFRONT SENSORS" prevPanel={prevPanel} nextPanel={nextPanel}></Title>
      <div className="body">
        <div className="sensors">
          <WavefrontSensor canEdit={canEdit} wfs={'OIWFS'} />
          <WavefrontSensor canEdit={canEdit} wfs={'PWFS1'} className="under-construction" />
          <WavefrontSensor canEdit={canEdit} wfs={'PWFS2'} className="under-construction" />
        </div>
        <AcquisitionCamera canEdit={canEdit} ac={'AC'} />
        <Logs />
      </div>
    </div>
  );
}
