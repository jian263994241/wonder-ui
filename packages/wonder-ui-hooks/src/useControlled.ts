import { useConst } from './useConst';
import { useSafeState } from './useSafeState';
export interface ControlledProps<T> {
  defaultValue: T;
  value?: T;
}

export function useControlled<V>(props: ControlledProps<V>) {
  const { defaultValue: defaultProp, value: controlled } = props;
  const isControlled = useConst(controlled !== undefined);

  const [valueState, setValue] = useSafeState<V>(defaultProp);
  const value = isControlled ? (controlled as V) : valueState;

  const setValueIfUncontrolled = (newValue: V) => {
    if (!isControlled) {
      setValue(newValue);
    }
  };

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
