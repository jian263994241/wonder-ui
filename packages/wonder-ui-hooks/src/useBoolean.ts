import * as React from 'react';
import useToggle from './useToggle';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean | undefined) => void;
}

export function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { toggle }] = useToggle(defaultValue);

  const actions: Actions = React.useMemo(() => {
    const setTrue = () => toggle(true);
    const setFalse = () => toggle(false);
    return { toggle, setTrue, setFalse };
  }, [toggle]);

  return [state, actions];
}

export default useBoolean;
