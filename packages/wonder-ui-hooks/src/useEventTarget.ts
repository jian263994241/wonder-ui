import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';

interface EventTarget {
  target: {
    value: any;
  };
}

interface Options<T> {
  initialValue?: T;
  transformer?: (value: T) => T;
  getValueFromEvent?: (e: any) => T;
}

const defaultGetValueFromEvent = (e: EventTarget) => e.target.value;

export function useEventTarget<T>(options?: Options<T>) {
  const {
    initialValue = undefined,
    transformer = (a: any) => a,
    getValueFromEvent = defaultGetValueFromEvent
  } = options || {};
  const [value, setValue] = useSafeState<T | undefined>(initialValue);

  const reset = useEventCallback(() => setValue(initialValue));

  const onChange = useEventCallback((e: EventTarget) => {
    const _value = getValueFromEvent(e);
    if (typeof transformer === 'function') {
      return setValue(transformer(_value));
    }
    // no transformer => U and T should be the same
    return setValue(_value);
  });

  return [
    value,
    {
      onChange,
      reset
    }
  ] as const;
}

export default useEventTarget;
