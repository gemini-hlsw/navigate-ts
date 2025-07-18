import './Home.scss';

import { Guider } from '@Guider/Guider';
import { Telescope } from '@Telescope/Telescope';
import { WavefrontSensors } from '@WavefrontSensors/WavefrontSensors';
import { useCallback, useState } from 'react';

import type { PanelType } from '@/types';

export default function Home() {
  const TOUCH_THRESHOLD = 50;
  const [panelDisplay, setPanelDisplay] = useState<PanelType>('Telescope');
  const [touchPos, setTouchPos] = useState<number>(0);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setTouchPos(e.touches[0]!.pageX);
    },
    [setTouchPos],
  );

  const nextPanel = useCallback(() => {
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
  }, [panelDisplay, setPanelDisplay]);

  const prevPanel = useCallback(() => {
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
  }, [panelDisplay, setPanelDisplay]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const movement = e.changedTouches[0]!.pageX - touchPos;
      if (movement > TOUCH_THRESHOLD) {
        prevPanel();
      } else if (movement < -TOUCH_THRESHOLD) {
        nextPanel();
      }
    },
    [touchPos, prevPanel, nextPanel],
  );

  return (
    <div className={`main-body ${panelDisplay}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="panel Telescope">
        <Telescope prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
      <div className="panel WavefrontSensors">
        <WavefrontSensors prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
      <div className="panel Guider">
        <Guider prevPanel={prevPanel} nextPanel={nextPanel} />
      </div>
    </div>
  );
}
