import { useDebounceFn } from './useDebounceFn';
import { useSafeState } from './useSafeState';
/**
 * Force Update Components
 */
export function useForceUpdate() {
  const [, setState] = useSafeState({});

  const setDebounceState = useDebounceFn(setState, 1);

  return () => {
    setDebounceState({});
  };
}

export default useForceUpdate;
