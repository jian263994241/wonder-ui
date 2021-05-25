import { composeClasses, css, generateUtilityClasses } from '@wonder-ui/utils';

export const buttonBaseClasses = generateUtilityClasses('ButtonBase', [
  'root',
  'disabled',
  'focusVisible'
]);

export type ButtonBaseClasses = typeof buttonBaseClasses;

export interface ButtonBaseStyleProps {
  classes?: Partial<ButtonBaseClasses>;
  disabled?: boolean;
  focusVisible?: boolean;
  focusVisibleClassName?: string;
}

export const useClasses = (styleProps: ButtonBaseStyleProps) => {
  const { disabled, focusVisible, focusVisibleClassName, classes } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };

  const composedClasses = composeClasses('ButtonBase', slots, classes);

  composedClasses.root = css(
    composedClasses.root,
    focusVisible && focusVisibleClassName
  );

  return composedClasses;
};
