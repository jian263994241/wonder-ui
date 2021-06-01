import { ColsType, getResponsiveValue, ResponsiveValue } from './share';
import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const rowClasses = generateUtilityClasses('WuiRow', ['root']);

export interface RowStyleProps {
  classes?: Partial<typeof rowClasses>;
  gutter?: number | [number, number];
  rowCols?: ResponsiveValue<ColsType>;
}

export const useClasses = (styleProps: RowStyleProps) => {
  const { classes, rowCols: rowColsProp } = styleProps;
  const rowCols = getResponsiveValue(rowColsProp);

  const slot = {
    root: [
      'root',
      (rowCols.xs === 'auto' || rowCols.xs === 0) && 'rowColsXs-auto',
      (rowCols.sm === 'auto' || rowCols.sm === 0) && 'rowColsSm-auto',
      (rowCols.md === 'auto' || rowCols.md === 0) && 'rowColsMd-auto',
      (rowCols.lg === 'auto' || rowCols.lg === 0) && 'rowColsLg-auto',
      (rowCols.xl === 'auto' || rowCols.xl === 0) && 'rowColsXl-auto',
      typeof rowCols.xs === 'number' && `rowColsXs-${rowCols.xs}`,
      typeof rowCols.sm === 'number' && `rowColsSm-${rowCols.sm}`,
      typeof rowCols.md === 'number' && `rowColsMd-${rowCols.md}`,
      typeof rowCols.lg === 'number' && `rowColsLg-${rowCols.lg}`,
      typeof rowCols.xl === 'number' && `rowColsXl-${rowCols.xl}`
    ]
  };

  return composeClasses('WuiRow', slot, classes);
};
