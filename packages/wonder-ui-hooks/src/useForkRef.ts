import * as React from 'react';
import useEventCallback from './useEventCallback';

type Ref<T> = React.MutableRefObject<T> | React.RefCallback<T> | null;

export function setRef(ref: Ref<any>, value: any) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

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

export default useForkRef;
