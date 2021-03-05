import { isObject } from '@wonder-ui/utils';
import breakpoints from '../styles/theme/breakpoints';

type Breakpoints = typeof breakpoints;

export function getGutter(gutter?: number | [number, number]) {
  if (typeof gutter === 'number') {
    return {
      gutterX: gutter || 0,
      gutterY: 0
    };
  }

  if (Array.isArray(gutter)) {
    return {
      gutterX: gutter[0] || 0,
      gutterY: gutter[1] || 0
    };
  }

  return {
    gutterX: 0,
    gutterY: 0
  };
}

export type ResponsiveValue<T = any> =
  | T
  | Partial<Record<keyof Breakpoints, T>>;

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
