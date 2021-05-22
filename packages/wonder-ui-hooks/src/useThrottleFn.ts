import * as React from 'react';
import useEventCallback from './useEventCallback';
import { useAsync } from './useAsync';

export function useThrottleFn<F extends (...args: any[]) => any>(
  fn: F,
  wait: number = 166,
  options?: {
    leading?: boolean;
    trailing?: boolean;
  }
) {
  const async = useAsync();
  const _fn = useEventCallback(fn);

  const throttled = React.useMemo(() => async.throttle(_fn, wait, options), []);

  return throttled;
}

export default useThrottleFn;
