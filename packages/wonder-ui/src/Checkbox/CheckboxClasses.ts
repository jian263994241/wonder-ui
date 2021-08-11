import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const checkboxClasses = generateUtilityClasses('WuiCheckbox', [
  'root',
  'input',
  'circle',
  'indeterminate',
  'colorPrimary',
  'colorSecondary'
]);

export interface CheckboxStyleProps {
  classes?: Partial<typeof checkboxClasses>;
  color?: 'primary' | 'secondary';
  circle?: boolean;
  indeterminate?: boolean;
}

export const useClasses = (styleProps: CheckboxStyleProps) => {
  const { classes, color, circle, indeterminate } = styleProps;

  const slots = {
    root: [
      'root',
      circle && 'circle',
      color && `color${capitalize(color)}`,
      indeterminate && 'indeterminate'
    ],
    input: ['input']
  };

  return composeClasses('WuiCheckbox', slots, classes);
};
