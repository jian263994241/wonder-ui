import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiTabBar';

export const tabBarClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'indicator',
  'centered',
  'scrollable',
  'fullWidth',
  'autoWidth'
]);

export type TabBarClasses = typeof tabBarClasses;
