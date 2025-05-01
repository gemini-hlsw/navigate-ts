import alarmSoundMp3 from '@assets/sounds/alarm.mp3';
import alarmSoundWebm from '@assets/sounds/alarm.webm';
import { useEffect } from 'react';

import { useAudio } from '@/Helpers/hooks';

import { useAlarmValue } from '../atoms/alarm';

export function AlarmAudio() {
  const alarm = useAlarmValue();

  const alarmAudio = useAudio(alarmSoundMp3, alarmSoundWebm, { loop: true });

  useEffect(() => {
    const checkAlarm = () => {
      if (alarm)
        alarmAudio
          .play()
          .then(() => clearInterval(AudioRetryInterval))
          .catch((err) => {
            console.log('waiting for user interaction to play first notification', err);
          });
      else {
        clearInterval(AudioRetryInterval);
        alarmAudio.pause();
      }
    };

    // Retry playing the alarm every 500ms until it plays, and start immediately
    const AudioRetryInterval = setInterval(checkAlarm, 500);
    checkAlarm();

    // Stop the alarm when the component is unmounted
    return () => {
      clearInterval(AudioRetryInterval);
      alarmAudio.pause();
      alarmAudio.remove();
    };
  }, [alarm, alarmAudio]);

  return <></>;
}
