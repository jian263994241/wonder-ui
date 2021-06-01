import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listItemClasses = generateUtilityClasses('WuiListItem', [
  'root',
  'inner',
  'body',
  'arrow'
]);

export interface ListItemMediaStyleProps {
  classes?: Partial<typeof listItemClasses>;
}

export const useClasses = (styleProps: ListItemMediaStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    body: ['body'],
    arrow: ['arrow']
  };

  return composeClasses('WuiListItem', slots, classes);
};
