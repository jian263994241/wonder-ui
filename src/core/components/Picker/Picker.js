import React from 'react';
import PropTypes from 'prop-types';
import Cascader from './Cascader';
import elementAcceptingRef from '../../utils/elementAcceptingRef';
import treeFilter from 'array-tree-filter';

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
    visible,
    onCancel,
    onOk,
    onChange,
    triggerType = 'onClick',
    labelProps = 'extra',
    format = defaultFormat,
    disabled,
    ...cascaderProps
  } = props;

  const getExtra = ()=>{
    return placeholder || children.props.extra || cascaderProps.value;
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

    const result = treeFilter(cascaderProps.data, (item, level)=>{
      return item.value === values[level];
    });
    
    setExtra(format(result));
    
    onChange && onChange(values, result);
    onOk && onOk(values, result);
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
      <Cascader 
        visible={_visible} 
        onCancel={handleCancel}
        onOk={handleOk}
        {...cascaderProps}
      />
    </React.Fragment>
  );
});

Picker.defaultProps = {
  triggerType:  'onClick',
  labelProps:  'extra'
};

Picker.propTypes = {
  children: elementAcceptingRef,
  placeholder: PropTypes.string,
  ...Cascader.propTypes
};

export default Picker;