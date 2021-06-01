import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dialogContentClasses = generateUtilityClasses('WuiDialogContent', [
  'root',
  'inner',
  'title',
  'text',
  'buttonsVertical',
  'buttons',
  'button'
]);

export interface DialogContentStyleProps {
  buttonsVertical?: boolean;
  classes?: Partial<typeof dialogContentClasses>;
}

export const useClasses = (styleProps: DialogContentStyleProps) => {
  const { buttonsVertical, classes } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    title: ['title'],
    text: ['text'],
    buttons: ['buttons', buttonsVertical && 'buttonsVertical'],
    button: ['button']
  };

  return composeClasses('WuiDialogContent', slots, classes);
};
