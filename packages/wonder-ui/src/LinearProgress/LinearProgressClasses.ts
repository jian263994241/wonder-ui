import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const linearProgressClasses = generateUtilityClasses(
  'WuiLinearProgress',
  [
    'root',
    'inner',
    'bar',
    'info',
    'animated',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorDanger',
    'colorWarning',
    'colorInfo'
  ]
);

export interface linearProgressStyleProps {
  animated?: boolean;
  classes?: Partial<typeof linearProgressClasses>;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const useClasses = (styleProps: linearProgressStyleProps) => {
  const { animated, classes, color } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    bar: ['bar', animated && 'animated', color && `color${capitalize(color)}`],
    info: ['info']
  };

  return composeClasses('WuiLinearProgress', slots, classes);
};
