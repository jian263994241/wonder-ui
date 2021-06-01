import { composeClasses, css, generateUtilityClasses } from '@wonder-ui/utils';

export const buttonBaseClasses = generateUtilityClasses('WuiButtonBase', [
  'root',
  'disabled',
  'focusVisible'
]);

export interface ButtonBaseStyleProps {
  classes?: Partial<typeof buttonBaseClasses>;
  disabled?: boolean;
  focusVisible?: boolean;
  focusVisibleClassName?: string;
}

export const useClasses = (styleProps: ButtonBaseStyleProps) => {
  const { disabled, focusVisible, focusVisibleClassName, classes } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      focusVisible && focusVisibleClassName
    ]
  };

  return composeClasses('WuiButtonBase', slots, classes);
};
