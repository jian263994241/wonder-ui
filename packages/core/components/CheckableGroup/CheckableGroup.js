import React from 'react';
import PropTypes from 'prop-types';
import isValueSelected from './isValueSelected';

const defaultRenderItem = ({label, checked, onChange, ...props})=>(
  <label {...props}>
    <input type="checkbox" value={label} onChange={onChange} checked={checked}/>
    {label}
  </label>
);

/**
 * 单选, 多选. 类似radio, checkbox逻辑
 * @visibleName CheckableGroup 可选项
 */
const CheckableGroup = React.forwardRef(function CheckableGroup(props, ref) {
  const { 
    data = [], 
    disabled,
    exclusive, 
    itemProps,
    onChange, 
    renderItem = defaultRenderItem,
    value, 
    ...rest
  } = props;

  const handleChange = function(itemValue){
    if (!onChange) {
      return;
    }

    const index = value && value.indexOf(itemValue);

    let newValue;

    if (value && index >= 0) {
      newValue = [...value];
      newValue.splice(index, 1);
    } else {
      newValue = value ? [...value, itemValue] : [itemValue];
    }
    
    onChange(newValue);
  };

  const handleExclusiveChange = (itemValue)=>{
    if (!onChange) {
      return;
    }
    
    onChange(value === itemValue ? null : itemValue);
  };

  return (
    <span ref={ref} {...rest}>
      {
        data.map((item, i)=>{
          return renderItem({
            ...item,
            ...itemProps,
            disabled,
            key: i,
            checked: isValueSelected(item.value, value),
            onChange: exclusive ? handleExclusiveChange.bind(null, item.value) : handleChange.bind(null, item.value)
          })
        })
      }
    </span>
  )
});

CheckableGroup.displayName = 'CheckableGroup';

CheckableGroup.propTypes = {
  /**
   * 数据
   */
  data: PropTypes.arrayOf( 
    PropTypes.shape({ label: PropTypes.node, value: PropTypes.any, }) 
  ),
  /**
   * 是否单选
   */
  exclusive: PropTypes.bool,
  /**
   * 子元素props
   */
  itemProps: PropTypes.object,
  /**
   * change 回调
   */
  onChange: PropTypes.func,
  /**
   * 自定义渲染
   */
  renderItem: PropTypes.func,
  /**
   * 值
   */
  value: PropTypes.any,
};


export default CheckableGroup;