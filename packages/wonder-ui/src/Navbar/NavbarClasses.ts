import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const navbarClasses = generateUtilityClasses('WuiNavbar', [
  'root',
  'inner',
  'background',
  'title',
  'subTitle',
  'left',
  'right'
]);

export interface NavbarStyleProps {
  classes?: Partial<typeof navbarClasses>;
}

export const useClasses = (styleProps: NavbarStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    background: ['background'],
    title: ['title'],
    subTitle: ['subTitle'],
    left: ['left'],
    right: ['right']
  };

  return composeClasses('WuiNavbar', slots, classes);
};
