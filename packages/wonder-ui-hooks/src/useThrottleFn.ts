import * as React from 'react';
import useEventCallback from './useEventCallback';
import { throttle } from '@wonder-ui/utils';

export function useThrottleFn(fn: Function, wait: number = 166) {
  const _fn = useEventCallback((...args) => fn(...args));

  const throttled = React.useMemo(() => throttle(_fn, wait), []);

  return throttled;
}

export default useThrottleFn;
