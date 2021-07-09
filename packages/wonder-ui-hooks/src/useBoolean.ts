import * as React from 'react';
import { useSafeState } from './useSafeState';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean | undefined) => void;
}

export function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, setState] = useSafeState(defaultValue);

  const toggle = React.useCallback(() => {
    setState(!state);
  }, [state]);

  const setTrue = React.useCallback(() => setState(true), []);
  const setFalse = React.useCallback(() => setState(false), []);

  return [state, { toggle, setTrue, setFalse }];
}

export default useBoolean;
