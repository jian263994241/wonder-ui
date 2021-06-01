import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const backdropClasses = generateUtilityClasses('WuiBackdrop', [
  'root',
  'invisible'
]);

export interface BackdropStyleProps {
  classes?: Partial<typeof backdropClasses>;
  invisible?: boolean;
}

export const useClasses = (styleProps: BackdropStyleProps) => {
  const { invisible, classes } = styleProps;

  const slots = {
    root: ['root', invisible && 'invisible']
  };

  return composeClasses('WuiBackdrop', slots, classes);
};
