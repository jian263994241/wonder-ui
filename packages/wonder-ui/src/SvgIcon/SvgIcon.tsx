import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import { keyframes } from '@wonder-ui/styled';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { InProps, PickStyleProps } from '../styles/types';

export interface SvgIconProps {
  /**
   * @description size
   * @default medium
   */
  size: 'inherit' | 'large' | 'medium' | 'small';
  /**
   * @description spin animate
   * @default false
   */
  spin?: boolean;
  /**
   * @description viewBox
   * @default '0 0 16 16'
   */
  viewBox?: string;
  /**
   * @description title
   */
  titleAccess?: string;
}

const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const SvgIconRoot = styled('svg', { name: 'WuiSvgIcon', slot: 'Root' })<
  PickStyleProps<SvgIconProps, 'size' | 'spin'>
>(({ theme, styleProps }) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  fill: 'currentColor',
  flexShrink: 0,
  verticalAlign: -1,
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

export default function SvgIcon<T = React.SVGAttributes<SVGElement>>(
  inProps: InProps<T, SvgIconProps>
) {
  const props = useThemeProps({ name: 'WuiSvgIcon', props: inProps });
  const {
    children,
    className,
    component = 'svg',
    size = 'medium',
    spin = false,
    viewBox = '0 0 16 16',
    titleAccess,
    rootRef,
    ...rest
  } = props;

  const styleProps = { size, spin };

  const classes = useClasses({ ...props, styleProps, name: 'WuiSvgIcon' });

  return (
    <SvgIconRoot
      className={classes.root}
      styleProps={styleProps}
      as={component}
      focusable="false"
      viewBox={viewBox}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={rootRef}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
}
