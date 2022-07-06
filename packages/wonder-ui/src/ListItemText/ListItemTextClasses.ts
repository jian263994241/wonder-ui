import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiListItemText';

export const listItemTextClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'title',
  'textPrimary',
  'textSecondary'
]);

export interface ListItemTextStyleProps {
  classes?: Partial<typeof listItemTextClasses>;
  primary?: any;
  secondary?: any;
}

export const useClasses = (styleProps: ListItemTextStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    title: ['title'],
    textPrimary: ['textPrimary'],
    textSecondary: ['textSecondary']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};
