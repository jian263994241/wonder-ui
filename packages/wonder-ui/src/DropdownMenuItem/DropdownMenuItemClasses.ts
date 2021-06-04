import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dropdownMenuItemClasses = generateUtilityClasses(
  'WuiDropdownMenuItem',
  ['root', 'autoWidth', 'active', 'title', 'withArrow']
);

export interface DropdownMenuItemStyleProps {
  active?: boolean;
  arrow?: boolean;
  autoWidth?: boolean;
  classes?: Partial<typeof dropdownMenuItemClasses>;
}

export const useClasses = (styleProps: DropdownMenuItemStyleProps) => {
  const { active, arrow, autoWidth, classes } = styleProps;

  const slots = {
    root: ['root', active && 'active', autoWidth && 'autoWidth'],
    title: ['title', arrow && 'withArrow']
  };

  return composeClasses('WuiDropdownMenuItem', slots, classes);
};
