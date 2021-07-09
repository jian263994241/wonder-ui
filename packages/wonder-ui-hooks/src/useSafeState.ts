import * as React from 'react';
import { useUnmountedRef } from './useUnmountedRef';

export function useSafeState<S>(
  initialState: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>];

export function useSafeState<S = undefined>(): [
  S | undefined,
  React.Dispatch<React.SetStateAction<S | undefined>>
];

export function useSafeState(initialState?: any) {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = React.useState(initialState);
  const setCurrentState = (currentState: typeof initialState) => {
    /** 如果组件已经卸载则不再更新 state */
    if (unmountedRef.current) return;
    setState(currentState);
  };

  return [state, setCurrentState] as const;
}

export default useSafeState;
