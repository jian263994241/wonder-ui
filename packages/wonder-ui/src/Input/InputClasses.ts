import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiInput';

export const inputClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'prefix',
  'suffix',
  'clearButton',
  'revealButton',
  'borderless',
  'multiline',
  'disabled',
  'focused',
  'resizable',
  'readonly',
  'hasError'
]);

export type InputClassesType = typeof inputClasses;
