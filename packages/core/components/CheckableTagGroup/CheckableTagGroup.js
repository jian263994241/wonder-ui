import React from 'react';
import PropTypes from 'prop-types';
import CheckableGroup from '../CheckableGroup';
import CheckableTag from '../CheckableTag';

/**
 * 受控组件
 * @visibleName CheckableTagGroup 可选标签组
 */
const CheckableTagGroup = React.forwardRef(function CheckableTagGroup(props, ref) {
  const { 
    data = [], 
    exclusive, 
    onChange, 
    value, 
    ...rest 
  } = props;

  return (
    <CheckableGroup
      ref={ref}
      data={data}
      exclusive={exclusive}
      value={value}
      onChange={onChange}
      renderItem={({checked, label, ...props})=> (
        <CheckableTag checked={checked} {...props}>{label}</CheckableTag>
      )}
      {...rest}
    />
  )
});

CheckableTagGroup.displayName = 'CheckableTagGroup';

CheckableTagGroup.propTypes = {
  /**
   * 数据源
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ),
  /**
   * 是否单选
   */
  exclusive: PropTypes.bool,
  /**
   * 事件回调
   */
  onChange: PropTypes.func,
  /**
   * 选中的值, 多选的时候为`array`
   */
  value: PropTypes.any,
};

export default CheckableTagGroup;