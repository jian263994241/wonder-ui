import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const radioClasses = generateUtilityClasses('WuiRadio', [
  'root',
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

export interface RadioStyleProps {
  classes?: Partial<typeof radioClasses>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
}

export const useClasses = (styleProps: RadioStyleProps) => {
  const { classes, color } = styleProps;

  const slots = {
    root: ['root', color && `color${capitalize(color)}`]
  };
  return composeClasses('WuiRadio', slots, classes);
};
