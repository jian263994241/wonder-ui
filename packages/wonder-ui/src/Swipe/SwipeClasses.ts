import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiSwipe';

export const swipeClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'vertical',
  'container',
  'item',
  'indicators',
  'indicator',
  'prevButton',
  'nextBUtton'
]);

export type SwipeClasses = typeof swipeClasses;
