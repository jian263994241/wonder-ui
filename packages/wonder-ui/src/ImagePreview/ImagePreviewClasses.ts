import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiImagePreview';

export const imagePreviewClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'modal',
  'swipe',
  'swipeItem',
  'img',
  'close',
  'indicators'
]);
