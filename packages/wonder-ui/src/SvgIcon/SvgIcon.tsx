import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  svgIconClasses,
  SvgIconClassesType,
  svgIconCssVars
} from './SvgIconClasses';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';

export interface SvgIconProps extends React.SVGAttributes<SVGSVGElement> {
  classes?: Partial<SvgIconClassesType>;
  className?: string;
  style?: React.CSSProperties;
  titleAccess?: string;
  /**
   * 块状显示
   */
  block?: boolean;
  /**
   * 旋转动画
   * @default false
   */
  spin?: boolean;
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
  fill: svgIconCssVars.value('color', 'currentColor'),
  width: svgIconCssVars.value('width'),
  height: svgIconCssVars.value('height'),
  ...svgIconCssVars.style({
    width: svgIconCssVars.value('size', '1em'),
    height: svgIconCssVars.value('size', '1em')
  }),

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
    width,
    height,
    style,
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
      style={{
        ...svgIconCssVars.style({ width, height }),
        ...style
      }}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

export default SvgIcon;
