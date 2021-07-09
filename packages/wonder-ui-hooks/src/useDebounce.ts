import { useDebounceFn } from './useDebounceFn';
import { useEnhancedEffect } from './useEnhancedEffect';
import { useSafeState } from './useSafeState';

export function useDebounce<T>(value: T, wait: number = 166) {
  const [debounced, setDebounced] = useSafeState(value);

  const run = useDebounceFn(() => {
    setDebounced(value);
  }, wait);

  useEnhancedEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
