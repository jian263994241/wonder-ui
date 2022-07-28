import { BreakpointKeys } from '../styles/theme/createBreakpoints';
import { isObject } from '@wonder-ui/utils';

export type ColsType = number | 'auto';

export type ResponsiveValue<T = ColsType> =
  | T
  | Partial<Record<BreakpointKeys, T>>;

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
