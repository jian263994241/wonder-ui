import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import { keyframes } from '@wonder-ui/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, PickStyleProps, ClassNameMap } from '../styles/types';

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

export interface CircularProgressProps extends BaseProps {
  /**
   * @description css api
   */
  classes?: Partial<ClassNameMap<'root' | 'svg' | 'circle' | 'label'>>;
  /**
   * @description color
   * @default primary
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * @description 类型
   * @default indeterminate
   */
  variant?: 'determinate' | 'indeterminate';
  /** 尺寸 */
  size?: number;
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

const CircularProgressRoot = styled('span', {
  name: 'WuiCircularProgress',
  slot: 'Root'
})<PickStyleProps<CircularProgressProps, 'color' | 'variant' | 'size'>>(
  ({ theme, styleProps }) => ({
    position: 'relative',
    /* Styles applied to the root element. */
    display: 'inline-block',

    fontSize: 0,
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
})<PickStyleProps<CircularProgressProps, 'variant'>>(
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
})<PickStyleProps<CircularProgressProps, 'size'>>(({ theme, styleProps }) => ({
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

const CircularProgress: React.FC<CircularProgressProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'WuiCircularProgress'
    });
    const {
      color = 'primary',
      className,
      component,
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
        as={component}
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
