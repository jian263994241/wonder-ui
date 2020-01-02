import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import withStyles from '../withStyles';
import clsx from 'clsx';

/**
 * checkbox, radio的UI包装
 * @visibleName Checkbox 选择项
 */
const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { classes, className, checked, onChange, onClick, ...rest } = props;
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
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  /**
   * @ignore
   */
  classes: PropTypes.object
};

Checkbox.displayName = 'Checkbox';

export default withStyles(styles)(Checkbox);