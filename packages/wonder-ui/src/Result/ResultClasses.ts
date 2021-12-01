import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiResult';

export const resultClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'icon',
  'title',
  'description',
  'success',
  'error',
  'info',
  'waiting',
  'warning'
]);

export type ResultClassesType = typeof resultClasses;
