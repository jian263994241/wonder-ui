import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import { keyframes } from '@wonder-ui/styled';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';

const progressActiveKeyframes = keyframes`
  0%{width:0;opacity:.1}
  20%{width:0;opacity:.5}
  to{width:100%;opacity:0}
`;

export interface LinearProgressProps extends BaseProps {
  /**
   * css api
   */
  classes?: ClassNameMap<'root' | 'body' | 'bar' | 'info'>;
  /**
   * @description 颜色
   * @default primary
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'danger'
    | 'warning'
    | 'info';
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
})<PickStyleProps<LinearProgressProps, 'animated' | 'color'>>(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const LinearProgressInfo = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Info'
})(() => ({
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
}));

const LinearProgressBody = styled('div', {
  name: 'WuiLinearProgress',
  slot: 'Body'
})(() => ({
  display: 'flex',
  width: '100%',
  height: 8,
  overflow: 'hidden',
  backgroundColor: '#e9ecef',
  borderRadius: '.25rem'
}));

const LinearProgressBar = styled('span', {
  name: 'WuiLinearProgress',
  slot: 'Bar'
})<PickStyleProps<LinearProgressProps, 'animated' | 'color'>>(
  ({ theme, styleProps }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.ease
    }),
    position: 'relative',
    borderRadius: '.25rem',
    ...(styleProps.animated && {
      '&:before': {
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
      }
    }),

    '@media (prefers-reduced-motion: reduce)': {
      '&': {
        transition: 'none'
      }
    }
  })
);

const LinearProgress: React.FC<LinearProgressProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiLinearProgress' });
    const {
      animated = false,
      className,
      color = 'primary',
      value = 0,
      children,
      ...rest
    } = props;

    const styleProps = { animated, color };

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
        <LinearProgressBody className={classes.body}>
          <LinearProgressBar
            style={{ width: `${value}%` }}
            className={classes.bar}
            styleProps={styleProps}
          ></LinearProgressBar>
        </LinearProgressBody>
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
