import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiSteps';

export const stepsClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'horizontal',
  'vertical'
]);

export type StepsClasses = typeof stepsClasses;
