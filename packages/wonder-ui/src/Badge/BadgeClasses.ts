import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const badgeClasses = generateUtilityClasses('WuiBadge', [
  'root',
  'content',
  'rounded',
  'withChildren',
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

export interface BadgeStyleProps {
  children?: any;
  classes?: Partial<typeof badgeClasses>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  rounded?: boolean;
}

export const useClasses = (styleProps: BadgeStyleProps) => {
  const { classes, color, children, rounded } = styleProps;

  const slots = {
    root: [
      'root',
      rounded && 'rounded',
      color && `color${capitalize(color)}`,
      !!children && 'withChildren'
    ],
    content: ['content']
  };

  return composeClasses('WuiBadge', slots, classes);
};
