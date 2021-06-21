import { generateUtilityClasses, composeClasses } from '@wonder-ui/utils';

export const componentName = 'WuiInputBase';

export const inputBaseClasses = generateUtilityClasses(componentName, [
  'root',
  'disabled',
  'multiline',
  'resizable'
]);

export interface InputBaseStyleProps {
  autoAdjustHeight?: boolean;
  classes?: Partial<typeof inputBaseClasses>;
  disabled?: boolean;
  multiline?: boolean;
  resizable?: boolean;
}

export const useClasses = (styleProps: InputBaseStyleProps) => {
  const { autoAdjustHeight, classes, disabled, multiline, resizable } =
    styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      multiline && 'multiline',
      multiline && resizable && !autoAdjustHeight && 'resizable'
    ]
  };

  return composeClasses(componentName, slots, classes);
};
