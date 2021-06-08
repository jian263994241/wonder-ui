import * as React from 'react';
import { useConst } from './useConst';

export interface ControlledOptions<T> {
  defaultValue: T;
  value?: T;
}

export function useControlled<V>(options: ControlledOptions<V>) {
  const { defaultValue: defaultProp, value: controlled } = options;
  const isControlled = useConst(controlled !== undefined);

  const [valueState, setValue] = React.useState<V>(defaultProp);
  const value = isControlled ? (controlled as V) : valueState;

  const setValueIfUncontrolled = (newValue: V) => {
    if (!isControlled) {
      setValue(newValue);
    }
  };

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
