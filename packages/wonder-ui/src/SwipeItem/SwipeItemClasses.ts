import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiSwipeItem';

export const swipeItemClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'active'
]);

export type SwipeItemClasses = typeof swipeItemClasses;
