import * as React from 'react';
import useEventCallback from './useEventCallback';

/**
 * Throttling enforces a maximum number of times a function
 * can be called over time.
 *
 * @param func a function
 * @param wait time
 */
export function throttle<F extends (...args: any) => any>(
  this: any,
  func: F,
  wait: number
) {
  let timeout: any;
  let callbackArgs: any;
  const context = this;

  const later = () => {
    func.apply(context, callbackArgs);
    timeout = null;
  };

  return function (...args: Parameters<F>) {
    if (!timeout) {
      callbackArgs = args;
      timeout = setTimeout(later, wait);
    }
  };
}

export function useThrottleFn<F extends (...args: any[]) => any>(
  fn: F,
  wait: number = 166
) {
  const _fn = useEventCallback(fn);

  const throttled = React.useMemo(() => throttle(_fn, wait), []);

  return throttled;
}

export default useThrottleFn;
