import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiStepper';

export const stepperClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'button',
  'minus',
  'plus',
  'disabled',
  'disableInput',
  'disableMinusButton',
  'disablePlusButton'
]);

export const stepperCssVars = createCssVars(COMPONENT_NAME, [
  'height',
  'borderRadius',
  'bgColor',
  'buttonColor',
  'fontSize',
  'gap',
  'textColor'
]);

export const useStepperCssVars = () => {
  useRootCssVars((theme) =>
    stepperCssVars.style({
      height: 28,
      borderRadius: theme.shape.borderRadius[2],
      bgColor: theme.palette.background.default,
      buttonColor: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(14),
      textColor: theme.palette.text.primary,
      gap: 2
    })
  );
};

export type StepperClassesType = typeof stepperClasses;
