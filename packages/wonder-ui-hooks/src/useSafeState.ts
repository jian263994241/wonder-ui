import * as React from 'react';
import { useUnmountedRef } from './useUnmountedRef';

type Callback = () => void;

type Dispatch<A> = (value: A, callback?: Callback) => void;

export function useSafeState<S>(
  initialState: S | (() => S)
): [S, Dispatch<React.SetStateAction<S>>];

export function useSafeState<S = undefined>(): [
  S | undefined,
  Dispatch<React.SetStateAction<S | undefined>>
];

export function useSafeState(initialState?: any) {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = React.useState(initialState);

  const updateCallbackRef = React.useRef<Callback>();

  const setCurrentState = (
    currentState: typeof initialState,
    callback?: Callback
  ) => {
    /** 如果组件已经卸载则不再更新 state */
    if (unmountedRef.current) return;

    updateCallbackRef.current = callback;

    setState(currentState);
  };

  React.useEffect(() => {
    if (unmountedRef.current) return;
    updateCallbackRef.current?.();
    updateCallbackRef.current = undefined;
  }, [state]);

  return [state, setCurrentState] as const;
}

export default useSafeState;
