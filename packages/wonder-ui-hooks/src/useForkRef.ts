import useEventCallback from './useEventCallback';
import { setRef } from '@wonder-ui/utils';
import React from 'react';

export function useForkRef<T>(
  ...refs: (React.Ref<T> | null | undefined)[]
): React.RefCallback<T> {
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
