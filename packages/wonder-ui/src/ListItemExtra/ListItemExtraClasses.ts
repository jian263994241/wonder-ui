import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listItemExtraClasses = generateUtilityClasses('WuiListItemExtra', [
  'root'
]);

export interface ListItemMediaStyleProps {
  classes?: Partial<typeof listItemExtraClasses>;
}

export const useClasses = (styleProps: ListItemMediaStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  return composeClasses('WuiListItemExtra', slots, classes);
};
