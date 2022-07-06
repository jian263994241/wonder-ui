import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiListHeader';

export const listHeaderClasses = generateUtilityClasses(COMPONENT_NAME, [
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

  return composeClasses(COMPONENT_NAME, slots, classes);
};
