import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiPopup';

export const popupClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'page',
  'autoHeight'
]);

export type PopupClassesType = typeof popupClasses;
