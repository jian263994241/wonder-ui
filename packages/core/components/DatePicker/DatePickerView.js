import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import defaultLocale from 'rmc-date-picker/lib/locale/zh_CN';
import Drawer from '../Drawer';
import HeaderBar from '../HeaderBar';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import useStyles from '../Picker/styles';

const DatePickView = React.forwardRef(function DatePickView(props, ref){
  const {
    cancelText = '取消',
    defaultValue = new Date(),
    locale = defaultLocale,
    okText = '确定',
    onCancel,
    onChange,
    onDateChange,
    onOk,
    title,
    value: inValue,
    visible = false,
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