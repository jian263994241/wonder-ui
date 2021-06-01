import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, css, generateUtilityStyles } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';
import { linearProgressClasses, useClasses } from './LinearProgressClasses';

const progressActiveKeyframes = keyframes`
  0%{width:0;opacity:.1}
  20%{width:0;opacity:.5}
  to{width:100%;opacity:0}
`;

export interface LinearProgressProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
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
  /**
   * 值 0-100
   */
  value?: number;
}

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

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
  width: '100%',
  height: 8,
  overflow: 'hidden',
  backgroundColor: '#e9ecef',
  borderRadius: '.25rem'
});

const LinearProgressBar = styled('span', {
  name: 'WuiLinearProgress',
  slot: 'Bar'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  color: '#fff',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.ease
  }),
  position: 'relative',
  borderRadius: '.25rem',
  ...generateUtilityStyles(
    colors,
    (styles, color: NonNullable<LinearProgressProps['color']>) => {
      const colorName = 'color' + capitalize(color);
      //@ts-expect-error
      styles[`&.${linearProgressClasses[colorName]}`] = {
        backgroundColor: theme.palette[color].main
      };
    }
  ),
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

const LinearProgress = React.forwardRef<HTMLElement, LinearProgressProps>(
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

    const styleProps = { ...props, animated, color };

    const classes = useClasses(styleProps);

    return (
      <LinearProgressRoot
        role="progressbar"
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        <LinearProgressInner className={classes.inner}>
          <LinearProgressBar
            className={classes.bar}
            style={{ width: `${value}%` }}
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
