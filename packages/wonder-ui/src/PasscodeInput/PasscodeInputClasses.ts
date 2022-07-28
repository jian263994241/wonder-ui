import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiPasscodeInput';

export const passcodeInputClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'cells',
  'cell',
  'input',
  'seperated',
  'focused',
  'dot',
  'caret',
  'error'
]);

export const passcodeInputCssVars = createCssVars(COMPONENT_NAME, [
  'borderRadius',
  'borderColor',
  'bgColor',
  'cellSize',
  'cellGap',
  'caretColor',
  'dotSize',
  'errorBorderColor',
  'focusedBorderColor',
  'textColor'
]);

export const usePasscodeInputCssVars = () => {
  useRootCssVars((theme) =>
    passcodeInputCssVars.style({
      borderRadius: 8,
      borderColor: theme.palette.divider,
      bgColor: theme.palette.background.paper,
      cellSize: 40,
      cellGap: 8,
      caretColor: theme.palette.primary.main,
      dotSize: 10,
      errorBorderColor: theme.palette.error.main,
      focusedBorderColor: theme.palette.primary.main,
      textColor: theme.palette.text.primary
    })
  );
};

export type PasscodeInputClassesType = typeof passcodeInputClasses;
