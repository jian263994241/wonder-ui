import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';

/**
 * Force Update Components
 */
export function useForceUpdate() {
  const [, setState] = useSafeState({});

  return useEventCallback(() => {
    setState({});
  });
}

export default useForceUpdate;
