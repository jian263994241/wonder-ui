export const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Breakpoints<Key extends string = BreakpointKeys> {
  values: Record<Key, number>;
  keys: Key[];
  up: (key: Key | number) => string;
  down: (key: Key | number) => string;
  between: (start: Key | number, end: Key | number) => string;
  only: (key: Key) => string;
  width: (key: Key) => number;
  unit: string;
}

export interface BreakpointsOptions extends Partial<Breakpoints> {}

const step = 5;

export default function createBreakpoints(
  breakpoints: BreakpointsOptions = {}
): Breakpoints {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    },
    unit = 'px',
    ...rest
  } = breakpoints;

  const keys = Object.keys(values) as Breakpoints['keys'];

  const up: Breakpoints['up'] = (key) => {
    const value = typeof key != 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down: Breakpoints['down'] = (key) => {
    const value = typeof key != 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  };

  const between: Breakpoints['between'] = (start, end) => {
    const startValue = typeof start != 'number' ? values[start] : start;
    const endValue = typeof end != 'number' ? values[end] : end;

    return (
      `@media (min-width:${startValue}${unit}) and ` +
      `(max-width:${endValue - step / 100}${unit})`
    );
  };

  const only: Breakpoints['only'] = (key) => {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  };

  const width: Breakpoints['width'] = (key) => {
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
    unit,
    ...rest
  };
}
