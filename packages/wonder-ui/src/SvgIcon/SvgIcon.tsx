import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import styled, { keyframes } from '../styles/styled';
import type { StyleTypeProps } from '../styles/types';

interface SvgIconStyleProps {
  size: 'inherit' | 'large' | 'medium' | 'small';
  spin?: boolean;
}

const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const SvgIconRoot = styled.svg<SvgIconStyleProps>(
  ({ theme, ...styleProps }) => ({
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
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
  })
);

export interface SvgIconProps extends StyleTypeProps<typeof SvgIconRoot> {
  titleAccess?: string;
}

const SvgIcon: React.FC<SvgIconProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSvgIcon' });
  const { titleAccess, children, component = 'svg', ...rest } = props;

  return (
    <SvgIconRoot
      as={component}
      size="inherit"
      focusable="false"
      viewBox="0 0 24 24"
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
