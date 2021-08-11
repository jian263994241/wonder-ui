import { nextTick } from '@wonder-ui/utils';
import { useSafeState } from './useSafeState';
/**
 * Force Update Components
 */
export function useForceUpdate() {
  const [, setState] = useSafeState({});

  return () => {
    nextTick(() => {
      setState({});
    });
  };
}

export default useForceUpdate;
