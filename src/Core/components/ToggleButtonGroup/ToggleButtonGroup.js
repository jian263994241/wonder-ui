import React from 'react';
import PropTypes from 'prop-types';
import isValueSelected from './isValueSelected';
import { WUI_toggle_button_group } from '../ToggleButton/styles';
import ToggleButton from '../ToggleButton';
import useTheme from '../styles/useTheme';

/**
 * 按钮的扩展组件, 实现单选,多选功能
 * @visibleName ToggleButtonGroup 可选按钮
 */
const ToggleButtonGroup = React.forwardRef((props, ref)=>{
  const {
    source = [],
    size,
    onChange,
    value,
    exclusive = false,
    spacing,
    theme,
    ...rest
  } = props;

  const [ThemeProvider] = useTheme(props);

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
    <ThemeProvider>
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
    </ThemeProvider>
  )
});

ToggleButtonGroup.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * 是否单选, 如果为 `true`单选, 否则为多选
   */
  exclusive: PropTypes.bool,
  /**
   * value变化时,触发回调
   * 
   * @param {any} value - 按钮选中的值, 如果 `exclusive` 为 `true`, 
   * `onChange`输出单一值, 否则为多选`onChange`输出数组
   *
   * @param {object} event - callback事件对象;
   */
  onChange: PropTypes.func,
  /**
   * 按钮尺寸
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 按钮间距
   */
  spacing: PropTypes.number,
  /**
   * 组件选中的值
   */
  value: PropTypes.any,
  /**
   * 按钮配置
   */
  source: PropTypes.arrayOf(
    PropTypes.shape({
      /** 按钮的值 */
      value: PropTypes.any,
      /** 按钮文字 */
      label: PropTypes.any
    })
  )
};


export default ToggleButtonGroup;