import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'RouteTransition';

export const routeTransitionClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root'
]);

export type RouteTransitionClasses = typeof routeTransitionClasses;
