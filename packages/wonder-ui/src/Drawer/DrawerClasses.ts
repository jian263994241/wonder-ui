import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const drawerClasses = generateUtilityClasses('WuiDrawer', [
  'root',
  'modal',
  'paper',
  'permanent',
  'persistent',
  'temporary',
  'anchorTop',
  'anchorBottom',
  'anchorLeft',
  'anchorRight',
  'temporaryAnchorTop',
  'temporaryAnchorBottom',
  'temporaryAnchorLeft',
  'temporaryAnchorRight'
]);

export interface DrawerStyleProps {
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  classes?: Partial<typeof drawerClasses>;
  variant?: 'permanent' | 'persistent' | 'temporary';
}

export const useClasses = (styleProps: DrawerStyleProps) => {
  const { anchor, classes, variant } = styleProps;

  const slots = {
    root: ['root', variant && variant],
    paper: [
      'paper',
      anchor && `anchor${capitalize(anchor)}`,
      anchor &&
        variant === 'temporary' &&
        `temporaryAnchor${capitalize(anchor)}`
    ],
    docked: ['docked'],
    modal: ['modal']
  };

  return composeClasses('WuiDrawer', slots, classes);
};
