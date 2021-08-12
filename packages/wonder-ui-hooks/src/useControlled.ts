import { isControlled } from '@wonder-ui/utils';
import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';
export interface ControlledProps<T> {
  defaultValue: T;
  value?: T;
}

export function useControlled<V>(props: ControlledProps<V>) {
  const { defaultValue, value: valueProp } = props;
  const controlled = isControlled(props, 'value');
  const [valueState, setValue] = useSafeState<V>(defaultValue);
  const value = controlled ? (valueProp as V) : valueState;

  const setValueIfUncontrolled = useEventCallback((newValue: V) => {
    if (!controlled) {
      setValue(newValue);
    }
  });

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
