import { isObject } from '@wonder-ui/utils';
import type { GridBreakpoints } from '../styles/theme/variables';

export function getGutter(gutter?: number | [number, number]) {
  if (typeof gutter === 'number') {
    return {
      gutterX: gutter,
      gutterY: 0
    };
  }

  if (Array.isArray(gutter)) {
    return {
      gutterX: gutter[0],
      gutterY: gutter[1]
    };
  }

  return {
    gutterX: 0,
    gutterY: 0
  };
}

export type ResponsiveValue<T = any> = T | Partial<Record<GridBreakpoints, T>>;

export type ValueFromResponsive<T extends ResponsiveValue> = T extends Record<
  any,
  any
>
  ? T[GridBreakpoints]
  : T;

export type ResponsivePropsValue<T, K extends keyof T> = {
  [k in K]: ValueFromResponsive<T[K]>;
};

export function getResponsiveValue<T = any>(inValue?: ResponsiveValue<T>) {
  if (inValue && isObject(inValue)) {
    return {
      xs: inValue.xs,
      sm: inValue.sm,
      md: inValue.md,
      lg: inValue.lg,
      xl: inValue.xl,
      xxl: inValue.xxl
    };
  }
  return {
    xs: inValue
  };
}
