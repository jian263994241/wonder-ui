import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiNavbar';

export const navbarClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'inner',
  'background',
  'title',
  'subTitle',
  'left',
  'right'
]);

export type NavbarClassesType = typeof navbarClasses;

export interface NavbarStyleProps {
  classes?: Partial<typeof navbarClasses>;
}
