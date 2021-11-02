import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiTabs';

export const tabsClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'indicator',
  'centered',
  'scrollable',
  'fullWidth',
  'autoWidth'
]);

export type TabsClasses = typeof tabsClasses;
