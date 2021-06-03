import {
  generateUtilityClasses,
  capitalize,
  composeClasses
} from '@wonder-ui/utils';

export const tagClasses = generateUtilityClasses('WuiTag', [
  'root',
  'close',
  'outlined',
  'contained',
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

export interface TagStyleProps {
  classes?: Partial<typeof tagClasses>;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  variant?: 'outlined' | 'contained';
}

export const useClasses = (styleProps: TagStyleProps) => {
  const { classes, color, variant } = styleProps;

  const slots = {
    root: [
      'root',
      variant && variant,
      color && color !== 'default' && `color${capitalize(color)}`
    ],
    close: ['close']
  };

  return composeClasses('WuiTag', slots, classes);
};
