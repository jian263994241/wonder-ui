import React from 'react';
import PropTypes from 'prop-types';
import { getValueProps } from './utils';
import Cascader from './Cascader';
import useEventCallback from '@wonder-ui/utils/useEventCallback';

export const FIELD_META_PROP = 'data-__meta';
export const FIELD_DATA_PROP = 'data-__field';

const defaultFormat = (values = []) => {
  return values.map((item) => item.label).join(',');
};

/**
 * 级联选择器
 * @visibleName Picker 选择器
 */
const Picker = React.forwardRef(function Picker(props, ref) {
  const {
    meta,
    children,
    data = [],
    disabled,
    extra: extraProp,
    format = defaultFormat,
    labelProp = 'extra',
    onCancel,
    onChange,
    onOk,
    placeholder,
    showError = false,
    triggerType = 'onClick',
    value,
    ...cascaderProps
  } = props;

  const getExtra = () => {
    return placeholder || extraProp || (children && children.props.extra);
  };

  const [visible, setVisible] = React.useState(visible);
  const [extra, setExtra] = React.useState('');

  React.useEffect(() => {
    if (value) {
      setExtra(format(getValueProps(value, data)));
    } else {
      setExtra(getExtra());
    }
  }, [data, value]);

  const handleClick = useEventCallback((e) => {
    if (disabled) {
      return false;
    }
    setVisible(true);
    if (children.props.onClick) {
      children.props.onClick(e);
    }
  });

  const handleCancel = useEventCallback(() => {
    setVisible(false);
    onCancel && onCancel();
  });

  const handleOk = useEventCallback((value) => {
    console.log(value);
    setVisible(false);
    const valueProps = getValueProps(value, data);
    onChange && onChange(value, valueProps);
    onOk && onOk(value, valueProps);
  });

  return (
    <React.Fragment>
      {children &&
        typeof children !== 'string' &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          meta,
          [labelProp]: extra,
          [triggerType]: handleClick,
          disabled,
          readOnly: true,
          ref,
        })}
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
  triggerType: 'onClick',
  labelProp: 'extra',
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
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
  /**
   *
   */
  showError: PropTypes.bool,
};

export default Picker;
