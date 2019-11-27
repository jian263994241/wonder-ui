import React from 'react';
import PropTypes from 'prop-types';
import { WUI_checkbox_wrap, WUI_checkbox_inner } from './styles';

/**
 * checkbox, radio的UI包装
 * @visibleName Checkbox 选择项
 */
const Checkbox = React.forwardRef((props, ref)=> {

  const {
    className,
    style,
    name,
    id,
    type,
    readOnly,
    disabled,
    tabIndex,
    checked,
    onFocus,
    onClick,
    onBlur,
    onChange,
    autoFocus,
    value,
    defaultValue,
    defaultChecked,
  } = props;

  const handleChange = (e)=>{
    onChange && onChange(e);
  }

  return (
    <WUI_checkbox_wrap role={type} className={className} style={style} disabled={disabled}>
      <input 
        ref={ref}
        name={name}
        id={id}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        tabIndex={tabIndex}
        checked={checked}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        autoFocus={autoFocus}
        value={value}
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
      />
      <WUI_checkbox_inner/>
    </WUI_checkbox_wrap>
  )
})

Checkbox.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * 组件类型: 多选或者单选
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * input prop name
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  readOnly: PropTypes.bool,
  /**
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  tabIndex: PropTypes.string,
  /**
   * 受控组件的值, 配合onChange使用.
   */
  checked: PropTypes.bool,
  /**
   * 默认选中
   */
  defaultChecked:  PropTypes.bool,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * 受控组件的方法, 配合value使用.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
   */
  value: PropTypes.any,
  /**
   * @ignore
   */
  defaultValue: PropTypes.any,
}

Checkbox.defaultProps = {
  type: 'checkbox'
}


export default Checkbox;