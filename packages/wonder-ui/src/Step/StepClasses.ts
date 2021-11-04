import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiStep';

export const stepClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'indicator',
  'iconContainer',
  'content',
  'title',
  'description',
  'iconDot',
  'wait',
  'process',
  'finish',
  'error'
]);

export type StepClasses = typeof stepClasses;
