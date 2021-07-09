import * as React from 'react';
import { useEventCallback } from './useEventCallback';

export const useSetState = <T extends object>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [state, setState] = React.useState<T>(initialState);

  const setMergeState = useEventCallback((patch) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof patch === 'function' ? patch(prevState) : patch)
    }));
  });

  return [state, setMergeState];
};

export default useSetState;
