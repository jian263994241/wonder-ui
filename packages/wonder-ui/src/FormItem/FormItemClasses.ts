import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiFormItem';

export const formItemClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'child',
  'label',
  'description',
  'error',
  'warning'
]);

export type FormItemClassesType = typeof formItemClasses;
