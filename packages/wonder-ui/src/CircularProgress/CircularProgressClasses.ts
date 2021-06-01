import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const circularProgressClasses = generateUtilityClasses(
  'WuiCircularProgress',
  [
    'root',
    'circle',
    'label',
    'svg',
    'determinate',
    'indeterminate',
    'withChildren',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorDanger',
    'colorWarning',
    'colorInfo',
    'colorLight',
    'colorDark'
  ]
);

export interface CircularProgressStyleProps {
  classes?: Partial<typeof circularProgressClasses>;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  variant?: 'determinate' | 'indeterminate';
}

export const useClasses = (styleProps: CircularProgressStyleProps) => {
  const { classes, color, variant } = styleProps;

  const slots = {
    root: ['root', color && `color${capitalize(color)}`, variant && variant],
    circle: ['circle'],
    label: ['label'],
    svg: ['svg']
  };

  return composeClasses('WuiCircularProgress', slots, classes);
};
