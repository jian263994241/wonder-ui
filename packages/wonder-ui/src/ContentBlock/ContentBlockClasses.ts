import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiContentBlock';

export const contentBlockClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'title',
  'content',
  'inset',
  'strong'
]);

export type ContentBlockClassesType = typeof contentBlockClasses;
