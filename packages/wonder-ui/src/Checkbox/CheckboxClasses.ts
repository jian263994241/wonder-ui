import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiCheckbox';

export const checkboxClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'block',
  'input',
  'icon',
  'content',
  'checked',
  'indeterminate',
  'disabled'
]);

export type CheckboxClassesType = typeof checkboxClasses;
