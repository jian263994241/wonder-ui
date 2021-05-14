import * as React from 'react';

export const useSetState = <T extends object>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [state, setState] = React.useState<T>(initialState);

  const setMergeState = React.useCallback((patch) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof patch === 'function' ? patch(prevState) : patch)
    }));
  }, []);

  return [state, setMergeState];
};

export default useSetState;
