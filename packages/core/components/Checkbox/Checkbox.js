import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 可选项
 * @visibleName Checkbox 选择项
 */
const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { 
    checked, 
    classes, 
    className, 
    onChange, 
    onClick, 
    ...rest 
  } = props;
  const triggerFn = onChange || onClick;
  const handleClick = React.useCallback((e)=>{
    if (triggerFn) {
      triggerFn(!checked, e);
    }
  }, [checked, triggerFn]);

  return (
    <span 
      {...rest}
      ref={ref}
      role="checkbox" 
      className={clsx(classes.root, className)}
      onClick={handleClick}
    > 
      <i className={clsx(classes.body, checked && classes.checked)} />
    </span>
  )
})

Checkbox.propTypes = {
  /**
   * 事件回调
   */
  onChange: PropTypes.func,
  /**
   * 是否选中 
   */
  checked: PropTypes.bool,
  /**
   * @ignore
   */
  classes: PropTypes.object
};

Checkbox.displayName = 'Checkbox';

export default withStyles(styles)(Checkbox);