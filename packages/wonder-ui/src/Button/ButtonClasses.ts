import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const buttonClasses = generateUtilityClasses('WuiButton', [
  'root',
  'label',
  'text',
  'textInherit',
  'textPrimary',
  'textSecondary',
  'textSuccess',
  'textDanger',
  'textWarning',
  'textInfo',
  'textLight',
  'textDark',
  'outlined',
  'outlinedInherit',
  'outlinedPrimary',
  'outlinedSecondary',
  'outlinedSuccess',
  'outlinedDanger',
  'outlinedWarning',
  'outlinedInfo',
  'outlinedLight',
  'outlinedDark',
  'contained',
  'containedInherit',
  'containedPrimary',
  'containedSecondary',
  'containedSuccess',
  'containedDanger',
  'containedWarning',
  'containedInfo',
  'containedLight',
  'containedDark',
  'disableElevation',
  'focusVisible',
  'disabled',
  'colorInherit',
  'textSizeSmall',
  'textSizeMedium',
  'textSizeLarge',
  'outlinedSizeSmall',
  'outlinedSizeMedium',
  'outlinedSizeLarge',
  'containedSizeSmall',
  'containedSizeMedium',
  'containedSizeLarge',
  'sizeMedium',
  'sizeSmall',
  'sizeLarge',
  'fullWidth',
  'startIcon',
  'endIcon',
  'edgeStart',
  'edgeEnd',
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge'
]);

export interface ButtonStyleProps {
  classes?: Partial<typeof buttonClasses>;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  disableElevation: boolean;
  edge?: 'start' | 'end' | null;
  fullWidth: boolean;
  shape: 'default' | 'round' | 'square';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
}

export const useClasses = (styleProps: ButtonStyleProps) => {
  const {
    color,
    disableElevation,
    edge,
    fullWidth,
    shape,
    size,
    variant,
    classes
  } = styleProps;
  const slots = {
    root: [
      'root',
      variant,
      `${variant}${capitalize(color)}`,
      `size${capitalize(size)}`,
      `${variant}Size${capitalize(size)}`,
      `shape${capitalize(shape)}`,
      edge && `edge${capitalize(edge)}`,
      color === 'inherit' && 'colorInherit',
      disableElevation && 'disableElevation',
      fullWidth && 'fullWidth'
    ],
    label: ['label'],
    startIcon: ['startIcon', `iconSize${capitalize(size)}`],
    endIcon: ['endIcon', `iconSize${capitalize(size)}`]
  };

  return {
    ...classes,
    ...composeClasses('WuiButton', slots, classes)
  };
};
