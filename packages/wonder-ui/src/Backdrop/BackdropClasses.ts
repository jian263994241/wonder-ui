import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiBackdrop';

export const backdropClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'invisible'
]);

export const backdropCssVars = createCssVars(COMPONENT_NAME, [
  'zIndex',
  'color'
]);
