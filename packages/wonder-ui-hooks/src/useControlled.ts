import * as React from 'react';
import { useEventCallback } from './useEventCallback';

export interface ControlledProps<T> {
  defaultValue: T;
  value?: T;
  onChange?: (value: T) => void;
}

export function useControlled<V>(props: ControlledProps<V>) {
  const { defaultValue, value: valueProp, onChange } = props;
  const controlled = valueProp !== undefined;
  const [valueState, _setValue] = React.useState(defaultValue);
  const value = controlled ? (valueProp as V) : valueState;
  const [timestamp, update] = React.useState({});

  const callbackRef = React.useRef<Function>();

  const runCallback = () => {
    if (typeof callbackRef.current === 'function') {
      callbackRef.current();
      callbackRef.current = undefined;
    }
  };

  React.useEffect(runCallback, [timestamp]);

  const setValue = useEventCallback(
    (newValue: V | ((prevValue: V) => V), callback?: () => void) => {
      runCallback();

      newValue =
        typeof newValue === 'function'
          ? (newValue as (prevValue: V) => V)(value)
          : newValue;

      callbackRef.current = callback;

      if (!controlled) {
        _setValue(newValue);
      }

      onChange?.(newValue);

      update({});
    }
  );

  return [value, setValue] as const;
}

export default useControlled;
