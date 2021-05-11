import * as React from 'react';
import useEventCallback from './useEventCallback';

export interface ControlledOptions<T> {
  defaultValue?: T;
  value?: T;
}

export function useControlled<V>(options: ControlledOptions<V>) {
  const { defaultValue: defaultProp, value: controlled } = options;
  const { current: isControlled } = React.useRef(controlled !== undefined);

  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? (controlled as V) : valueState;

  const setValueIfUncontrolled = useEventCallback((newValue: V) => {
    if (!isControlled) {
      setValue(newValue);
    }
  });

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
