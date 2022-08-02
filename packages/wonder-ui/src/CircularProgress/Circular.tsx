import * as React from 'react';
import styled from '../styles/styled';
import SvgIcon, { svgIconCssVars } from '../SvgIcon';
import { keyframes } from '@wonder-ui/styled';

export interface CircularProps {
  className?: string;
  style?: React.CSSProperties;
  thickness?: number;
  variant?: 'determinate' | 'indeterminate';
  value?: number;
  width?: string | number;
  height?: string | number;
}

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

const CircularRoot = styled(SvgIcon)<{ styleProps: CircularProps }>(
  ({ theme, styleProps }) => ({
    fill: 'none',
    ...(styleProps.variant === 'determinate'
      ? {
          transition: theme.transitions.create('transform')
        }
      : {
          animation: `${circularRotateKeyframe} 1.4s linear infinite`
        })
  })
);

const CircularCircle = styled('circle')<{ styleProps: CircularProps }>(
  ({ theme, styleProps }) => ({
    stroke: svgIconCssVars.value('color', 'currentColor'),
    // Use butt to follow the specification, by chance, it's already the default CSS value.
    // strokeLinecap: 'butt',
    /* Styles applied to the `circle` svg path if `variant="determinate"`. */
    ...(styleProps.variant === 'determinate'
      ? {
          transition: theme.transitions.create('stroke-dashoffset')
        }
      : {
          animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
          /* Some default value that looks fine waiting for the animation to kicks in. */
          strokeDasharray: '80px, 200px',
          /* Add the unit to fix a Edge 16 and below bug. */
          strokeDashoffset: 0
        })
  })
);

const Circular = React.forwardRef<SVGSVGElement, CircularProps>(
  (props, ref) => {
    const {
      className,
      style,
      variant = 'indeterminate',
      value = 0,
      thickness = 3.6,
      width = '1em',
      height = '1em'
    } = props;
    const styleProps = { ...props };
    const SIZE = 44;

    const circleStyle = {} as React.CSSProperties;
    const rootStyle = {} as React.CSSProperties;
    const rootProps = {} as any;

    if (variant === 'determinate') {
      rootProps['aria-valuenow'] = Math.round(value);
      rootStyle.transform = 'rotate(-90deg)';

      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
    }

    return (
      <CircularRoot
        block
        className={className}
        ref={ref}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        width={width}
        height={height}
        style={{ ...style, ...rootStyle }}
        styleProps={styleProps}
      >
        <CircularCircle
          styleProps={styleProps}
          style={circleStyle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </CircularRoot>
    );
  }
);

export default Circular;
