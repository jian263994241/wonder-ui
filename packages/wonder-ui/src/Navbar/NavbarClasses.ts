import { generateUtilityClasses, createCssVars } from '@wonder-ui/utils';
import useRootCssVars from '../styles/useRootCssVars';
import { alpha } from '../styles/colorManipulator';

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

export const navbarCssVars = createCssVars(COMPONENT_NAME, [
  'bgColor',
  'borderColor',
  'fontSize',
  'height',
  'paddingHorizontal',
  'subtitleFontSize',
  'subtitleLineHeight',
  'subtitleTextAlign',
  'subtitleTextColor',
  'textColor',
  'titleFontSize',
  'titleFontWeight',
  'titlePaddingHorizontal',
  'titleTextAlign'
]);

export const useNavbarCSSvars = () => {
  useRootCssVars((theme) =>
    navbarCssVars.style({
      bgColor: alpha(theme.palette.background.paper, 0.89),
      borderColor: theme.palette.divider,
      fontSize: 17,
      height: 44,
      paddingHorizontal: 0,
      subtitleFontSize: 10,
      subtitleLineHeight: '1',
      subtitleTextAlign: 'inherit',
      subtitleTextColor: theme.palette.text.secondary,
      textColor: theme.palette.text.primary,
      titleFontSize: 'inherit',
      titleFontWeight: '500',
      titlePaddingHorizontal: 0,
      titleTextAlign: 'center'
    })
  );
};

export type NavbarClassesType = typeof navbarClasses;
