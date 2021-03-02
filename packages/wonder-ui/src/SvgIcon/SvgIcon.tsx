import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import { keyframes } from '@wonder-ui/styled';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps, StyleProps } from '../styles/types';

export interface SvgIconStyleProps {
  size: 'inherit' | 'large' | 'medium' | 'small';
  spin?: boolean;
}

const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const SvgIconRoot = styled('svg', { name: 'WuiSvgIcon', slot: 'Root' })<
  StyleProps<SvgIconStyleProps>
>(({ theme, styleProps }) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  fill: 'currentColor',
  flexShrink: 0,
  // verticalAlign: 'middle',
  verticalAlign: theme.typography.pxToRem(-2),
  transition: theme.transitions.create('fill', {
    duration: theme.transitions.duration.shorter
  }),
  ...(styleProps.spin && {
    animation: `${spin} 1s steps(12, end) infinite`
  }),
  fontSize: {
    inherit: 'inherit',
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(35)
  }[styleProps.size]
}));

export interface SvgIconProps extends StyledComponentProps<typeof SvgIconRoot> {
  titleAccess?: string;
}

const SvgIcon: React.FC<SvgIconProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSvgIcon' });
  const {
    children,
    className,
    component = 'svg',
    size = 'inherit',
    spin,
    titleAccess,
    ...rest
  } = props;

  const styleProps = {
    size,
    spin
  };

  const classes = useClasses({ styleProps, className, name: 'WuiSvgIcon' });

  return (
    <SvgIconRoot
      className={classes.root}
      styleProps={styleProps}
      as={component}
      focusable="false"
      viewBox="0 0 16 16"
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={ref}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

SvgIcon.displayName = 'WuiSvgIcon';

export default SvgIcon;
