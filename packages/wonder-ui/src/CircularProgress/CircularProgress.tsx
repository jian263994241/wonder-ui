import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import { keyframes } from '@wonder-ui/styled';
import type { StyleProps, ClassNameMap } from '../styles/types';

const SIZE = 44;

const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

export interface CircularProgressStyleProps {
  /**
   * @description 颜色
   * @default primary
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';
  /**
   * @description 类型
   * @default indeterminate
   */
  variant?: 'determinate' | 'indeterminate';
  /** 尺寸 */
  size?: number;
}

const CircularProgressRoot = styled('span', {
  name: 'WuiCircularProgress',
  slot: 'Root'
})<StyleProps<CircularProgressStyleProps>>(
  ({ theme, styleProps }) => ({
    position: 'relative',
    /* Styles applied to the root element. */
    display: 'inline-flex',
    /* Styles applied to the root element if `variant="determinate"`. */
    ...(styleProps.variant === 'determinate' && {
      transition: theme.transitions.create('transform')
    }),
    /* Styles applied to the root element unless `color="inherit"`. */
    ...(styleProps.color !== 'inherit' && {
      color: theme.palette[styleProps.color || 'primary'].main
    })
  }),
  ({ styleProps }) => ({
    ...(styleProps.variant === 'indeterminate' && {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    })
  })
);

const CircularProgressSvg = styled('svg', {
  name: 'WuiCircularProgress',
  slot: 'Svg'
})(() => ({
  display: 'block'
}));

const CircularProgressCircle = styled('circle', {
  name: 'WuiCircularProgress',
  slot: 'Circle'
})<StyleProps<CircularProgressStyleProps>>(
  ({ theme, styleProps }) => ({
    /* Styles applied to the `circle` svg path. */
    stroke: 'currentColor',
    // Use butt to follow the specification, by chance, it's already the default CSS value.
    // strokeLinecap: 'butt',
    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    ...(styleProps.variant === 'determinate' && {
      transition: theme.transitions.create('stroke-dashoffset')
    })
  }),
  ({ styleProps }) => ({
    ...(styleProps.variant === 'indeterminate' && {
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
      /* Some default value that looks fine waiting for the animation to kicks in. */
      strokeDasharray: '80px, 200px',
      /* Add the unit to fix a Edge 16 and below bug. */
      strokeDashoffset: 0
    })
  })
);

const CircularProgressLabel = styled('div', {
  name: 'WuiCircularProgress',
  slot: 'Label'
})<StyleProps<CircularProgressStyleProps>>(({ theme, styleProps }) => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(90deg)',
  ...theme.typography.caption,
  ...(styleProps.size && {
    fontSize: theme.typography.pxToRem(styleProps.size),
    transform: 'rotate(90deg) scale(0.25)'
  })
}));

export interface CircularProgressProps extends CircularProgressStyleProps {
  /**
   * @description css api
   */
  classes?: Partial<ClassNameMap<'root' | 'svg' | 'circle' | 'label'>>;

  /** 粗细  */
  thickness?: number;
  /**
   * 值 0-100
   */
  value?: number;
  /**
   * 标签
   */
  label?: React.ReactNode;
}

const CircularProgress = createFCWithTheme<CircularProgressProps>(
  'WuiCircularProgress',
  (props, ref) => {
    const {
      color = 'primary',
      className,
      thickness = 3.6,
      value = 0,
      variant = 'indeterminate',
      size = 40,
      style,
      label,
      ...rest
    } = props;

    const styleProps = { color, variant, size };

    const circleStyle: any = {};
    const rootStyle: any = {};
    const rootProps: any = {};

    if (variant === 'determinate') {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps['aria-valuenow'] = Math.round(value);
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    }

    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiCircularProgress'
    });

    return (
      <CircularProgressRoot
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
        className={classes.root}
        style={{ width: size, height: size, ...rootStyle, ...style }}
        styleProps={styleProps}
        ref={ref}
        {...rootProps}
        {...rest}
      >
        <CircularProgressSvg
          className={classes.svg}
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        >
          <CircularProgressCircle
            className={classes.circle}
            style={circleStyle}
            styleProps={styleProps}
            cx={SIZE}
            cy={SIZE}
            r={(SIZE - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
          />
        </CircularProgressSvg>
        {variant === 'determinate' && label && (
          <CircularProgressLabel
            styleProps={styleProps}
            className={classes.label}
          >
            {label}
          </CircularProgressLabel>
        )}
      </CircularProgressRoot>
    );
  }
);

export default CircularProgress;
