import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import { keyframes } from '@wonder-ui/styled';
import type { ClassNameMap, InProps, PickStyleProps } from '../styles/types';

const stripesKeyframes = keyframes`
  0% {
    background-position-x: 1rem;
  }
`;

export interface LinearProgressProps {
  /**
   * @description Children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * css api
   */
  classes?: Partial<ClassNameMap<'root' | 'bar'>>;
  /**
   * @description 颜色
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * @description 条纹
   * @default false
   */
  striped?: boolean;
  /**
   * @description 动画
   * @default false
   */
  animated?: boolean;
  /**
   * 值 0-100
   */
  value?: number;
}

const LinearProgressRoot = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Root'
})<PickStyleProps<LinearProgressProps, 'animated' | 'color' | 'striped'>>(
  () => ({
    display: 'flex',
    height: '1rem',
    overflow: 'hidden',
    fontSize: '.75rem',
    backgroundColor: '#e9ecef',
    borderRadius: '.25rem'
  })
);

const LinearProgressBar = styled('span', {
  name: 'WuiLinearProgress',
  slot: 'Bar'
})<PickStyleProps<LinearProgressProps, 'animated' | 'color' | 'striped'>>(
  ({ theme, styleProps }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    transition: theme.transitions.create('width', { easing: 'ease' }),

    ...(styleProps.striped && {
      backgroundImage: `linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)`,
      backgroundSize: '1rem 1rem',
      ...(styleProps.animated && {
        animation: `1s linear infinite ${stripesKeyframes}`
      })
    }),

    '@media (prefers-reduced-motion: reduce)': {
      '&': {
        transition: 'none'
      }
    }
  })
);

export default function LinearProgress<P extends InProps<LinearProgressProps>>(
  inProps: P
) {
  const props = useThemeProps({ props: inProps, name: 'WuiLinearProgress' });
  const {
    animated = false,
    className,
    color = 'primary',
    striped = false,
    value = 0,
    children,
    rootRef,
    ...rest
  } = props;

  const styleProps = { animated, color, striped };

  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiLinearProgress'
  });

  return (
    <LinearProgressRoot
      role="progressbar"
      className={classes.root}
      styleProps={styleProps}
      ref={rootRef}
      {...rest}
    >
      <LinearProgressBar
        style={{ width: `${value}%` }}
        className={classes.bar}
        styleProps={styleProps}
      >
        {children}
      </LinearProgressBar>
    </LinearProgressRoot>
  );
}
