import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_Picker, 
  WUI_picker_header, 
  WUI_picker_header_button,
  WUI_picker_header_title,
  WUI_picker_body
} from './styles';
import RMCCascader from 'rmc-cascader/lib/Cascader';

const Cascader = (props)=>{
  const {
    data = [],
    cancelText = '取消',
    okText = '确定',
    title,
    onChange,
    value,
    onOk, 
    onCancel,
    visible,
    cols,
  } = props;

  const [_value, setValue] = React.useState(value);

  React.useEffect(()=>{
    const result = [];
    const getHeadData = (data)=>{
      const head = data[0];
      if(!head) return ;
      result.push(head.value);
      if(head.children && head.children.length > 0){
        return getHeadData(head.children);
      }
    }
    if(visible && !_value){
      getHeadData(data);
      setValue(result);
    }
  }, [_value, visible]);

  const handleChange = (val)=>{
    setValue(val);
    onChange && onChange(val);
  }
  
  const cascader = (
    <WUI_picker_body>
      <RMCCascader 
        data={data} 
        onChange={handleChange}
        value={_value}
        cols={cols}
      />
    </WUI_picker_body>
  );

  const handleOk = ()=>{
    onOk && onOk(_value);
  };

  return (
    <WUI_Picker 
      visible={visible} 
      anchor="bottom"
      onCancel={onCancel}
    >
      <WUI_picker_header>
        <WUI_picker_header_button onClick={onCancel}>{cancelText}</WUI_picker_header_button>
        <WUI_picker_header_title>{title}</WUI_picker_header_title>
        <WUI_picker_header_button onClick={handleOk}>{okText}</WUI_picker_header_button>
      </WUI_picker_header>
      {cascader}
    </WUI_Picker>
  )
};


Cascader.propTypes = {
  title: PropTypes.string,
}

export default Cascader;