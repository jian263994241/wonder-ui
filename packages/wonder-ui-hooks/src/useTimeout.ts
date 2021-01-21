import * as React from 'react';
import useEventCallback from './useEventCallback';

export function useTimeout(fn: Function, delay: number = 0): void {
  const timerFn = useEventCallback((...args) => fn(...args));

  React.useEffect(() => {
    const timer = setTimeout(() => {
      timerFn();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, timerFn]);
}

export default useTimeout;
