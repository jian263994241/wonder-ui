import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import { keyframes } from '@wonder-ui/styled';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface SvgIconProps extends BaseProps {
  /**
   * @description size
   * @default medium
   */
  size?: 'inherit' | 'large' | 'medium' | 'small';
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

const SvgIcon: React.FC<SvgIconProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ name: 'WuiSvgIcon', props: inProps });
  const {
    children,
    className,
    component = 'svg',
    rootRef,
    size = 'small',
    spin = false,
    titleAccess,
    viewBox = '0 0 16 16',
    ...rest
  } = props;

  const styleProps = { size, spin };

  const classes = useClasses({ ...props, styleProps, name: 'WuiSvgIcon' });

  return (
    <SvgIconRoot
      aria-hidden={titleAccess ? undefined : true}
      as={component}
      className={classes.root}
      focusable="false"
      ref={ref}
      role={titleAccess ? 'img' : undefined}
      styleProps={styleProps}
      viewBox={viewBox}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

export default SvgIcon;
