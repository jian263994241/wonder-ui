import { generateUtilityClasses } from '@wonder-ui/utils';

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

export type TypographyClassesType = typeof typographyClasses;
