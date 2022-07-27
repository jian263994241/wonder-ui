export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type KeysOrNumber = BreakpointKeys | number;
export interface Breakpoints {
  values: Record<BreakpointKeys, number>;
  keys: BreakpointKeys[];
  up: (key: KeysOrNumber) => string;
  down: (key: KeysOrNumber) => string;
  between: (start: KeysOrNumber, end: KeysOrNumber) => string;
  only: (key: BreakpointKeys) => string;
  width: (key: BreakpointKeys) => number;
  unit: string;
}

export type BreakpointsOptions = Partial<Pick<Breakpoints, 'values' | 'unit'>>;

const step = 5;

export default function createBreakpoints(
  breakpoints: BreakpointsOptions = {}
): Breakpoints {
  const { values: valuesProp, unit = 'px' } = breakpoints;

  const values = Object.assign(
    {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    },
    valuesProp
  );

  const keys = Object.keys(values) as BreakpointKeys[];

  const up = (key: KeysOrNumber) => {
    const value = typeof key != 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down = (key: KeysOrNumber) => {
    const value = typeof key != 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  };

  const between = (start: KeysOrNumber, end: KeysOrNumber) => {
    const startValue = typeof start != 'number' ? values[start] : start;
    const endValue = typeof end != 'number' ? values[end] : end;

    return (
      `@media (min-width:${startValue}${unit}) and ` +
      `(max-width:${endValue - step / 100}${unit})`
    );
  };

  const only = (key: BreakpointKeys) => {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  };

  const width = (key: BreakpointKeys) => {
    return values[key];
  };

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    unit
  };
}
