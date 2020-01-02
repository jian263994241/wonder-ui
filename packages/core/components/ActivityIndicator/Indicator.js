import React from 'react';
import SvgIcon from '../SvgIcon';
import useId from '@wonder-ui/utils/useId';
import capitalize from '@wonder-ui/utils/capitalize';
import withStyles from '../withStyles';
import clsx from 'clsx';

const Indicator = React.forwardRef(function Indicator(props, ref) {
  const {
    classes,
    className,
    color = '#6c6c6c',
    id: inputId,
    size = 'small',
    ...rest
  } = props;

  const id = inputId || useId();

  return (
    <SvgIcon
      className={clsx(classes.root, classes['size'+ capitalize(size)], className )}
      viewBox="0 0 120 120"
      ref={ref}
      {...rest}
    >
      <defs>
        <line id={id} x1='60' x2='60' y1='7' y2='27' stroke={color} strokeWidth='11' strokeLinecap='round'/>
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

export default withStyles({
  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  root: {
    animation: '$spin 1s steps(12, end) infinite',
    verticalAlign: 'middle'
  },
  sizeSmall: {
    width: 22,
    height: 22,
  },
  sizeMedium: {
    width: 34,
    height: 34,
  },
  sizeLarge: {
    width: 46,
    height: 46,
  }
})(Indicator);