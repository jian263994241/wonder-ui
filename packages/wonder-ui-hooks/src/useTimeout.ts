import * as React from 'react';
import { useEventCallback } from './useEventCallback';
import { useAsync } from './useAsync';

export function useTimeout(fn: Function, delay: number = 0): void {
  const timerFn = useEventCallback((...args) => fn(...args));
  const async = useAsync();

  React.useEffect(() => {
    const timer = async.setTimeout(() => {
      timerFn();
    }, delay);
    return () => {
      async.clearTimeout(timer);
    };
  }, [delay, timerFn]);
}

export default useTimeout;
