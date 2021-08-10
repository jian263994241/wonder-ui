import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';
import { nextTick } from '@wonder-ui/utils';
/**
 * Force Update Components
 */
export function useForceUpdate() {
  const [, setState] = useSafeState({});

  return useEventCallback(() => {
    nextTick(() => setState({}));
  });
}

export default useForceUpdate;
