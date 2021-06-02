import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dropdownMenuItemClasses = generateUtilityClasses(
  'WuiDropdownMenuItem',
  ['root', 'active', 'title']
);

export interface DropdownMenuItemStyleProps {
  active?: boolean;
  classes?: Partial<typeof dropdownMenuItemClasses>;
}

export const useClasses = (styleProps: DropdownMenuItemStyleProps) => {
  const { active, classes } = styleProps;

  const slots = {
    root: ['root', active && 'active'],
    title: ['title']
  };

  return composeClasses('WuiDropdownMenuItem', slots, classes);
};
