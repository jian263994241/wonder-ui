import * as React from 'react';
import useEventCallback from './useEventCallback';
import { useAsync } from './useAsync';

export function useDebounceFn<F extends (...args: any[]) => any>(
  fn: F,
  wait: number = 166,
  options?: {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
  }
) {
  const async = useAsync();
  const _fn = useEventCallback(fn);

  const debounced = React.useMemo(() => async.debounce(_fn, wait, options), []);

  return debounced;
}

export default useDebounceFn;
