import * as React from 'react';
import useEventCallback from './useEventCallback';

interface EventTarget {
  target: {
    value: any;
  };
}

export interface Options<T> {
  initialValue?: T;
  transformer?: (value: T) => T;
  getValueFromEvent?: (e: any) => T;
}

const defaultGetValueFromEvent = (e: EventTarget) => e.target.value;

export function useEventTarget<T>(options?: Options<T>) {
  const {
    initialValue,
    transformer,
    getValueFromEvent = defaultGetValueFromEvent
  } = options || {};
  const [value, setValue] = React.useState<T | undefined>(initialValue);

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
