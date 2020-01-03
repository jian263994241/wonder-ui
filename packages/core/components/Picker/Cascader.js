import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Drawer from '../Drawer';
import HeaderBar from '../HeaderBar';
import RmcCascader from 'rmc-cascader/lib/Cascader';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import useStyles from './styles';

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

const Cascader = React.forwardRef(function Cascader(props, ref) {
  const {
    cancelText = '取消',
    cols = 1,
    data = [],
    defaultValue,
    okText = '确定',
    onCancel,
    onChange,
    onOk, 
    onPickerChange,
    title,
    value: inValue,
    visible = false,
  } = props;
  const classes = useStyles();
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
    <RmcCascader
      prefixCls={classes.root}
      pickerPrefixCls="wui-picker"
      data={data}
      cols={cols}
      value={value}
      onChange={handleChange}
      ref={ref}
    />
  );

  return (
    <Drawer visible={visible} anchor="bottom" iosSafe onCancel={onCancel}>
      <HeaderBar
        title={title}
        barLeft={<Button variant="text" color="primary" onClick={onCancel}>{cancelText}</Button>}
        barRight={<Button variant="text" color="primary" onClick={handleOk}>{okText}</Button>}
      />
      {cascader}
    </Drawer>
  )
});


Cascader.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
};

Cascader.displayName = 'Cascader';

export default Cascader;