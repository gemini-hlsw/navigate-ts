import './Home.css';

import { Guider } from '@Guider/Guider';
import { Telescope } from '@Telescope/Telescope';
import { WavefrontSensors } from '@WavefrontSensors/WavefrontSensors';
import { useState } from 'react';

import type { PanelType } from '@/types';

export default function Home() {
  const TOUCH_THRESHOLD = 50;
  const [panelDisplay, setPanelDisplay] = useState<PanelType>('Telescope');
  const [touchPos, setTouchPos] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchPos(e.touches[0]!.pageX);
  };

  const nextPanel = () => {
    switch (panelDisplay) {
      case 'Telescope':
        setPanelDisplay('WavefrontSensors');
        break;
      case 'WavefrontSensors':
        setPanelDisplay('Guider');
        break;
      case 'Guider':
        setPanelDisplay('Telescope');
        break;
      default:
        break;
    }
  };

  const prevPanel = () => {
    switch (panelDisplay) {
      case 'Telescope':
        setPanelDisplay('Guider');
        break;
      case 'WavefrontSensors':
        setPanelDisplay('Telescope');
        break;
      case 'Guider':
        setPanelDisplay('WavefrontSensors');
        break;
      default:
        break;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const movement = e.changedTouches[0]!.pageX - touchPos;
    if (movement > TOUCH_THRESHOLD) {
      prevPanel();
    } else if (movement < -TOUCH_THRESHOLD) {
      nextPanel();
    }
  };

  return (
    <div className={`main-body ${panelDisplay}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="panel telescope">
        <Telescope prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
      <div className="panel wavefront-sensors">
        <WavefrontSensors prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
      <div className="panel guider">
        <Guider prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
    </div>
  );
}
