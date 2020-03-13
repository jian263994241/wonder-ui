import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';
import TouchFeedback from '../TouchFeedback';

/**
 * 带样式 reset 的 `button`, `Button` 的底层组件
 * @visibleName ButtonBase 基础按钮
 */
const ButtonBase = React.forwardRef(function ButtonBase(props, ref){
  const { classes, className, ...rest } = props;
  return (
    <TouchFeedback>
      <button 
        className={clsx(classes.root, className)} 
        role="button" 
        type="button" 
        ref={ref} 
        {...rest}
      />
    </TouchFeedback>
  )
});

ButtonBase.propTypes = {
  /**
   * classname
   */
  className: PropTypes.string,
  /**
   * type
   */
  type: PropTypes.string,
  /**
   * style object
   */
  style: PropTypes.object,
}

export default withStyles(styles, { name: 'ButtonBase' })(ButtonBase);