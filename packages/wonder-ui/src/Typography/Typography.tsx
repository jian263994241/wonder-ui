import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import {
  defaultVariantMapping,
  typographyClasses,
  useClasses
} from './TypographyClasses';
import type { TypographyProps } from './TypographyTypes';

const TypographyRoot = styled('span', {
  name: 'WuiTypography',
  slot: 'Root'
})<{ styleProps: TypographyProps }>(({ theme, styleProps }) => ({
  margin: 0,
  padding: 0,
  display: 'block',
  textAlign: styleProps.align,
  wordBreak: 'break-word',
  ...(styleProps.variant &&
    styleProps.variant != 'inherit' &&
    theme.typography[styleProps.variant]),
  [`&.${typographyClasses.colorPrimary}`]: {
    color: theme.palette.primary.main
  },
  [`&.${typographyClasses.colorTextPrimary}`]: {
    color: theme.palette.text.primary
  },
  [`&.${typographyClasses.colorSecondary}`]: {
    color: theme.palette.secondary.main
  },
  [`&.${typographyClasses.colorTextSecondary}`]: {
    color: theme.palette.text.secondary
  },
  [`&.${typographyClasses.colorError}`]: {
    color: theme.palette.error.main
  },
  [`&.${typographyClasses.colorWarning}`]: {
    color: theme.palette.warning.main
  },
  [`&.${typographyClasses.lineClamp}`]: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: styleProps.lineClamp,
    overflow: 'hidden'
  },
  [`&.${typographyClasses.noWrap}`]: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  [`&.${typographyClasses.gutterBottom}`]: {
    marginBottom: '0.35em'
  },
  [`&.${typographyClasses.paragraph}`]: {
    marginBottom: theme.spacing(2)
  }
}));

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTypography' });
    const {
      align = 'inherit',
      children,
      className,
      color = 'inherit',
      component,
      gutterBottom = false,
      lineClamp,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      ...rest
    } = props;

    const _component =
      component || (paragraph ? 'p' : defaultVariantMapping[variant]);

    const styleProps = {
      ...props,
      align,
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
        as={_component as React.ElementType}
        className={css(className, classes.root)}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
