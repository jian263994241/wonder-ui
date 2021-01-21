import * as React from 'react';
import useThrottleFn from './useThrottleFn';
import useEnhancedEffect from './useEnhancedEffect';

export function useThrottle<T>(value: T, wait: number = 166) {
  const [throttled, setThrottled] = React.useState(value);

  const run = useThrottleFn(() => {
    setThrottled(value);
  }, wait);

  useEnhancedEffect(() => {
    run();
  }, [value]);

  return throttled;
}

export default useThrottle;
