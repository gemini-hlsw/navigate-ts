import './Guider.css';

import { Title } from '@Shared/Title/Title';

import { Alarms } from './Alarms/Alarms';
import Diagram from './Diagram/Diagram';
import { LightPath } from './LightPath/LightPath';
import { Loop } from './Loop/Loop';
import { WavefrontSensors } from './WavefrontSensors/WavefrontSensors';

export function Guider({ prevPanel, nextPanel }: { prevPanel: () => void; nextPanel: () => void }) {
  return (
    <div className="guider">
      <Title title="GUIDER" prevPanel={prevPanel} nextPanel={nextPanel}></Title>
      <div className="body">
        <Diagram />
        <Loop />
        <LightPath />
        <WavefrontSensors />
        <Alarms />
      </div>
    </div>
  );
}
