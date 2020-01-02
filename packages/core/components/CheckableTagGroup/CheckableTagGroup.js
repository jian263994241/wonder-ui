import React from 'react';
import CheckableGroup from '../CheckableGroup';
import CheckableTag from '../CheckableTag';

const CheckableTagGroup = React.forwardRef(function CheckableTagGroup(props, ref) {
  
  const { data = [], exclusive, value, onChange, ...rest } = props;

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

export default CheckableTagGroup;