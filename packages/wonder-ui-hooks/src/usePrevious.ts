import * as React from 'react';

export type compareFunction<T> = (prev: T | undefined, next: T) => boolean;

export function usePrevious<T>(
  state: T,
  compare?: compareFunction<T>
): T | undefined {
  const prevRef = React.useRef<T>();
  const curRef = React.useRef<T>();

  const needUpdate =
    typeof compare === 'function' ? compare(curRef.current, state) : true;
  if (needUpdate) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}

export default usePrevious;
