import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiSvgIcon';

export const svgIconClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'block',
  'spin'
]);

export const svgIconCssVars = createCssVars(COMPONENT_NAME, [
  'color',
  'size',
  'width',
  'height'
]);

export type SvgIconClassesType = typeof svgIconClasses;
