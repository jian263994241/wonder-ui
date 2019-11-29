import React from 'react';
import PropTypes from 'prop-types';
import { WUI_toggle_button_root } from './styles';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import useTheme from '../styles/useTheme';

/**
 * 可以选择的按钮
 * @visibleName ToggleButton 切换按钮
 */
const ToggleButton = React.forwardRef(function ToggleButton(props, ref){
  const{ 
    children,
    onChange,
    onClick,
    disabled,
    value,
    selected,
    size = 'medium',
    ...rest
  } = props;

  const theme = useTheme();

  const handleChange = useEventCallback(e => {
    if (onClick) {
      onClick(value, e);
    }

    if (onChange) {
      onChange(value, e);
    }
  });

  return (
    <WUI_toggle_button_root 
      onChange={onChange} 
      disabled={disabled}
      value={value}
      onClick={handleChange}
      size={size}
      selected={selected}
      ref={ref}
      theme={theme}
      {...rest}
    >
      {children}
    </WUI_toggle_button_root>
  )
})

ToggleButton.propTypes = {
  /**
   * 按钮内容
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * 是否禁用按钮
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * 是否选中
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * ToggleButtonGroup 选中后的值
   */
  value: PropTypes.any.isRequired,
};

export default ToggleButton;
