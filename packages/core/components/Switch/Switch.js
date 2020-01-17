import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles, {creatColor} from './styles';
import withStyles from '../withStyles';


const Switch = React.forwardRef(function Switch(props, ref) {
  const { classes, className, color, style, checked, onChange, onClick, ...rest } = props;
  const triggerFn = onChange || onClick;
  const handleClick = React.useCallback((e)=>{
    if (triggerFn) {
      triggerFn(!checked, e);
    }
  }, [checked, triggerFn]);

  return (
    <span 
      className={clsx(
        classes.root, 
        checked && classes.checked,
        className
      )} 
      onClick={handleClick}
      style={{...creatColor(color), style}}
      {...rest}
    />
  )
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  /**
   * 颜色
   */
  color: PropTypes.string,
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

export default withStyles(styles)(Switch);