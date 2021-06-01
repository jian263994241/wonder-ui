import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const modalContentClasses = generateUtilityClasses('WuiModalContent', [
  'root',
  'centered',
  'header',
  'body',
  'footer',
  'close',
  'ok',
  'cancel',
  'title'
]);

export interface ModalContentStyleProps {
  centered?: boolean;
  classes?: Partial<typeof modalContentClasses>;
}

export const useClasses = (styleProps: ModalContentStyleProps) => {
  const { centered, classes } = styleProps;
  const slots = {
    root: ['root', centered && 'centered'],
    header: ['header'],
    body: ['body'],
    footer: ['footer'],
    ok: ['ok'],
    cancel: ['cancel'],
    close: ['close'],
    title: ['title']
  };
  return composeClasses('WuiModalContent', slots, classes);
};
