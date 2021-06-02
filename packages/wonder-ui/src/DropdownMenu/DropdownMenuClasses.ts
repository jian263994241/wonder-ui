import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dropdownMenuClasses = generateUtilityClasses('WuiDropdownMenu', [
  'root',
  'expanded',
  'bar',
  'overlay',
  'overlayWrapper',
  'backdrop'
]);

export interface DropdownMenuStyleProps {
  classes?: Partial<typeof dropdownMenuClasses>;
  expanded?: boolean;
}

export const useClasses = (styleProps: DropdownMenuStyleProps) => {
  const { classes, expanded } = styleProps;

  const slots = {
    root: ['root', expanded && 'expanded'],
    bar: ['bar'],
    overlayWrapper: ['overlayWrapper'],
    overlay: ['overlay'],
    backdrop: ['backdrop']
  };

  return composeClasses('WuiDropdownMenu', slots, classes);
};
