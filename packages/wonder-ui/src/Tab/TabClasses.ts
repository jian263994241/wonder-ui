import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiTab';

export const tabClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'active',
  'disabled',
  'label',
  'badge'
]);

export type TabClasses = typeof tabClasses;
