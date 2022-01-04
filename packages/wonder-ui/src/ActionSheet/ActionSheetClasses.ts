import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiActionSheet';

export const actionSheetClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'title',
  'action',
  'cancelAction'
]);
