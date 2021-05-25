import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const buttonGroupClasses = generateUtilityClasses('WuiButtonGroup', [
  'root',
  'directionHorizontal',
  'directionVertical'
]);

export interface ButtonGroupStyleProps {
  classes?: Partial<typeof buttonGroupClasses>;
  direction: 'horizontal' | 'vertical';
}

export const useClasses = (styleProps: ButtonGroupStyleProps) => {
  const { direction, classes } = styleProps;

  const slot = {
    root: ['root', `direction${capitalize(direction)}`]
  };

  return composeClasses('WuiButtonGroup', slot, classes);
};
