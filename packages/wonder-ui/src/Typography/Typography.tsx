import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, composeClasses, css, upperFirst } from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  typographyClasses,
  typographyCssVars,
  useTypographyCssVars
} from './TypographyClasses';
import { ellipsis } from 'polished';
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
      variant && variant !== 'inherit' && variant,
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

const TypographyRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TypographyProps }>(({ theme, styleProps }) => ({
  margin: 0,
  padding: 0,
  WebkitTapHighlightColor: 'transparent',
  WebkitFontSmoothing: 'antialiased',
  color: typographyCssVars.value('color'),
  fontFamily: typographyCssVars.value('fontFamily'),
  fontSize: typographyCssVars.value('fontSize'),
  fontWeight: typographyCssVars.value('fontWeight'),
  lineHeight: typographyCssVars.value('lineHeight'),
  letterSpacing: typographyCssVars.value('letterSpacing'),
  textAlign: typographyCssVars.value('textAlign') as any,

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
  [`&.${typographyClasses.h1}`]: typographyCssVars.style({
    fontWeight: typographyCssVars.value('titleFontWeight'),
    fontSize: typographyCssVars.value('h1')
  }),
  [`&.${typographyClasses.h2}`]: typographyCssVars.style({
    fontWeight: typographyCssVars.value('titleFontWeight'),
    fontSize: typographyCssVars.value('h2')
  }),
  [`&.${typographyClasses.h3}`]: typographyCssVars.style({
    fontWeight: typographyCssVars.value('titleFontWeight'),
    fontSize: typographyCssVars.value('h3')
  }),
  [`&.${typographyClasses.h4}`]: typographyCssVars.style({
    fontWeight: typographyCssVars.value('titleFontWeight'),
    fontSize: typographyCssVars.value('h4')
  }),
  [`&.${typographyClasses.h5}`]: typographyCssVars.style({
    fontWeight: typographyCssVars.value('titleFontWeight'),
    fontSize: typographyCssVars.value('h5')
  }),
  [`&.${typographyClasses.h6}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('h6')
  }),
  [`&.${typographyClasses.subtitle1}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('subtitle1')
  }),
  [`&.${typographyClasses.subtitle2}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('subtitle2')
  }),
  [`&.${typographyClasses.body1}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('body1')
  }),
  [`&.${typographyClasses.body2}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('body2')
  }),
  [`&.${typographyClasses.caption}`]: typographyCssVars.style({
    fontSize: typographyCssVars.value('caption')
  }),

  [`&.${typographyClasses.colorPrimary}`]: typographyCssVars.style({
    color: theme.palette.primary.main
  }),
  [`&.${typographyClasses.colorSecondary}`]: typographyCssVars.style({
    color: theme.palette.secondary.main
  }),
  [`&.${typographyClasses.colorSuccess}`]: typographyCssVars.style({
    color: theme.palette.success.main
  }),
  [`&.${typographyClasses.colorError}`]: typographyCssVars.style({
    color: theme.palette.error.main
  }),
  [`&.${typographyClasses.colorWarning}`]: typographyCssVars.style({
    color: theme.palette.warning.main
  }),

  [`&.${typographyClasses.colorTextPrimary}`]: typographyCssVars.style({
    color: theme.palette.text.primary
  }),
  [`&.${typographyClasses.colorTextSecondary}`]: typographyCssVars.style({
    color: theme.palette.text.secondary
  }),

  [`&.${typographyClasses.noWrap}`]: {
    ...ellipsis('100%', 1)
  },
  [`&.${typographyClasses.lineClamp}`]: {
    ...ellipsis('100%', styleProps.lineClamp ?? 2)
  },

  [`&.${typographyClasses.gutterBottom}`]: {
    marginBottom: typographyCssVars.value('gutterBottom')
  },

  [`&.${typographyClasses.paragraph}`]: {
    textIndent: typographyCssVars.value('paragraphIndent'),
    marginBottom: typographyCssVars.value('paragraphGutter')
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
      variant,
      style,
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

    useTypographyCssVars();

    return (
      <TypographyRoot
        {...rest}
        as={component}
        className={css(classes.root, className)}
        ref={ref as any}
        styleProps={styleProps}
        style={{
          ...typographyCssVars.style({
            textAlign: styleProps.align
          }),
          ...style
        }}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
