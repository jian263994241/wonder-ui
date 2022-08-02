import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiEllipsis';

export const ellipsisClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'expandAction',
  'expanded',
  'collapsed',
  'collapseAction'
]);

export type EllipsisClasses = typeof ellipsisClasses;
