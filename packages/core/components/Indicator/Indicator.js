import React from 'react';
import SvgIcon from '../SvgIcon';
import useId from '@wonder-ui/utils/useId';

const Indicator = React.forwardRef(function Indicator(props, ref) {
  const id = useId();
  return (
    <SvgIcon
      viewBox="0 0 120 120"
      ref={ref}
      {...props}
    >
      <defs>
        <line id={id} x1='60' x2='60' y1='7' y2='27' strokeWidth='11' strokeLinecap='round'/>
      </defs>
      <g>
        <use xlinkHref={`#${id}`} opacity='.27'/>
        <use xlinkHref={`#${id}`} opacity='.27' transform='rotate(30 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.27' transform='rotate(60 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.27' transform='rotate(90 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.27' transform='rotate(120 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.27' transform='rotate(150 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.37' transform='rotate(180 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.46' transform='rotate(210 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.56' transform='rotate(240 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.66' transform='rotate(270 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.75' transform='rotate(300 60,60)'/>
        <use xlinkHref={`#${id}`} opacity='.85' transform='rotate(330 60,60)'/>
      </g>
    </SvgIcon>
  )
});

Indicator.displayName = 'Indicator';

export default Indicator;