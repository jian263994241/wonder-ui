import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  capitalize,
  composeClasses,
  createCssVars,
  css,
  upperFirst
} from '@wonder-ui/utils';
import { COMPONENT_NAME, typographyClasses } from './TypographyClasses';
import type { TypographyProps } from './TypographyTypes';

const useClasses = (styleProps: TypographyProps) => {
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
      variant && variant,
      align && `align${capitalize(align!)}`,
      color && `color${upperFirst(color!)}`,
      gutterBottom && 'gutterBottom',
      noWrap && 'noWrap',
      paragraph && 'paragraph',
      typeof lineClamp === 'number' && lineClamp !== 0 && 'lineClamp'
    ]
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const cssVars = createCssVars(COMPONENT_NAME, [
  'gutterBottom',
  'paragraphGutter',
  'paragraphIndent',
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

const TypographyRoot = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TypographyProps }>(({ theme, styleProps }) => ({
  ...cssVars.style({
    gutterBottom: '0.35em',
    paragraphGutter: theme.spacing(2),
    paragraphIndent: '2em',
    h1: theme.typography.pxToRem(36),
    h2: theme.typography.pxToRem(30),
    h3: theme.typography.pxToRem(26),
    h4: theme.typography.pxToRem(24),
    h5: theme.typography.pxToRem(22),
    h6: theme.typography.pxToRem(20),
    subtitle1: theme.typography.pxToRem(17),
    subtitle2: theme.typography.pxToRem(16),
    body1: theme.typography.pxToRem(15),
    body2: theme.typography.pxToRem(14),
    caption: theme.typography.pxToRem(12)
  }),
  WebkitTapHighlightColor: 'transparent',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: theme.typography.fontFamily,
  textAlign: styleProps.align,
  wordBreak: 'break-word',
  margin: 0,
  padding: 0,
  '&:is(a)': {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  '&:is(a):hover': {
    opacity: 0.8,
    '@media (hover: none)': {
      opacity: 'unset'
    }
  },
  [`&.${typographyClasses.h1}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('h1')
  },
  [`&.${typographyClasses.h2}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('h2')
  },
  [`&.${typographyClasses.h3}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('h3')
  },
  [`&.${typographyClasses.h4}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('h4')
  },
  [`&.${typographyClasses.h5}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('h5')
  },
  [`&.${typographyClasses.h6}`]: {
    fontSize: cssVars.value('h6')
  },
  [`&.${typographyClasses.subtitle1}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('subtitle1')
  },
  [`&.${typographyClasses.subtitle2}`]: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: cssVars.value('subtitle2')
  },
  [`&.${typographyClasses.body1}`]: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: cssVars.value('body1')
  },
  [`&.${typographyClasses.body2}`]: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: cssVars.value('body2')
  },
  [`&.${typographyClasses.caption}`]: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: cssVars.value('caption')
  },

  [`&.${typographyClasses.colorPrimary}`]: {
    color: theme.palette.primary.main
  },
  [`&.${typographyClasses.colorSecondary}`]: {
    color: theme.palette.secondary.main
  },
  [`&.${typographyClasses.colorSuccess}`]: {
    color: theme.palette.success.main
  },
  [`&.${typographyClasses.colorError}`]: {
    color: theme.palette.error.main
  },
  [`&.${typographyClasses.colorWarning}`]: {
    color: theme.palette.warning.main
  },

  [`&.${typographyClasses.colorTextPrimary}`]: {
    color: theme.palette.text.primary
  },
  [`&.${typographyClasses.colorTextSecondary}`]: {
    color: theme.palette.text.secondary
  },

  [`&.${typographyClasses.noWrap}`]: {
    ...theme.typography.ellipsis(1)
  },
  [`&.${typographyClasses.lineClamp}`]: {
    ...theme.typography.ellipsis(styleProps.lineClamp ?? 1)
  },

  [`&.${typographyClasses.gutterBottom}`]: {
    marginBottom: cssVars.value('gutterBottom')
  },
  [`&.${typographyClasses.paragraph}`]: {
    textIndent: cssVars.value('paragraphIndent'),
    marginBottom: cssVars.value('paragraphGutter')
  }
}));

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      align,
      children,
      className,
      color,
      component: componentProp,
      gutterBottom = false,
      lineClamp,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      ...rest
    } = props;

    const component = componentProp ?? (paragraph ? 'p' : 'div');

    const styleProps = {
      ...props,
      color,
      gutterBottom,
      lineClamp,
      noWrap,
      paragraph,
      variant
    };

    const classes = useClasses(styleProps);

    return (
      <TypographyRoot
        {...rest}
        as={component}
        className={css(classes.root, className)}
        ref={ref}
        styleProps={styleProps}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
