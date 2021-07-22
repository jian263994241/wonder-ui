import * as React from 'react';
import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';

export const useSetState = <T extends object>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [state, setState] = useSafeState<T>(initialState);

  const setMergeState = useEventCallback((patch) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof patch === 'function' ? patch(prevState) : patch)
    }));
  });

  return [state, setMergeState];
};

export default useSetState;
