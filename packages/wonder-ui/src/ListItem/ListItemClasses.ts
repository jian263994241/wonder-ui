import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiListItem';

export const listItemClasses = generateUtilityClasses('WuiListItem', [
  'root',
  'content',
  'body',
  'arrow',
  'button',
  'disabled',
  'start',
  'end',
  'prefix',
  'extra',
  'textPrimary',
  'textSecondary'
]);

export type ListItemClassesType = typeof listItemClasses;

export interface ListItemStyleProps {
  classes?: Partial<ListItemClassesType>;
  disabled?: boolean;
  button?: boolean;
  start?: boolean;
  end?: boolean;
}

export const useClasses = (styleProps: ListItemStyleProps) => {
  const { classes, disabled, button, start, end } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      button && 'button',
      start && 'start',
      end && 'end'
    ],
    content: ['content'],
    body: ['body'],
    arrow: ['arrow'],
    prefix: ['prefix'],
    extra: ['extra'],
    textPrimary: ['textPrimary'],
    textSecondary: ['textSecondary'],
    start: ['start'],
    end: ['end']
  };

  return composeClasses('WuiListItem', slots, classes);
};
