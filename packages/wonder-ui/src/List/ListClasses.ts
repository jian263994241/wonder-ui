import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiList';

export const listClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'card'
]);

export type ListClassesType = typeof listClasses;
