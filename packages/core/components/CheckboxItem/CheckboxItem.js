import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import Checkbox from '../Checkbox';

const defaultRenderIcon = ({checked})=>( 
  <Checkbox checked={checked} /> 
);

/**
 * 基于List.Item对Checkbox进行封装
 * List.Item的`thumb|extra`属性固定传入Checkbox,其他属性和List.Item一致。
 * @visibleName CheckboxItem 复选框
 */
const CheckboxItem = React.forwardRef((props, ref)=> {

  const {
    visible,
    disabled,
    checked,
    onChange,
    onClick,
    position = 'left',
    renderIcon = defaultRenderIcon,
    ...rest
  } = props;

  const triggerFn = onChange || onClick;
  const handleClick = React.useCallback((e)=>{
    if (triggerFn) {
      triggerFn(!checked, e);
    }
  }, [checked, triggerFn]);

  const iconComponent = renderIcon({ checked, disabled });
  const renderCheckbox = visible ? iconComponent : null;
  const checkboxInner = position === 'left' ? { thumb: renderCheckbox } : { extra: renderCheckbox };

  
  return (
    <ListItem
      ref={ref}
      disabled={disabled}
      activeState={visible}
      onClick={handleClick}
      {...checkboxInner}
      {...rest}
    />
  )
})


CheckboxItem.defaultProps = {
  visible: false,
  position: 'left'
}

CheckboxItem.propTypes = {
  /**
   * 是否显示checkbox
   */
  visible: PropTypes.bool,
  /**
   * 禁用checkbox
   */
  disabled: PropTypes.bool,
  /**
   * change 事件触发的回调函数
   */
  onChange: PropTypes.func,
  /**
   * 指定当前是否选中
   */
  checked: PropTypes.bool,
  /**
   * checkbox显示的位置
   */
  position: PropTypes.oneOf(['left', 'right'])
}


export default CheckboxItem;