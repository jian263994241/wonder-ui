import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_Picker, 
  WUI_picker_header, 
  WUI_picker_header_button,
  WUI_picker_header_title,
  WUI_picker_body
} from '../Picker/styles';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import defaultLocale from 'rmc-date-picker/lib/locale/zh_CN';

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

const DatePickView = (props)=>{
  const {
    cancelText = '取消',
    okText = '确定',
    title,
    onChange,
    value,
    onOk,
    onCancel,
    visible,
    defaultData = new Date(),
    locale = defaultLocale,
    ...mDatePickerProps
  } = props;

  const initlazeData = React.useMemo(()=>{
    return isValidDate(value) ? value : defaultData;
  }, []);
  
  const [_value, setValue] = React.useState(initlazeData);

  // console.log(_value);
  
  React.useEffect(()=>{
    // if(visible && !_value){
    //   setValue(defaultDate);
    // }
  }, [_value, visible]);

  const handleChange = (val)=>{
    setValue(val);
    onChange && onChange(val);
  }
  
  const dataPickerView = (
    <WUI_picker_body>
      <RCDatePicker 
        onDateChange={handleChange}
        date={_value}
        locale={locale}
        {...mDatePickerProps}
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
      {dataPickerView}
    </WUI_Picker>
  )
};


DatePickView.propTypes = {
  title: PropTypes.string,
}

export default DatePickView;