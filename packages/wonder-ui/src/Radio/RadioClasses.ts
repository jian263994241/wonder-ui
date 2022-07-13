import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiRadio';

export const radioClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'block',
  'input',
  'icon',
  'content',
  'checked',
  'indeterminate',
  'disabled'
]);

export type RadioClassesType = typeof radioClasses;
