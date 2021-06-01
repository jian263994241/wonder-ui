import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listHeaderClasses = generateUtilityClasses('WuiListHeader', [
  'root',
  'sticky'
]);

export interface ListHeaderStyleProps {
  classes?: Partial<typeof listHeaderClasses>;
  sticky?: boolean;
}

export const useClasses = (styleProps: ListHeaderStyleProps) => {
  const { classes, sticky } = styleProps;

  const slots = {
    root: ['root', sticky && 'sticky']
  };

  return composeClasses('WuiListHeader', slots, classes);
};
