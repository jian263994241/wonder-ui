import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const toggleClasses = generateUtilityClasses('WuiToggle', [
  'root',
  'disabled',
  'checked',
  'sizeMedium',
  'sizeSmall'
]);

export interface ToggleStyleProps {
  checked?: boolean;
  classes?: Partial<typeof toggleClasses>;
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  size?: 'medium' | 'small';
}

export const useClasses = (styleProps: ToggleStyleProps) => {
  const { checked, classes, color, disabled, size } = styleProps;

  const slots = {
    root: [
      'root',
      color && `color${capitalize(color)}`,
      size && `color${capitalize(size)}`,
      checked && 'checked',
      disabled && 'disabled'
    ],
    icon: ['icon'],
    input: ['input']
  };

  return composeClasses('WuiToggle', slots, classes);
};
