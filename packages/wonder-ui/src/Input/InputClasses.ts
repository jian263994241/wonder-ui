import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiInput';

export const inputClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'prefix',
  'suffix',
  'clearButton',
  'revealButton',
  'bordered',
  'multiline',
  'disabled',
  'focused',
  'resizable',
  'readonly',
  'hasError',
  'sizeLarge',
  'sizeSmall',
  'sizeMiddle'
]);

export const inputCssVars = createCssVars(COMPONENT_NAME, [
  'height',
  'bgColor',
  'textColor',
  'borderRadius',
  'boxShadow',
  'border',
  'borderColor',
  'paddingHorizontal',
  'paddingVertical',
  'sizeMiddle',
  'sizeSmall',
  'sizeLarge'
]);

export const useInputCssVars = () => {
  useRootCssVars((theme) =>
    inputCssVars.style({
      bgColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      sizeMiddle: theme.typography.pxToRem(32),
      sizeSmall: theme.typography.pxToRem(24),
      sizeLarge: theme.typography.pxToRem(40)
    })
  );
};

export type InputClassesType = typeof inputClasses;
