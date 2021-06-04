import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dialogClasses = generateUtilityClasses('WuiDialog', [
  'root',
  'content'
]);

export const useClasses = (styleProps: any) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    content: ['content']
  };

  return composeClasses('WuiDialog', slots, classes);
};
