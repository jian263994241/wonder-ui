import * as React from 'react';
import useEventCallback from './useEventCallback';

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param func a function
 * @param wait time to wait
 * @param immediate should it be called immediately
 */
export function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number,
  immediate?: boolean
) {
  let timeout: any;
  return function (this: any, ...args: Parameters<F>) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function useDebounceFn<F extends (...args: any[]) => any>(
  fn: F,
  wait: number = 166,
  immediate?: boolean
) {
  const _fn = useEventCallback(fn);

  const debounced = React.useMemo(() => debounce(_fn, wait, immediate), []);

  return debounced;
}

export default useDebounceFn;
