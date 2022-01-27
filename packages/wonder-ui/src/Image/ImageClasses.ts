import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiImage';

export const imageClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'img',
  'round',
  'placeholder',
  'fallback'
]);
