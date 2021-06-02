import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { toggleClasses, ToggleStyleProps, useClasses } from './ToggleClasses';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
export interface ToggleProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'size' | 'onChange'> {
  /**
   * @description checked
   */
  checked?: boolean;
  /**
   * css api
   */
  classes?: Partial<typeof toggleClasses>;
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
  /**
   * @ignore
   */
  component?: React.ElementType;
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
  /**
   * input value
   */
  value?: any;
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

const ToggleRoot = styled('label', {
  name: 'WuiSwitch',
  slot: 'Root'
})({
  alignSelf: 'center',
  boxSizing: 'border-box',
  display: 'inline-block',
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
  verticalAlign: 'middle',
  zIndex: 0,
  cursor: 'pointer',
  [`&.${toggleClasses.disabled}`]: {
    pointerEvents: 'none'
  }
});

const ToggleInput = styled('input', { name: 'WuiSwitch', slot: 'Input' })({
  display: 'none'
});

const ToggleIcon = styled('span', {
  name: 'WuiSwitch',
  slot: 'Icon'
})<{ styleProps: ToggleStyleProps }>(
  ({ theme }) => {
    return {
      margin: 0,
      padding: 0,
      zIndex: 0,
      appearance: 'none',
      border: 'none',
      position: 'relative',
      transition: theme.transitions.create(['background-color']),
      boxSizing: 'border-box',
      display: 'block',
      '&:before': {
        boxSizing: 'border-box',
        content: '""',
        left: 2,
        position: 'absolute',
        top: 2,
        transform: 'scale(1)',
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.area.small
        }),
        zIndex: 1
      },
      '&:after': {
        boxShadow: '0 2px 4px rgb(0 0 0 / 30%)',
        content: '""',
        left: 2,
        position: 'absolute',
        top: 2,
        transform: 'translateX(0px)',
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.area.small
        }),
        zIndex: 2
      },

      [`.${toggleClasses.disabled} > &`]: {
        opacity: 0.3
      }
    };
  },
  ({ theme, styleProps }) => {
    const { switchWidth, switchHeight } = {
      medium: { switchWidth: 52, switchHeight: 32 },
      small: { switchWidth: 40, switchHeight: 20 }
    }[styleProps.size!];

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

      [`.${toggleClasses.checked} > &`]: {
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
      }
    };
  }
);

const Toggle: React.FC<ToggleProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiToggle' });
  const {
    checked: checkedProp,
    checkedIcon,
    className,
    color = 'primary',
    component,
    defaultChecked = false,
    disabled = false,
    icon,
    id,
    inputProps,
    inputRef,
    onChange,
    onClick,
    required = false,
    size = 'medium',
    value,
    ...rest
  } = props;
  const [checked, setChecked] = useControlled({
    defaultValue: defaultChecked,
    value: checkedProp
  });

  const handleChange = useEventCallback((e) => {
    const checkedValue = e.target.checked;

    setChecked(checkedValue);

    if (onChange) {
      onChange(checkedValue);
    }
  });

  const styleProps = { ...props, size, color, disabled, checked };
  const classes = useClasses(styleProps);

  return (
    <ToggleRoot
      as={component}
      className={classes.root}
      htmlFor={id}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      <ToggleInput
        checked={checked}
        className={classes.input}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        ref={inputRef}
        required={required}
        type="checkbox"
        value={value}
        {...inputProps}
      />

      {!checkedIcon && !icon && (
        <ToggleIcon styleProps={styleProps} className={classes.icon} />
      )}

      {checked ? checkedIcon : icon}
    </ToggleRoot>
  );
});

export default Toggle;
