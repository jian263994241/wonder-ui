import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps, ClassNameMap } from '../styles/types';
import { useControlled } from '@wonder-ui/hooks';

export interface SwitchStyleProps {
  checked?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'medium' | 'small';
}

const SwitchRoot = styled('label', {
  name: 'WuiSwitch',
  slot: 'Root'
})<StyleProps<SwitchStyleProps>>(({ styleProps }) => ({
  alignSelf: 'center',
  boxSizing: 'border-box',
  display: 'inline-block',
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
  verticalAlign: 'middle',
  zIndex: 0,
  cursor: 'pointer',
  ...(styleProps.disabled && {
    pointerEvents: 'none'
  })
}));

const SwitchInput = styled('input', { name: 'WuiSwitch', slot: 'Input' })(
  () => ({
    display: 'none'
  })
);

const SwitchIcon = styled('span', {
  name: 'WuiSwitch',
  slot: 'Icon'
})<StyleProps<SwitchStyleProps>>(
  ({ styleProps }) => {
    return {
      margin: 0,
      padding: 0,
      zIndex: 0,
      appearance: 'none',
      border: 'none',
      position: 'relative',
      transition: '0.3s',
      boxSizing: 'border-box',
      display: 'block',
      '&:before': {
        boxSizing: 'border-box',
        content: '""',
        left: 2,
        position: 'absolute',
        top: 2,
        transform: 'scale(1)',
        transitionDuration: '0.3s',
        zIndex: 1
      },
      '&:after': {
        boxShadow: '0 2px 4px rgb(0 0 0 / 30%)',
        content: '""',
        left: 2,
        position: 'absolute',
        top: 2,
        transform: 'translateX(0px)',
        transitionDuration: '0.3s',
        zIndex: 2
      },

      ...(styleProps.disabled && {
        opacity: 0.5
      })
    };
  },
  ({ theme, styleProps }) => {
    const { switchWidth, switchHeight } = {
      medium: {
        switchWidth: 52,
        switchHeight: 32
      },
      small: {
        switchWidth: 40,
        switchHeight: 20
      }
    }[styleProps.size || 'medium'];

    const switchBorderColor = theme.palette.divider,
      switchHandleColor = '#fff',
      switchInactiveColor = theme.palette.background.paper,
      switchActiveColor = theme.palette[styleProps.color || 'primary'].main;

    return {
      width: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight,
      backgroundColor: switchBorderColor,
      '&:before': {
        width: switchWidth - 4,
        height: switchHeight - 4,
        borderRadius: switchHeight,
        backgroundColor: switchInactiveColor
      },
      '&:after': {
        width: switchHeight - 4,
        height: switchHeight - 4,
        borderRadius: switchHeight - 4,
        backgroundColor: switchHandleColor
      },

      ...(styleProps.checked && {
        backgroundColor: switchActiveColor,
        '&:before': {
          transform: 'scale(0)',
          width: switchWidth - 4,
          height: switchHeight - 4,
          borderRadius: switchHeight,
          backgroundColor: switchInactiveColor
        },
        '&:after': {
          transform: `translateX(${switchWidth - switchHeight}px)`,
          width: switchHeight - 4,
          height: switchHeight - 4,
          borderRadius: switchHeight - 4,
          backgroundColor: switchHandleColor
        }
      })
    };
  }
);

export interface SwitchProps {
  /**
   * @description checked
   */
  checked?: boolean;
  /**
   * css api
   */
  classes?: Partial<ClassNameMap<'root' | 'input' | 'icon'>>;
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary';
  /**
   * @description default checked
   */
  defaultChecked?: boolean;
  /**
   * @description disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description checked icon
   */
  checkedIcon?: React.ReactElement;
  /**
   * @description icon
   */
  icon?: React.ReactElement;
  /**
   * @description id
   */
  id?: string;
  /**
   * @description input props
   * @default {}
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * @description input ref
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * @description onChange event
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description root element click event
   */
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  /**
   * @description input required
   */
  required?: boolean;
  /**
   * @description size
   * @description medium
   */
  size?: 'medium' | 'small';
}

const Switch = createFCWithTheme<SwitchProps>('WuiSwitch', (props, ref) => {
  const {
    checked: checkedProp,
    component,
    className,
    color = 'primary',
    defaultChecked = false,
    disabled,
    icon,
    checkedIcon,
    id,
    inputProps,
    inputRef,
    onChange,
    onClick,
    required = false,
    size = 'medium',
    ...rest
  } = props;
  const [checked, setChecked] = useControlled({
    defaultValue: defaultChecked,
    value: checkedProp,
    name: 'Switch'
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const checkedValue = e.target.checked;

    setChecked(checkedValue);

    if (onChange) {
      onChange(checkedValue);
    }
  };

  const styleProps = { size, color, disabled, checked };
  const classes = useClasses({ ...props, styleProps, name: 'WuiSwitch' });

  return (
    <SwitchRoot
      as={component}
      className={classes.root}
      htmlFor={id}
      onClick={onClick}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      <SwitchInput
        checked={checked}
        className={classes.input}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        ref={inputRef}
        required={required}
        type="checkbox"
        {...inputProps}
      />

      {!checkedIcon && !icon && (
        <SwitchIcon styleProps={styleProps} className={classes.icon} />
      )}

      {checked ? checkedIcon : icon}
    </SwitchRoot>
  );
});

export default Switch;
