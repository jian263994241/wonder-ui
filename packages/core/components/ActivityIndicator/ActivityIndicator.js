import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Indicator from '../icons/Indicator';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 长列表加载活动指示器
 * @visibleName ActivityIndicator 活动指示器
 */
const ActivityIndicator = React.forwardRef(function ActivityIndicator(props, ref) {
  const { classes, className, text, vertical, ...rest } = props;
  return (
    <div className={clsx(classes.root, {[classes.vertical]: vertical}, className)} ref={ref}>
      <Indicator spin {...rest}/>
      { text && ( <div className={classes.text}>{text}</div>) }
    </div>
  )
});

ActivityIndicator.propTypes = {
  /**
   * 指示器大小
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 提示文字
   */
  text: PropTypes.string,
};

ActivityIndicator.displayName = 'ActivityIndicator';

export default withStyles(styles)(ActivityIndicator);