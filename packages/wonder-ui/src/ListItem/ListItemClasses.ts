import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listItemClasses = generateUtilityClasses('WuiListItem', [
  'root',
  'inner',
  'body',
  'arrow',
  'disabled',
  'media',
  'extra'
]);

export interface ListItemStyleProps {
  classes?: Partial<typeof listItemClasses>;
}

export const useClasses = (styleProps: ListItemStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    body: ['body'],
    arrow: ['arrow'],
    media: ['media'],
    extra: ['extra']
  };

  return composeClasses('WuiListItem', slots, classes);
};
