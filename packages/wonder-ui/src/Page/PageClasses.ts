import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiPage';

export const pageClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'content',
  'header',
  'footer'
]);

export type PageClassesType = typeof pageClasses;
