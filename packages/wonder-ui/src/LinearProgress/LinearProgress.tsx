import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import { keyframes } from '@wonder-ui/styled';
import type { StyleProps, ClassNameMap } from '../styles/types';

const stripesKeyframes = keyframes`
  0% {
    background-position-x: 1rem;
  }
`;

export interface LinearProgressStyleProps {
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
}

const LinearProgressRoot = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Root'
})<StyleProps<LinearProgressStyleProps>>(() => ({
  display: 'flex',
  height: '1rem',
  overflow: 'hidden',
  fontSize: '.75rem',
  backgroundColor: '#e9ecef',
  borderRadius: '.25rem'
}));

const LinearProgressBar = styled('span', {
  name: 'WuiLinearProgress',
  slot: 'Bar'
})<StyleProps<LinearProgressStyleProps>>(({ theme, styleProps }) => ({
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
}));

export interface LinearProgressProps extends LinearProgressStyleProps {
  /**
   * css api
   */
  classes?: Partial<ClassNameMap<'root' | 'bar'>>;
  /**
   * 值 0-100
   */
  value?: number;
}

const LinearProgress = createFCWithTheme<LinearProgressProps>(
  'WuiLinearProgress',
  (props, ref) => {
    const {
      animated = false,
      className,
      color = 'primary',
      striped = false,
      value = 0,
      children,
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
        ref={ref}
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
);

export default LinearProgress;