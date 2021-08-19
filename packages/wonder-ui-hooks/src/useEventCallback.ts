import * as React from 'react';

/**
 * 持久化 function 的 Hook。
 * @param fn
 */
export function useEventCallback<T extends (...args: any[]) => any>(fn: T) {
  const ref = React.useRef(fn);

  ref.current = fn;

  return React.useCallback(
    (...args: any[]) => (void 0, ref.current)(...args),
    []
  ) as any as T;
}

export default useEventCallback;
