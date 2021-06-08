import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const stepperClasses = generateUtilityClasses('WuiStepper', [
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

export interface StepperStyleProps {
  classes?: Partial<typeof stepperClasses>;
  disabled?: boolean;
  disableInput?: boolean;
  disableMinusButton?: boolean;
  disablePlusButton?: boolean;
}

export const useClasses = (styleProps: StepperStyleProps) => {
  const {
    classes,
    disabled,
    disableInput,
    disableMinusButton,
    disablePlusButton
  } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled'],
    input: ['input', disableInput && 'disableInput'],
    minus: [
      'button',
      'minus',
      disableMinusButton && 'disabled',
      disableMinusButton && 'disableMinusButton'
    ],
    plus: [
      'button',
      'plus',
      disablePlusButton && 'disabled',
      disablePlusButton && 'disablePlusButton'
    ]
  };

  return composeClasses('WuiStepper', slots, classes);
};
