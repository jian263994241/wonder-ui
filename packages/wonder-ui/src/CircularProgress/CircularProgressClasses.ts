import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiCircularProgress';

export const circularProgressClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'text',
  'icon',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorError',
  'colorWarning',
  'colorLight',
  'colorDark'
]);

export type CircularProgressClassesType = typeof circularProgressClasses;
