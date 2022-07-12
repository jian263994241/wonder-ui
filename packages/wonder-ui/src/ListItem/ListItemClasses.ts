import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiListItem';

export const listItemClasses = generateUtilityClasses('WuiListItem', [
  'root',
  'content',
  'body',
  'arrow',
  'button',
  'disabled',
  'prefix',
  'extra',
  'textPrimary',
  'textSecondary'
]);

export type ListItemClassesType = typeof listItemClasses;
