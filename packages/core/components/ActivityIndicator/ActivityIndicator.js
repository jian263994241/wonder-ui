import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Indicator from './Indicator';
import withStyles from '../withStyles';

/**
 * @visibleName Indicator 活动指示器
 */
const ActivityIndicator = React.forwardRef(function ActivityIndicator(props, ref) {
  const { classes, className, text, vertical, ...rest } = props;
  return (
    <div className={clsx(classes.root, className)} ref={ref}>
      <Indicator {...rest}/>
      { text && ( <div className={clsx(classes.text, {[classes.vertical]: vertical})}>{text}</div>) }
    </div>
  )
});

ActivityIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
};

ActivityIndicator.displayName = 'ActivityIndicator';

export default withStyles({
  root: {
    textAlign: 'center',
    lineHeight: 1
  },
  text: {
    color: 'rgba(0,0,0,0.38)',
    marginLeft: 5,
    display: 'inline-block'
  },
  vertical: {
    display: 'block',
    marginLeft: 0
  }
})(ActivityIndicator);