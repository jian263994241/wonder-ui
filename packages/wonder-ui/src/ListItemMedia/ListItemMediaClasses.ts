import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listItemMediaClasses = generateUtilityClasses('WuiListItemMedia', [
  'root'
]);

export interface ListItemMediaStyleProps {
  classes?: Partial<typeof listItemMediaClasses>;
}

export const useClasses = (styleProps: ListItemMediaStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  return composeClasses('WuiListItemMedia', slots, classes);
};
