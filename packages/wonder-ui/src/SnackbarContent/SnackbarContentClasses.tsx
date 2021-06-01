import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const snackbarContentClasses = generateUtilityClasses(
  'WuiSnackbarContent',
  ['root', 'centered']
);

export interface SnackbarContentStyleProps {
  classes?: Partial<typeof snackbarContentClasses>;
  center?: boolean;
}

export const useClasses = (styleProps: SnackbarContentStyleProps) => {
  const { center, classes } = styleProps;
  const slots = {
    root: ['root', center && 'centered'],
    message: ['message'],
    action: ['action']
  };

  return composeClasses('WuiSnackbarContent', slots, classes);
};
