import {
  generateUtilityClasses,
  capitalize,
  composeClasses,
  upperFirst
} from '@wonder-ui/utils';

export const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
} as const;

export const typographyClasses = generateUtilityClasses('WuiTypography', [
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
]);

export interface TypographyStyleProps {
  align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  classes?: Partial<typeof typographyClasses>;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  gutterBottom: boolean;
  inline?: boolean;
  lineClamp?: number;
  noWrap: boolean;
  paragraph: boolean;
  variant: keyof typeof defaultVariantMapping;
}

export const useClasses = (styleProps: TypographyStyleProps) => {
  const {
    align,
    color,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    lineClamp,
    inline,
    classes
  } = styleProps;

  const slots = {
    root: [
      'root',
      variant,
      align !== 'inherit' && `align${capitalize(align)}`,
      color !== 'inherit' && `color${upperFirst(color)}`,
      gutterBottom && 'gutterBottom',
      noWrap && 'noWrap',
      paragraph && 'paragraph',
      inline && 'inline',
      typeof lineClamp === 'number' && lineClamp !== 0 && 'lineClamp'
    ]
  };

  return composeClasses('WuiTypography', slots, classes);
};
