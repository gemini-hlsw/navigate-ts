import { useEffect } from 'react';

import { useAudio } from '@/Helpers/hooks';

import { useAlarmValue } from '../atoms/alarm';

export function useAlarmAudio() {
  const alarm = useAlarmValue();

  const alarmAudio = useAudio(alarm?.mp3, alarm?.webm);

  useEffect(() => {
    const checkAlarm = () => {
      if (alarm)
        alarmAudio
          ?.play()
          .then(() => clearInterval(AudioRetryInterval))
          .catch((err: unknown) => {
            console.log('waiting for user interaction to play first notification', err);
          });
      else {
        clearInterval(AudioRetryInterval);
        alarmAudio?.pause();
      }
    };

    // Retry playing the alarm every 500ms until it plays, and start immediately
    const AudioRetryInterval = setInterval(checkAlarm, 500);
    checkAlarm();

    // Stop the alarm when the component is unmounted
    return () => {
      clearInterval(AudioRetryInterval);
    };
  }, [alarm, alarmAudio]);
}
