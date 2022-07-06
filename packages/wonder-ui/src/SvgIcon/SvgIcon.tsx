import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import { keyframes } from '@wonder-ui/styled';
import styled from '../styles/styled';
import { css, forwardRef } from '@wonder-ui/utils';
import { svgIconClasses, useClasses } from './SvgIconClasses';

export interface SvgIconProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<typeof svgIconClasses>;
  /**
   * 颜色
   * @default inherit
   */
  color?: 'action' | 'disabled' | 'error' | 'inherit' | 'primary' | 'secondary';
  /**
   * 节点
   * @default svg
   */
  component?: React.ElementType;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  /**
   * 预置尺寸
   * @default inherit
   */
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  htmlColor?: string;
  /**
   * 旋转动画
   * @default false
   */
  spin?: boolean;
  /**
   * title
   */
  titleAccess?: string;
  /**
   * viewBox
   * @default `0 0 16 16`
   */
  viewBox?: string;
}

const spin = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const SvgIconRoot = styled('svg', { name: 'WuiSvgIcon', slot: 'Root' })(
  ({ theme }) => ({
    userSelect: 'none',
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: 'inherit',
    verticalAlign: '-0.125em',
    WebkitTapHighlightColor: 'transparent',
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    }),
    color: 'currentColor',
    [`&.${svgIconClasses.colorPrimary}`]: {
      color: theme.palette.primary.main
    },
    [`&.${svgIconClasses.colorSecondary}`]: {
      color: theme.palette.secondary.main
    },
    [`&.${svgIconClasses.colorAction}`]: {
      color: theme.palette.action.active
    },
    [`&.${svgIconClasses.colorError}`]: {
      color: theme.palette.error.main
    },
    [`&.${svgIconClasses.colorDisabled}`]: {
      color: theme.palette.action.disabled
    },
    [`&.${svgIconClasses.fontSizeSmall}`]: {
      fontSize: theme.typography.pxToRem(16)
    },
    [`&.${svgIconClasses.fontSizeMedium}`]: {
      fontSize: theme.typography.pxToRem(24)
    },
    [`&.${svgIconClasses.fontSizeLarge}`]: {
      fontSize: theme.typography.pxToRem(35)
    },
    [`&.${svgIconClasses.spin}`]: {
      animation: `${spin} 1s steps(12, end) infinite`
    }
  })
);

const SvgIcon = forwardRef<Element, SvgIconProps>((inProps, ref) => {
  const props = useThemeProps({ name: 'WuiSvgIcon', props: inProps });
  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'inherit',
    htmlColor,
    spin = false,
    titleAccess,
    viewBox = '0 0 16 16',
    ...rest
  } = props;

  const styleProps = { ...props, color, fontSize, spin };

  const classes = useClasses(styleProps);

  return (
    <SvgIconRoot
      aria-hidden={titleAccess ? undefined : true}
      as={component}
      className={css(classes.root, className)}
      color={htmlColor}
      focusable="false"
      ref={ref as React.Ref<SVGSVGElement>}
      role={titleAccess ? 'img' : undefined}
      viewBox={viewBox}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

export default SvgIcon;
