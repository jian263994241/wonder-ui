import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiTypography';

export const typographyClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'colorPrimary',
  'colorSecondary',
  'colorTextPrimary',
  'colorTextSecondary',
  'colorSuccess',
  'colorError',
  'colorWarning',
  'noWrap',
  'gutterBottom',
  'paragraph',
  'lineClamp'
]);

export const typographyCssVars = createCssVars(COMPONENT_NAME, [
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'titleFontWeight',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'gutterBottom',
  'paragraphGutter',
  'paragraphIndent',
  'textAlign',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption'
]);

export const useTypographyCssVars = () => {
  useRootCssVars((theme) =>
    typographyCssVars.style({
      body1: theme.typography.pxToRem(15),
      body2: theme.typography.pxToRem(14),
      caption: theme.typography.pxToRem(12),
      color: 'inherit',
      fontFamily: theme.typography.fontFamily,
      fontSize: 'inherit',
      fontWeight: '400',
      gutterBottom: theme.spacing(1),
      h1: theme.typography.pxToRem(36),
      h2: theme.typography.pxToRem(30),
      h3: theme.typography.pxToRem(26),
      h4: theme.typography.pxToRem(24),
      h5: theme.typography.pxToRem(22),
      h6: theme.typography.pxToRem(20),
      letterSpacing: '0',
      lineHeight: 'inherit',
      paragraphGutter: theme.spacing(2),
      paragraphIndent: '2em',
      subtitle1: theme.typography.pxToRem(17),
      subtitle2: theme.typography.pxToRem(15),
      textAlign: 'inherit',
      titleFontWeight: '500'
    })
  );
};

export type TypographyClassesType = typeof typographyClasses;
