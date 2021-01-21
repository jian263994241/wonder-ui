import * as React from 'react';
import useDebounceFn from './useDebounceFn';
import useEnhancedEffect from './useEnhancedEffect';

export function useDebounce<T>(value: T, wait: number = 166) {
  const [debounced, setDebounced] = React.useState(value);

  const run = useDebounceFn(() => {
    setDebounced(value);
  }, wait);

  useEnhancedEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
