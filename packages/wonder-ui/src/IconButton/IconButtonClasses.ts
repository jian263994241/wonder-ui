import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';
import { IconButtonClasses } from './IconButtonTypes';

export const COMPONENT_NAME = 'WuiIconButton';

export const iconButtonClasses: IconButtonClasses = generateUtilityClasses(
  'WuiIconButton',
  ['root', 'disabled', 'edgeStart', 'edgeEnd', 'label']
);

export const iconButtonCssVars = createCssVars(COMPONENT_NAME, [
  'size',
  'color',
  'bgColor',
  'edge',
  'padding'
]);
