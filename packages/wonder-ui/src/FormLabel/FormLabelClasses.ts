import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiFormLabel';

export const formLabelClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'requiredAsterisk',
  'requiredText',
  'help'
]);

export type FormLabelClassesType = typeof formLabelClasses;
