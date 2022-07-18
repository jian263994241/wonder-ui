import * as React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IndicatorLine = (props: { opacity?: string; transform?: string }) => (
  <line x1="60" x2="60" y1="7" y2="27" {...props} />
);

const Indicator = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      block
      spin
      viewBox="0 0 120 120"
      titleAccess="indicator"
      role="Indicator"
      stroke="currentColor"
      strokeWidth="11"
      strokeLinecap="round"
      {...props}
      ref={ref}
    >
      <IndicatorLine opacity=".27" />
      <IndicatorLine opacity=".27" transform="rotate(30 60,60)" />
      <IndicatorLine opacity=".27" transform="rotate(60 60,60)" />
      <IndicatorLine opacity=".27" transform="rotate(90 60,60)" />
      <IndicatorLine opacity=".27" transform="rotate(120 60,60)" />
      <IndicatorLine opacity=".27" transform="rotate(150 60,60)" />
      <IndicatorLine opacity=".37" transform="rotate(180 60,60)" />
      <IndicatorLine opacity=".46" transform="rotate(210 60,60)" />
      <IndicatorLine opacity=".56" transform="rotate(240 60,60)" />
      <IndicatorLine opacity=".66" transform="rotate(270 60,60)" />
      <IndicatorLine opacity=".75" transform="rotate(300 60,60)" />
      <IndicatorLine opacity=".85" transform="rotate(330 60,60)" />
    </SvgIcon>
  )
);

export default React.memo(Indicator);
