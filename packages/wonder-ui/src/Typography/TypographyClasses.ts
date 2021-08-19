import {
  capitalize,
  composeClasses,
  generateUtilityClasses,
  upperFirst
} from '@wonder-ui/utils';
import type { TypographyClasses, TypographyProps } from './TypographyTypes';

export const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'span',
  body2: 'span',
  inherit: 'div'
};

export const typographyClasses: TypographyClasses = generateUtilityClasses(
  'WuiTypography',
  [
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
    'inherit',
    'inline',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'colorPrimary',
    'colorSecondary',
    'colorTextPrimary',
    'colorTextSecondary',
    'colorError',
    'noWrap',
    'gutterBottom',
    'paragraph',
    'lineClamp'
  ]
);

export const useClasses = (styleProps: TypographyProps) => {
  const {
    align,
    color,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    lineClamp,
    classes
  } = styleProps;

  const slots = {
    root: [
      'root',
      variant != 'inherit' && variant,
      align !== 'inherit' && `align${capitalize(align!)}`,
      color !== 'inherit' && `color${upperFirst(color!)}`,
      gutterBottom && 'gutterBottom',
      noWrap && 'noWrap',
      paragraph && 'paragraph',
      typeof lineClamp === 'number' && lineClamp !== 0 && 'lineClamp'
    ]
  };

  return composeClasses('WuiTypography', slots, classes);
};
