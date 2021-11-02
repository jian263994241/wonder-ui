import * as React from 'react';
import { useSafeState } from './useSafeState';
import { useThrottleFn } from './useThrottleFn';

export function useThrottle<T>(value: T, wait: number = 166) {
  const [throttled, setThrottled] = useSafeState(value);

  const run = useThrottleFn(() => {
    setThrottled(value);
  }, wait);

  React.useEffect(() => {
    run();
  }, [value]);

  return throttled;
}

export default useThrottle;
