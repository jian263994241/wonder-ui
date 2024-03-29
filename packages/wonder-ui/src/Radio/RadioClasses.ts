import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const radioClasses = generateUtilityClasses('WuiRadio', [
  'root',
  'input',
  'colorPrimary',
  'colorSecondary'
]);

export interface RadioStyleProps {
  classes?: Partial<typeof radioClasses>;
  color?: 'primary' | 'secondary';
}

export const useClasses = (styleProps: RadioStyleProps) => {
  const { classes, color } = styleProps;

  const slots = {
    root: ['root', color && `color${capitalize(color)}`],
    input: ['input']
  };
  return composeClasses('WuiRadio', slots, classes);
};
