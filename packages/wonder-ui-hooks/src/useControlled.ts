import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';
export interface ControlledProps<T> {
  defaultValue: T;
  value?: T;
}

export function useControlled<V>(props: ControlledProps<V>) {
  const { defaultValue, value: valueProp } = props;
  const controlled = valueProp !== undefined;
  const [valueState, setValue] = useSafeState<V>(defaultValue);
  const value = controlled ? (valueProp as V) : valueState;

  const setValueIfUncontrolled = useEventCallback(
    (newValue: V, callback?: () => void, alwaysCallback?: boolean) => {
      if (!controlled) {
        setValue(newValue, callback);
      } else if (alwaysCallback) {
        callback?.();
      }
    }
  );

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
