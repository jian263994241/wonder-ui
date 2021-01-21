import * as React from 'react';
import debounce from './utils/debounce';
import useEventCallback from './useEventCallback';

export function useDebounceFn(
  fn: Function,
  wait: number = 166,
  immediate?: boolean
) {
  const _fn = useEventCallback((...args) => fn(...args));

  const debounced = React.useMemo(() => debounce(_fn, wait, immediate), []);

  return debounced;
}

export default useDebounceFn;
