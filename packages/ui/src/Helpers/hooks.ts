import { useEffect, useMemo, useState } from 'react';

/**
 * State hook that returns a boolean value that is true for 1 second after being set to true.
 */
export function useStale() {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (stale) {
        setStale(false);
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [stale, setStale]);

  return [stale, setStale] as const;
}
export type SetStale = ReturnType<typeof useStale>[1];

/**
 * useAudio hook to play audio files
 * @param mp3 - mp3 file path
 * @param webm - webm file path (fallback)
 * @param options - options for the audio player
 */
export function useAudio(mp3: string, webm: string, options = { loop: false }) {
  const audio = useMemo(() => {
    const audio = selectPlayableAudio(mp3, webm);
    audio.loop = options.loop;

    // Be nicer to developers' ears
    if (import.meta.env.DEV) audio.volume = 0.3;

    return audio;
  }, [mp3, webm, options.loop]);

  return audio;
}

/**
 * use mp3 if possible, otherwise use webm
 */
function selectPlayableAudio(mp3S: string, webmS: string) {
  const mp3 = new Audio(mp3S);

  if (mp3.canPlayType('audio/mpeg')) return mp3;
  else {
    const webm = new Audio(webmS);
    if (webm.canPlayType('audio/webm')) return webm;
    // If neither can play, at least we'll try mp3
    else return mp3;
  }
}
