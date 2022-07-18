import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiLinearProgress';

export const linearProgressClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'inner',
  'bar',
  'text',
  'animated',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorError',
  'colorWarning',
  'colorLight',
  'colorDark'
]);

export type LinearProgressClassesType = typeof linearProgressClasses;
