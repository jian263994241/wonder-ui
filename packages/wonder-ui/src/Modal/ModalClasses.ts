import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const modalClasses = generateUtilityClasses('WuiModal', [
  'root',
  'hidden'
]);

export interface ModalStyleProps {
  classes?: Partial<typeof modalClasses>;
  visible?: boolean;
  exited?: boolean;
}

export const useClasses = (styleProps: ModalStyleProps) => {
  const { classes, visible, exited } = styleProps;

  const slots = {
    root: ['root', !visible && exited && 'hidden']
  };
  return composeClasses('WuiModal', slots, classes);
};
