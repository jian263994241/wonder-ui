import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiTabBarItem';

export const tabBarItemClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'active',
  'disabled',
  'label',
  'icon',
  'badge'
]);

export type TabBarItemClasses = typeof tabBarItemClasses;
