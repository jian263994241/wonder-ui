import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Picker/styles';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import defaultLocale from 'rmc-date-picker/lib/locale/zh_CN';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import Drawer from '../Drawer';
import HeaderBar from '../HeaderBar';
import Button from '../Button';

const DatePickView = React.forwardRef(function DatePickView(props, ref){
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
    defaultValue = new Date(),
    locale = defaultLocale,
    ...mDatePickerProps
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(inValue || defaultValue);

  React.useEffect(()=>{
    setValue(inValue || defaultValue);
  }, [inValue]);

  const handleChange = useEventCallback((val)=>{
    setValue(val);
    onDateChange && onDateChange(val);
  });

  const handleOk = useEventCallback(()=>{
    onChange && onChange(value);
    onOk && onOk(value);
  });

  const dataPickerView = (
    <RCDatePicker 
      prefixCls={classes.root}
      pickerPrefixCls="wui-picker"
      onDateChange={handleChange}
      date={value}
      locale={locale}
      ref={ref}
      {...mDatePickerProps}
    />
  );

  return (
    <Drawer visible={visible} anchor="bottom" iosSafe onCancel={onCancel} ref={ref}>
      <HeaderBar
        title={title}
        barLeft={<Button variant="text" color="primary" onClick={onCancel}>{cancelText}</Button>}
        barRight={<Button variant="text" color="primary" onClick={handleOk}>{okText}</Button>}
      />
      {dataPickerView}
    </Drawer>
  )
});

DatePickView.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
}

export default DatePickView;