import * as React from 'react';
import { useSafeState } from './useSafeState';

export function useCounter(
  initialValue: number = 0,
  options: { min?: number; max?: number } = {}
) {
  const { min, max } = options;

  // get init value
  const init = React.useMemo(() => {
    if (typeof max === 'number') {
      return Math.min(max, initialValue);
    }
    if (typeof min === 'number') {
      return Math.max(min, initialValue);
    }
    return initialValue;
  }, []);

  const [current, setCurrent] = useSafeState(init);

  const actions = React.useMemo(() => {
    const setValue = (value: number | ((c: number) => number)) => {
      setCurrent((c: number) => {
        // get target value
        let target = typeof value === 'number' ? value : value(c);
        if (typeof max === 'number') {
          target = Math.min(max, target);
        }
        if (typeof min === 'number') {
          target = Math.max(min, target);
        }
        return target;
      });
    };
    const inc = (delta: number = 1) => {
      setValue((c) => c + delta);
    };
    const dec = (delta: number = 1) => {
      setValue((c) => c - delta);
    };
    const set = (value: number | ((c: number) => number)) => {
      setValue(value);
    };
    const reset = () => {
      setValue(init);
    };
    return { inc, dec, set, reset };
  }, [init, max, min]);

  return [current, actions] as const;
}

export default useCounter;
