import React from 'react';
import Tag from '../tag';
import { WUI_check_tag_root } from './styles';

const CheckableTag = React.forwardRef((props, ref)=>{

  const {
    children,
    colors = {
      default: '#eeeeee',
      checked: '#6C94FF'
    },
    checked,
    defaultChecked,
    onChange = ()=> {},
  } = props;

  const [checkedState, setCheckState] = React.useState(defaultChecked);

  const handleChange = ()=>{
    console.log(checked);
    
    if(checked == undefined){
      onChange(!checkedState, props);
      setCheckState(!checkedState);
    }else{
      onChange(!checked, props);
    }
  }

  return (
    <Tag 
      color={checkedState ? colors.checked : colors.default} 
      onClick={handleChange}
      ref={ref}  
    >
      {children}
    </Tag>
  )

})

CheckableTag.Group = React.forwardRef((props, ref)=>{
  const {
    source = [],
    onChange = ()=>{},
    value = [],
  } = props;

  const [result, setValue] = React.useState(value || []);

  const handleChange = (checked, itemProps)=>{
    // let newValue = [];
    // if(checked){
    //   newValue = result.concat([item.value]);
    // }else{
    //   newValue = result.flatMap((val)=> val === item.value ? []: val)
    // }

    // setValue(newValue);

    // // console.log(result, props);
    console.log(checked, itemProps);
    
    onChange(result);
  }


  return source.map((item, i)=>{
    console.log(value.includes[item.value], value, item.value);
    
    return (
      <CheckableTag 
        key={i} 
        checked={value.includes[item.value]} 
        onChange={handleChange} 
        value={item.value}>
          {item.label}
        </CheckableTag>
    )
  })
})


export default CheckableTag;