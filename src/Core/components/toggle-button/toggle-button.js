import React from 'react';
import PropTypes from 'prop-types';
import { WUI_toggle_button_root, WUI_toggle_button_group } from './styles';
import isValueSelected from './isValueSelected';

const ToggleButton = React.forwardRef((props, ref)=>{
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

  const handleChange = event => {
    if (onClick) {
      onClick(value, event);
      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(value, event);
    }
  };

  return (
    <WUI_toggle_button_root 
      onChange={onChange} 
      disabled={disabled}
      value={value}
      onClick={handleChange}
      size={size}
      selected={selected}
      ref={ref}
      {...rest}
    >
      {children}
    </WUI_toggle_button_root>
  )
})

ToggleButton.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
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
   * If `true`, the button will be rendered in an active state.
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: PropTypes.any.isRequired,
};

ToggleButton.Group = React.forwardRef((props, ref)=>{
  const {
    source = [],
    size,
    onChange,
    value,
    exclusive = false,
    spacing,
    ...rest
  } = props;

  const handleChange = (buttonValue, event) => {
    if (!onChange) {
      return;
    }

    const index = value && value.indexOf(buttonValue);
    let newValue;

    if (value && index >= 0) {
      newValue = [...value];
      newValue.splice(index, 1);
    } else {
      newValue = value ? [...value, buttonValue] : [buttonValue];
    }

    onChange(newValue, event);
  };

  const handleExclusiveChange = (event, buttonValue) => {
    if (!onChange) {
      return;
    }

    onChange(event, value === buttonValue ? null : buttonValue);
  };

  return (
    <WUI_toggle_button_group spacing={spacing} ref={ref} {...rest}>
    {
      source.map((item, i)=>(
        <ToggleButton 
          value={item.value} 
          key={i}
          size={size}
          onChange={exclusive ? handleExclusiveChange : handleChange}
          selected={item.selected === undefined ? isValueSelected(item.value, value) : item.selected}
          spacing={spacing}
          {...rest}
          >
        {item.label}
        </ToggleButton>
      ))
    }
    </WUI_toggle_button_group>
  )
});

ToggleButton.Group.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, only allow one of the child ToggleButton values to be selected.
   */
  exclusive: PropTypes.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {object} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: PropTypes.func,
  /**
   * The size of the buttons.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The currently selected value within the group or an array of selected
   * values when `exclusive` is false.
   */
  value: PropTypes.any,
};

export default ToggleButton;
