import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const listClasses = generateUtilityClasses('WuiList', ['root', 'inset']);

export type ListClassesType = typeof listClasses;

export interface ListStyleProps {
  classes?: Partial<typeof listClasses>;
  inset?: boolean;
}

export const useClasses = (styleProps: ListStyleProps) => {
  const { classes, inset } = styleProps;

  const slots = {
    root: ['root', inset && 'inset']
  };

  return composeClasses('WuiList', slots, classes);
};
