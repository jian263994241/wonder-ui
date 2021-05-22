import * as React from 'react';

export type IRefObject<T> =
  | ((instance: T | null) => void)
  | React.MutableRefObject<T | null>;

/**
 * Set ref
 * @param ref
 * @param value
 */
export function setRef<T>(ref: IRefObject<T> | null, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
