import React from 'react';
import PropTypes from 'prop-types';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import HeaderBar from '../HeaderBar';
import { 
  WUI_picker, 
  WUI_picker_header_button,
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
    defaultValue,
    value: inValue,
  } = props;
  
  const [value, setValue] = React.useState(inValue);

  React.useEffect(()=>{ 
    setValue(inValue || defaultValue);
  }, [inValue]);

  const handleChange = useEventCallback((val)=>{
    setValue(val);
    onPickerChange && onPickerChange(val);
  });

  const handleOk = useEventCallback(()=>{
    const _value = value || getHeadData(data);
    onChange && onChange(_value);
    onOk && onOk(_value);
  });
  
  const cascader = (
    <WUI_picker_cascader
      data={data}
      cols={cols}
      value={value}
      onChange={handleChange}
    />
  );

  return (
    <WUI_picker visible={visible} anchor="bottom" onCancel={onCancel}>
      <HeaderBar
        title={title}
        barLeft={<WUI_picker_header_button onClick={onCancel}>{cancelText}</WUI_picker_header_button>}
        barRight={<WUI_picker_header_button onClick={handleOk}>{okText}</WUI_picker_header_button>}
      />
      {cascader}
    </WUI_picker>
  )
};


Cascader.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
}

export default Cascader;