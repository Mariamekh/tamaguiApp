import {useRef, useState} from 'react';

export const useAutoplayPause = (delay = 2000) => {
  const [isPaused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pause = () => {
    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), delay);
  };

  return {isPaused, pause};
};
