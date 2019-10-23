import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_picker, 
  WUI_picker_header, 
  WUI_picker_header_button,
  WUI_picker_header_title,
  WUI_picker_cascader
} from '../Picker/styles';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import defaultLocale from 'rmc-date-picker/lib/locale/zh_CN';

const WUI_picker_date_picker = WUI_picker_cascader.withComponent(RCDatePicker);

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

const DatePickView = (props)=>{
  const {
    cancelText = '取消',
    okText = '确定',
    title,
    onChange,
    onDateChange,
    value: inValue,
    onOk,
    onCancel,
    visible = false,
    defaultDate = new Date(),
    locale = defaultLocale,
    ...mDatePickerProps
  } = props;

  const _date = React.useMemo(()=>{
    return isValidDate(inValue) ? inValue : defaultDate;
  }, [inValue]);
  
  const [value, setValue] = React.useState(_date);

  React.useEffect(()=>{
    if(inValue != value){
      setValue(_date);
    }
  }, [inValue]);

  const handleChange = (val)=>{
    setValue(val);
    onDateChange && onDateChange(val);
  }

  const dataPickerView = (
    <WUI_picker_date_picker 
      onDateChange={handleChange}
      date={value}
      locale={locale}
      {...mDatePickerProps}
    />
  );

  const handleOk = ()=>{
    onChange && onChange(value);
    onOk && onOk(value);
  };

  return (
    <WUI_picker visible={visible} anchor="bottom" onCancel={onCancel} >
      <WUI_picker_header>
        <WUI_picker_header_button onClick={onCancel}>{cancelText}</WUI_picker_header_button>
        <WUI_picker_header_title>{title}</WUI_picker_header_title>
        <WUI_picker_header_button onClick={handleOk}>{okText}</WUI_picker_header_button>
      </WUI_picker_header>
      {dataPickerView}
    </WUI_picker>
  )
};

DatePickView.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
}

export default DatePickView;