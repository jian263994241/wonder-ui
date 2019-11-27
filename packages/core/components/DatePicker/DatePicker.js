import React from 'react';
import PropTypes from 'prop-types';
import DatePickerView from './DatePickerView';
import useEventCallback from '@wonder-ui/utils/useEventCallback';

function formatIt(date, form) {
  const pad = (n) => (n < 10 ? `0${n}` : n);
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  if (form === 'YYYY-MM-DD') {
    return dateStr;
  }
  if (form === 'HH:mm') {
    return timeStr;
  }
  return `${dateStr} ${timeStr}`;
}

function formatFn(props, value) {
  const formatsEnum = {
    date: 'YYYY-MM-DD',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
  };
  const { format } = props;
  const type = typeof format;
  if (type === 'string') {
    return formatIt(value, format);
  }
  if (type === 'function') {
    return format(value);
  }
  return formatIt(value, formatsEnum[props.mode]);
}

/**
 * @visibleName DatePicker 时间选择器
 * 
 * 时间选择器
 */
const DatePicker = React.forwardRef((props, ref)=>{
  const {
    children,
    placeholder,
    onCancel,
    onOk,
    onChange,
    triggerType = 'onClick',
    labelProp = 'extra',
    format,
    disabled,
    extra: extraProp,
    value,
    ...rest
  } = props;

  const getExtra = ()=>{
    return placeholder || extraProp || children.props.extra;
  };

  const [visible, setVisible] = React.useState(visible);
  const [extra, setExtra] = React.useState('');

  const formatDate = React.useMemo(()=>{
    if(!value) return ;
    return formatFn(props, value);
  }, [value, format]);

  React.useEffect(()=>{
    if(value){
      setExtra(formatDate);
    }else{
      setExtra( getExtra() )
    }
  }, [value, format]);

  const handleClick = useEventCallback((e)=>{
    if(disabled) return ;
    setVisible(true);
    if(children.props.onClick){
      children.props.onClick(e);
    }
  });

  const handleCancel = useEventCallback(()=>{
    setVisible(false);
    onCancel && onCancel();
  });

  const handleOk = useEventCallback((values)=>{
    setVisible(false);
    onChange && onChange(values);
    onOk && onOk(values);
  });

  return (
    <React.Fragment>
      { 
        (
          children && 
          typeof children !== 'string' &&
          React.isValidElement(children)
        ) ? React.cloneElement(children, { 
          [labelProp]: extra, 
          [triggerType]: handleClick,
          readOnly: true,
          disabled,
          ref  
        }) : (
          <a disabled={disabled} onClick={handleClick} ref={ref}>{extra}</a>
        )
      }
      <DatePickerView 
        visible={visible} 
        onCancel={handleCancel}
        onOk={handleOk}
        value={value}
        {...rest}
      />
    </React.Fragment>
  );
});

DatePicker.defaultProps = {
  triggerType:  'onClick',
  labelProp:  'extra'
};

DatePicker.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.element,
  /**
   * 占位提示
   */
  placeholder: PropTypes.string,
  /**
   * same as placeholder
   */
  extra: PropTypes.string,
  /**
   * selected value
   */
  value: PropTypes.instanceOf(Date),
  /**
   * click ok callback
   */
  onOk: PropTypes.func,
  /**
   * click cancel callback
   */
  onCancel: PropTypes.func,
  /**
   * rc-from callback
   */
  onChange: PropTypes.func,
  /**
   * button text
   */
  okText: PropTypes.string,
  /**
   * button text
   */
  cancelText: PropTypes.string,
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * the locale of area
   */
  locale: PropTypes.object,
  /**
   * The date picker mode.
   */
  mode: PropTypes.oneOf(['date', 'time', 'datetime', 'year', 'month']),
  /**
   * min date
   */
  minDate: PropTypes.instanceOf(Date),
  /**
   * max date
   */
  maxDate: PropTypes.instanceOf(Date),
  /**
   * min Hour [0, 23]
   */
  minHour: PropTypes.number,
  /**
   * max Hour [0, 23]
   */
  maxHour: PropTypes.number,
  /**
   * min Minute [0, 59]
   */
  minMinute: PropTypes.number,
  /**
   * max Minute [0, 59]
   */
  maxMinute: PropTypes.number,
  /**
   * 12 hours display mode
   */
  use12Hours: PropTypes.bool,
  /**
   * he amount of time, in minutes, between each minute item.
   */
  minuteStep: PropTypes.number,
  /**
   * Customize display value of months
   */
  format: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  /**
   * 每列 picker 改变时的回调
   */
  onDateChange: PropTypes.func
};



export default DatePicker;