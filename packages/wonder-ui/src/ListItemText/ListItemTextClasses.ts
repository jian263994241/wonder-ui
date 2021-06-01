import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listItemTextClasses = generateUtilityClasses('WuiListItemText', [
  'root',
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
    textPrimary: ['textPrimary'],
    textSecondary: ['textSecondary']
  };

  return composeClasses('WuiListItemText', slots, classes);
};
