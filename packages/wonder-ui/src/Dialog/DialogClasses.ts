import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dialogClasses = generateUtilityClasses('WuiDialog', ['root']);

export const useClasses = (styleProps: any) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };

  return composeClasses('WuiDialog', slots, classes);
};
