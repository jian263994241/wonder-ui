import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const iconButtonClasses = generateUtilityClasses('WuiIconButton', [
  'root',
  'disabled',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorLight',
  'edgeStart',
  'edgeEnd',
  'sizeSmall',
  'sizeMedium',
  'label'
]);

export interface IconButtonStyleProps {
  classes?: Partial<typeof iconButtonClasses>;
  color: 'default' | 'inherit' | 'primary' | 'secondary' | 'light';
  disabled: boolean;
  edge: 'end' | 'start' | null;
  size: 'medium' | 'small';
}

export const useClasses = (styleProps: IconButtonStyleProps) => {
  const { classes, disabled, color, edge, size } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      color !== 'default' && `color${capitalize(color)}`,
      edge && `edge${capitalize(edge)}`,
      `size${capitalize(size)}`
    ],
    label: ['label']
  };

  return composeClasses('WuiIconButton', slots, classes);
};
