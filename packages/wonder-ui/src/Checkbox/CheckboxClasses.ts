import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const checkboxClasses = generateUtilityClasses('WuiCheckbox', [
  'root',
  'circle',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorError',
  'colorDanger',
  'colorWarning',
  'colorInfo',
  'colorLight',
  'colorDark'
]);

export interface CheckboxStyleProps {
  classes?: Partial<typeof checkboxClasses>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  circle?: boolean;
}

export const useClasses = (styleProps: CheckboxStyleProps) => {
  const { classes, color, circle } = styleProps;

  const slots = {
    root: ['root', circle && 'circle', color && `color${capitalize(color)}`]
  };

  return composeClasses('WuiCheckbox', slots, classes);
};
