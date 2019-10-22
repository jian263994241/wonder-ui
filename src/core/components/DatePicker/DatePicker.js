import React from 'react';
import PropTypes from 'prop-types';
import DatePickerView from './DatePickerView';
import elementAcceptingRef from '../../utils/elementAcceptingRef';
import treeFilter from 'array-tree-filter';

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
    visible,
    onCancel,
    onOk,
    onChange,
    triggerType = 'onClick',
    labelProps = 'extra',
    format,
    disabled,
    ...datePickerViewProps
  } = props;

  const getExtra = ()=>{
    return placeholder || children.props.extra || datePickerViewProps.value;
  };

  const [_visible, setVisible] = React.useState(visible);
  const [_extra, setExtra] = React.useState(getExtra());

  const handleClick = (e)=>{
    if(disabled) return ;
    setVisible(true);
    if(children.props.onClick){
      children.props.onClick(e);
    }
  };

  const handleCancel = ()=>{
    setVisible(false);
    onCancel && onCancel();
  };

  const handleOk = (values)=>{
    setVisible(false);
    if(!values) return ;
    const result = formatFn(props, values);
    setExtra(result);
    onChange && onChange(values);
    onOk && onOk(values);
  };

  return (
    <React.Fragment>
      { 
        React.cloneElement(children, { 
          [labelProps]: _extra, 
          [triggerType]: handleClick,
          readOnly: true
        }) 
      }
      <DatePickerView 
        visible={_visible} 
        onCancel={handleCancel}
        onOk={handleOk}
        {...datePickerViewProps}
      />
    </React.Fragment>
  );
});

DatePicker.defaultProps = {
  triggerType:  'onClick',
  labelProps:  'extra'
};

DatePicker.propTypes = {
  children: elementAcceptingRef,
  placeholder: PropTypes.string,
  ...DatePickerView.propTypes
};

export default DatePicker;