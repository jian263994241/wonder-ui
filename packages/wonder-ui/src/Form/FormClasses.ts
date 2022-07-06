import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiForm';

export const formClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'horizontal',
  'vertical',
  'list',
  'footer'
]);

export type FormLabelClassesType = typeof formClasses;
