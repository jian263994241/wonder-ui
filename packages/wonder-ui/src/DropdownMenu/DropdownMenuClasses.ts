import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dropdownMenuClasses = generateUtilityClasses('WuiDropdownMenu', [
  'root',
  'expanded',
  'widthAuto',
  'bar',
  'overlay',
  'overlayWrapper',
  'backdrop'
]);

export interface DropdownMenuStyleProps {
  classes?: Partial<typeof dropdownMenuClasses>;
  expanded?: boolean;
  widthAuto?: boolean;
}

export const useClasses = (styleProps: DropdownMenuStyleProps) => {
  const { classes, expanded, widthAuto } = styleProps;

  const slots = {
    root: ['root', expanded && 'expanded'],
    bar: ['bar', widthAuto && 'widthAuto'],
    overlayWrapper: ['overlayWrapper'],
    overlay: ['overlay'],
    backdrop: ['backdrop']
  };

  return composeClasses('WuiDropdownMenu', slots, classes);
};
