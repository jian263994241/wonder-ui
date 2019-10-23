import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_picker, 
  WUI_picker_header, 
  WUI_picker_header_button,
  WUI_picker_header_title,
  WUI_picker_cascader
} from './styles';

function getHeadData(data){
  const result = [];
  const _getHeadData = (data)=>{
    const head = data[0];
    if(!head) return ;
    result.push(head.value);
    if(head.children && head.children.length > 0){
      return _getHeadData(head.children);
    }
  }
  _getHeadData(data);
  return result;
}

const Cascader = (props)=>{
  const {
    cancelText = '取消',
    okText = '确定',
    onOk, 
    onCancel,
    onChange,
    onPickerChange,
    title,
    visible = false,
    cols = 1,
    data = [],
    value: inValue,
  } = props;

  const [value, setValue] = React.useState(inValue);

  React.useEffect(()=>{
    if(inValue != value){
      setValue(inValue);
    }
  }, [inValue]);

  const handleChange = (val)=>{
    setValue(val);
    onPickerChange && onPickerChange(val);
  }

  const cascader = (
    <WUI_picker_cascader
      data={data}
      cols={cols}
      value={value}
      onChange={handleChange}
    />
  );

  const handleOk = ()=>{
    onChange && onChange(value || getHeadData(data));
    onOk && onOk(value || getHeadData(data));
  };

  return (
    <WUI_picker visible={visible} anchor="bottom" onCancel={onCancel} >
      <WUI_picker_header>
        <WUI_picker_header_button onClick={onCancel}>{cancelText}</WUI_picker_header_button>
        <WUI_picker_header_title>{title}</WUI_picker_header_title>
        <WUI_picker_header_button onClick={handleOk}>{okText}</WUI_picker_header_button>
      </WUI_picker_header>
      {cascader}
    </WUI_picker>
  )
};


Cascader.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
}

export default Cascader;