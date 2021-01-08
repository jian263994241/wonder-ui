import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import chainPropTypes from '@wonder-ui/utils/chainPropTypes';
import clsx from 'clsx';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

const SIZE = 44;

function getRelativeValue(value, min, max) {
  return (Math.min(Math.max(min, value), max) - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1);
  // https://gist.github.com/gre/1650294
  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

/**
 *
 * @visibleName CircularProgress
 */
const CircularProgress = React.forwardRef(function CircularProgress(
  props,
  ref,
) {
  const {
    classes,
    className,
    color = 'primary',
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    ...other
  } = props;

  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = `${(
        easeIn((100 - value) / 100) * circumference
      ).toFixed(3)}px`;
      rootStyle.transform = `rotate(${(easeOut(value / 70) * 270).toFixed(
        3,
      )}deg)`;
    }
  }

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes.indeterminate]: variant === 'indeterminate',
          [classes.static]: variant === 'static',
        },
        className,
      )}
      style={{ width: size, height: size, ...rootStyle, ...style }}
      ref={ref}
      role="progressbar"
      {...rootProps}
      {...other}
    >
      <svg
        className={classes.svg}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <circle
          className={clsx(classes.circle, {
            [classes.circleIndeterminate]: variant === 'indeterminate',
            [classes.circleStatic]: variant === 'static',
            [classes.circleDisableShrink]: disableShrink,
          })}
          style={circleStyle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </svg>
    </div>
  );
});

CircularProgress.displayName = 'CircularProgress';

CircularProgress.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: chainPropTypes(PropTypes.bool, (props) => {
    if (
      props.disableShrink &&
      props.variant &&
      props.variant !== 'indeterminate'
    ) {
      return new Error(
        'Material-UI: you have provided the `disableShrink` prop ' +
          'with a variant other than `indeterminate`. This will have no effect.',
      );
    }

    return null;
  }),
  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The thickness of the circle.
   */
  thickness: PropTypes.number,
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static']),
};

export default withStyles(styles)(CircularProgress);
