import * as React from 'react';

export type IRefObject<T> =
  | ((instance: T | null) => void)
  | React.MutableRefObject<T | null>;

/**
 * Set ref
 * @param ref
 * @param value
 */
export function setRef<T>(
  ref: IRefObject<T> | null | undefined,
  value: T | null
) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/**
 * Merge refs
 */
export function mergedRef<T>(...refs: Array<React.Ref<T> | null | undefined>) {
  return (refValue: T | null) => {
    refs.forEach((ref) => {
      setRef(ref, refValue);
    });
  };
}
