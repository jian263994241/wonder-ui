import { generateUtilityClasses, composeClasses } from '@wonder-ui/utils';

export const checkableTagClasses = generateUtilityClasses('WuiCheckableTag', [
  'root',
  'checked'
]);

export interface CheckableTagStyleProps {
  classes?: Partial<typeof checkableTagClasses>;
  checked?: boolean;
}

export const useClasses = (styleProps: CheckableTagStyleProps) => {
  const { classes, checked } = styleProps;

  const slots = {
    root: ['root', checked && 'checked']
  };

  return composeClasses('WuiCheckableTag', slots, classes);
};
