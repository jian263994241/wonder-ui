import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const popoverClasses = generateUtilityClasses('WuiPopover', [
  'root',
  'paper'
]);

export interface PopoverStyleProps {
  classes?: Partial<typeof popoverClasses>;
}

export const useClasses = (styleProps: PopoverStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    paper: ['paper']
  };

  return composeClasses('WuiPopover', slots, classes);
};
