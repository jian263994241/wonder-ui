import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dropdownMenuItemClasses = generateUtilityClasses(
  'WuiDropdownMenuItem',
  ['root', 'active', 'title', 'withArrow']
);

export interface DropdownMenuItemStyleProps {
  active?: boolean;
  arrow?: boolean;
  classes?: Partial<typeof dropdownMenuItemClasses>;
}

export const useClasses = (styleProps: DropdownMenuItemStyleProps) => {
  const { active, arrow, classes } = styleProps;

  const slots = {
    root: ['root', active && 'active'],
    title: ['title', arrow && 'withArrow']
  };

  return composeClasses('WuiDropdownMenuItem', slots, classes);
};
