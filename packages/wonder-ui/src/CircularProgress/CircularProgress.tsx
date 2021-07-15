import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { circularProgressClasses, useClasses } from './CircularProgressClasses';
import { keyframes } from '@wonder-ui/styled';
import { generateUtilityStyles, capitalize } from '@wonder-ui/utils';

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

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Css api
   */
  classes?: Partial<typeof circularProgressClasses>;
  /**
   * Color
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
  /** Root element */
  component?: React.ElementType;
  /**
   * 类型
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

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
];

const CircularProgressRoot = styled('div', {
  name: 'WuiCircularProgress',
  slot: 'Root'
})(({ theme }) => ({
  position: 'relative',
  /* Styles applied to the root element. */
  display: 'inline-block',
  fontSize: 0,
  [`&.${circularProgressClasses.determinate}`]: {
    transition: theme.transitions.create('transform')
  },
  [`&.${circularProgressClasses.indeterminate}`]: {
    animation: `${circularRotateKeyframe} 1.4s linear infinite`
  },
  ...generateUtilityStyles(colors, (styles, color) => {
    //@ts-expect-error
    const cssName = circularProgressClasses[`color${capitalize(color)}`];
    styles[`&.${cssName}`] = {
      //@ts-expect-error
      color: theme.palette[color].main
    };
  })
}));

const CircularProgressSvg = styled('svg', {
  name: 'WuiCircularProgress',
  slot: 'Svg'
})({
  display: 'block',
  pointerEvents: 'none'
});

const CircularProgressCircle = styled('circle', {
  name: 'WuiCircularProgress',
  slot: 'Circle'
})(({ theme }) => ({
  /* Styles applied to the `circle` svg path. */
  stroke: 'currentColor',
  // Use butt to follow the specification, by chance, it's already the default CSS value.
  // strokeLinecap: 'butt',
  /* Styles applied to the `circle` svg path if `variant="determinate"`. */
  [`.${circularProgressClasses.determinate} &`]: {
    transition: theme.transitions.create('stroke-dashoffset')
  },
  [`.${circularProgressClasses.indeterminate} &`]: {
    animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
    /* Some default value that looks fine waiting for the animation to kicks in. */
    strokeDasharray: '80px, 200px',
    /* Add the unit to fix a Edge 16 and below bug. */
    strokeDashoffset: 0
  }
}));

const CircularProgressLabel = styled('div', {
  name: 'WuiCircularProgress',
  slot: 'Label'
})(({ theme }) => ({
  ...theme.typography.body2,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(90deg) scale(0.25)',
  userSelect: 'none'
}));

const CircularProgress = React.forwardRef<HTMLElement, CircularProgressProps>(
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

    const styleProps = { ...props, color, variant };

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

    const classes = useClasses(styleProps);

    return (
      <CircularProgressRoot
        as={component}
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
        className={classes.root}
        style={{ width: size, height: size, ...rootStyle, ...style }}
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
            cx={SIZE}
            cy={SIZE}
            r={(SIZE - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
          />
        </CircularProgressSvg>
        {variant === 'determinate' && label && (
          <CircularProgressLabel
            className={classes.label}
            style={{ fontSize: size }}
          >
            {label}
          </CircularProgressLabel>
        )}
      </CircularProgressRoot>
    );
  }
);

export default CircularProgress;
