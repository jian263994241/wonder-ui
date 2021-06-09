import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const popupClasses = generateUtilityClasses('WuiPopup', [
  'root',
  'page'
]);

export interface PopupStyleProps {
  classes?: Partial<typeof popupClasses>;
}

export const useClasses = (styleProps: PopupStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    page: ['page']
  };

  return composeClasses('WuiPopup', slots, classes);
};
