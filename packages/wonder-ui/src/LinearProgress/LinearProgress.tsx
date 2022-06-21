import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, forwardRef } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';
import { alpha } from '../styles/colorManipulator';
import { linearProgressClasses, useClasses } from './LinearProgressClasses';

const progressActiveKeyframes = keyframes`
  0%{width:0;opacity:.1}
  20%{width:0;opacity:.5}
  to{width:100%;opacity:0}
`;

const indeterminateKeyframes = keyframes`
0% { left: -30%; }
100% { left: 100%; }
`;

export interface LinearProgressProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 动画
   * @default false
   */
  animated?: boolean;
  /**
   * css api
   */
  classes?: Partial<typeof linearProgressClasses>;
  /**
   * 颜色
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

  component?: React.ElementType;
  /**
   * 值 0-100
   */
  value?: number;
  /**
   * 类型
   */
  variant?: 'determinate' | 'indeterminate';
}

const LinearProgressRoot = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center'
});

const LinearProgressInfo = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Info'
})({
  display: 'block',
  width: '2em',
  marginLeft: 8,
  color: 'rgba(0,0,0,.85)',
  fontSize: '1em',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  textAlign: 'left',
  verticalAlign: 'middle',
  wordBreak: 'normal',
  '&:empty': {
    display: 'none'
  }
});

const LinearProgressInner = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Inner'
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 3,
  overflow: 'hidden',
  backgroundColor: '#e9ecef',
  borderRadius: '.25rem'
});

const LinearProgressBar = styled('span', {
  name: 'WuiLinearProgress',
  slot: 'Bar'
})<{ styleProps: LinearProgressProps }>(({ theme, styleProps }) => ({
  alignSelf: 'stretch',
  width: 0,
  overflow: 'hidden',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.ease
  }),
  position: 'relative',
  borderRadius: '.25rem',
  backgroundColor: theme.palette[styleProps.color!]?.main,
  ...(styleProps.variant === 'indeterminate' && {
    minWidth: '33%',
    background: `linear-gradient(to right, rgb(237, 235, 233) 0%, ${
      theme.palette[styleProps.color!]?.main
    } 50%, ${alpha(
      theme.palette[styleProps.color!]?.contrastText,
      0.18
    )} 100%)`,
    animation: `3s ease 0s infinite normal none running ${indeterminateKeyframes}`
  }),
  [`&.${linearProgressClasses.animated}:before`]: {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#fff',
    borderRadius: '.25rem',
    opacity: 0,
    animation: `${progressActiveKeyframes} 2.4s cubic-bezier(.23,1,.32,1) infinite`
  },
  '@media (prefers-reduced-motion: reduce)': {
    '&': {
      transition: 'none'
    }
  }
}));

const LinearProgress = forwardRef<HTMLElement, LinearProgressProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiLinearProgress' });
    const {
      animated = false,
      className,
      color = 'primary',
      component,
      value = 0,
      variant = 'indeterminate',
      children,
      ...rest
    } = props;

    const styleProps = { ...props, animated, color, variant };

    const classes = useClasses(styleProps);

    return (
      <LinearProgressRoot
        as={component}
        role="progressbar"
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        <LinearProgressInner className={classes.inner}>
          <LinearProgressBar
            className={classes.bar}
            styleProps={styleProps}
            style={
              variant === 'determinate' ? { width: `${value}%` } : undefined
            }
          />
        </LinearProgressInner>
        {children && (
          <LinearProgressInfo className={classes.info}>
            {children}
          </LinearProgressInfo>
        )}
      </LinearProgressRoot>
    );
  }
);

export default LinearProgress;
