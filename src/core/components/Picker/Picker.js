import React from 'react';
import PropTypes from 'prop-types';
import Cascader from './Cascader';
import treeFilter from 'array-tree-filter';
import useEventCallback from '../../utils/useEventCallback';

const defaultFormat = (values = [])=>{
  return values.map(item=>item.label).join(',');
};

/**
 * @visibleName Picker 选择器
 * 
 * 级联选择器
 */
const Picker = React.forwardRef((props, ref)=>{
  const {
    children,
    placeholder,
    onCancel,
    onOk,
    onChange,
    value,
    triggerType = 'onClick',
    labelProp = 'extra',
    format = defaultFormat,
    disabled,
    extra: extraProp,
    data = [],
    ...cascaderProps
  } = props;

  const getExtra = ()=>{
    return placeholder|| extraProp || children.props.extra;
  };

  const [visible, setVisible] = React.useState(visible);
  const [extra, setExtra] = React.useState('');
  
  const getValueProps = (value)=>{
    if(value){
      const result = treeFilter(data, (item, level)=>{
        return item.value === value[level];
      });
      return result;
    }
    return [];
  };

  React.useEffect(()=>{
    if(value){
      setExtra(format(getValueProps(value)));
    }else{
      setExtra( getExtra() )
    }
  }, [data, value]);

  const handleClick = useEventCallback((e)=>{
    if(disabled) {
      return false;
    }
    setVisible(true);
    if(children.props.onClick){
      children.props.onClick(e);
    }
  });

  const handleCancel = useEventCallback(()=>{
    setVisible(false);
    onCancel && onCancel();
  });

  const handleOk = useEventCallback((value)=>{
    setVisible(false);
    const valueProps = getValueProps(value);
    onChange && onChange(value, valueProps);
    onOk && onOk(value, valueProps);
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
      <Cascader 
        visible={visible}
        value={value}
        onCancel={handleCancel}
        onOk={handleOk}
        data={data}
        {...cascaderProps}
      />
    </React.Fragment>
  );
});

Picker.defaultProps = {
  triggerType:  'onClick',
  labelProp:  'extra'
};

Picker.propTypes = {
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
   * The data of picker
   */
  data: PropTypes.array,
  /**
   * selected value
   */
  value: PropTypes.array,
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
   * format
   */
  format: PropTypes.func,
  /**
   * 每列数据选择变化后的回调函数
   */
  onPickerChange: PropTypes.func,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
};

export default Picker;