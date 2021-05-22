import useEventCallback from './useEventCallback';
import { setRef } from '@wonder-ui/utils';

export function useForkRef<R extends any[]>(...refs: R) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return useEventCallback((refValue: any) => {
    refs.forEach((ref) => {
      setRef(ref, refValue);
    });
  });
}
