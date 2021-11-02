import * as React from 'react';
import { useDebounceFn } from './useDebounceFn';
import { useSafeState } from './useSafeState';

export function useDebounce<T>(value: T, wait: number = 166) {
  const [debounced, setDebounced] = useSafeState(value);

  const run = useDebounceFn(() => {
    setDebounced(value);
  }, wait);

  React.useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
