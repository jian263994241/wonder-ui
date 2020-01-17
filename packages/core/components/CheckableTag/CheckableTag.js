import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import TouchFeedback from '../TouchFeedback';

/**
 * 受控组件
 * @visibleName CheckableTag 可选标签 
 */
const CheckableTag = React.forwardRef(function CheckableTag(props, ref) {
  const { 
    checked, 
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
    <TouchFeedback>
      <Tag 
        clickable
        checked={checked}
        ref={ref} 
        onClick={handleClick} 
        {...rest}
      />
    </TouchFeedback>   
  )
}); 

CheckableTag.propTypes = {
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

CheckableTag.displayName = 'CheckableTag';


export default CheckableTag;