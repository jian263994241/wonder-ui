import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiCard';

export const cardClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'header',
  'title',
  'body'
]);
