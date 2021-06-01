import { ColsType, getResponsiveValue, ResponsiveValue } from '../Row/share';
import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const colClasses = generateUtilityClasses('WuiCol', ['root']);

export interface ColStyleProps {
  classes?: Partial<typeof colClasses>;
  col?: ResponsiveValue<ColsType>;
  offset?: ResponsiveValue<number>;
}

export const useClasses = (styleProps: ColStyleProps) => {
  const { classes, col: colProp, offset: offsetProp } = styleProps;
  const col = getResponsiveValue(colProp);
  const offset = getResponsiveValue(offsetProp);

  const slot = {
    root: [
      'root',
      (col.xs === 'auto' || col.xs === 0) && 'colXs-auto',
      (col.sm === 'auto' || col.sm === 0) && 'colSm-auto',
      (col.md === 'auto' || col.md === 0) && 'colMd-auto',
      (col.lg === 'auto' || col.lg === 0) && 'colLg-auto',
      (col.xl === 'auto' || col.xl === 0) && 'colXl-auto',
      typeof col.xs === 'number' && `colXs-${col.xs}`,
      typeof col.sm === 'number' && `colSm-${col.sm}`,
      typeof col.md === 'number' && `colMd-${col.md}`,
      typeof col.lg === 'number' && `colLg-${col.lg}`,
      typeof col.xl === 'number' && `colXl-${col.xl}`,
      typeof offset.xs === 'number' && `offsetXs-${offset.xs}`,
      typeof offset.sm === 'number' && `offsetSm-${offset.sm}`,
      typeof offset.md === 'number' && `offsetMd-${offset.md}`,
      typeof offset.lg === 'number' && `offsetLg-${offset.lg}`,
      typeof offset.xl === 'number' && `offsetXl-${offset.xl}`
    ]
  };
  return composeClasses('WuiCol', slot, classes);
};
