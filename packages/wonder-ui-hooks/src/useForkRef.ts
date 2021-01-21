import * as React from 'react';

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
  return React.useMemo(() => {
    let isNull;

    refs.forEach((ref) => {
      if (ref === null) {
        isNull = true;
      } else {
        isNull = false;
      }
    });

    if (isNull) return null;

    return (refValue: any) => {
      refs.forEach((ref) => {
        setRef(ref, refValue);
      });
    };
  }, refs);
}

export default useForkRef;
