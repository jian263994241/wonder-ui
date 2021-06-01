import { BreakpointKeys } from '../styles/theme/createBreakpoints';
import { isObject } from '@wonder-ui/utils';

export const COLUMNS = 12;

export const TYPENUM = COLUMNS + 1;

export type ColNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColsType = ColNumber | 'auto' | null;

export type ResponsiveValue<T = any> = T | Partial<Record<BreakpointKeys, T>>;

export function getResponsiveValue<T = any>(inValue?: ResponsiveValue<T>) {
  if (inValue && isObject(inValue)) {
    return {
      xs: inValue.xs,
      sm: inValue.sm,
      md: inValue.md,
      lg: inValue.lg,
      xl: inValue.xl
    };
  }
  return { xs: inValue };
}

export function getGutter(gutter?: number | [number, number]) {
  if (typeof gutter === 'number') {
    return { gutterX: gutter || 0, gutterY: 0 };
  }

  if (Array.isArray(gutter)) {
    return { gutterX: gutter[0] || 0, gutterY: gutter[1] || 0 };
  }

  return { gutterX: 0, gutterY: 0 };
}
