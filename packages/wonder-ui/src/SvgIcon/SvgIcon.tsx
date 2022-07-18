import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';
import { svgIconClasses } from './SvgIconClasses';

const COMPONENT_NAME = 'WuiSvgIcon';

export interface SvgIconProps extends React.SVGAttributes<SVGSVGElement> {
  classes?: Partial<typeof svgIconClasses>;
  titleAccess?: string;
  /**
   * 块状显示
   */
  block?: boolean;
  /**
   * Root className
   */
  className?: string;
  /**
   * 旋转动画
   * @default false
   */
  spin?: boolean;
  /**
   * Root style
   */
  style?: React.CSSProperties;
  /**
   * viewBox
   * @default `0 0 16 16`
   */
  viewBox?: string;
}

const useClasses = (styleProps: SvgIconProps) => {
  const { classes, spin, block } = styleProps;

  const slots = {
    root: ['root', spin && 'spin', block && 'block']
  };

  return composeClasses('WuiSvgIcon', slots, classes);
};

const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const SvgIconRoot = styled('svg', { name: COMPONENT_NAME, slot: 'Root' })({
  fill: 'currentColor',

  [`&.${svgIconClasses.block}`]: {
    display: 'block'
  },

  [`&.${svgIconClasses.spin}`]: {
    animation: `${spin} 1s steps(12, end) infinite`
  }
});

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>((inProps, ref) => {
  const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
  const {
    children,
    className,
    titleAccess,
    spin = false,
    viewBox = '0 0 16 16',
    block = false,
    ...rest
  } = props;

  const styleProps = { ...props, spin, block };

  const classes = useClasses(styleProps);

  return (
    <SvgIconRoot
      aria-hidden={titleAccess ? undefined : true}
      className={css(classes.root, className)}
      focusable="false"
      ref={ref}
      role={titleAccess ? 'img' : undefined}
      viewBox={viewBox}
      width="1em"
      height="1em"
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

export default SvgIcon;
