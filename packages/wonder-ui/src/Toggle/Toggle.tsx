import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { toggleClasses, ToggleStyleProps, useClasses } from './ToggleClasses';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import { css } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiToggle';
export interface ToggleProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * checked
   */
  checked?: boolean;
  /**
   * css api
   */
  classes?: Partial<typeof toggleClasses>;
  /**
   * color
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';

  component?: React.ElementType;
  /**
   * default checked
   */
  defaultChecked?: boolean;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * checked icon
   */
  checkedIcon?: JSX.Element;
  /**
   * icon
   */
  icon?: JSX.Element;
  /**
   * id
   */
  id?: string;
  /**
   * input props
   * @default {}
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * input ref
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * onChange event
   */
  onChange?: (checked: boolean) => void;
  /**
   * root element click event
   */
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  /**
   * input required
   */
  required?: boolean;
  /**
   * size
   * @default medium
   */
  size?: 'medium' | 'small';
  /**
   * input value
   */
  value?: any;
}

const ToggleRoot = styled('label', {
  name: COMPONENT_NAME,
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
  WebkitTapHighlightColor: 'transparent',
  [`&.${toggleClasses.disabled}`]: {
    pointerEvents: 'none'
  }
});

const ToggleInput = styled('input', { name: COMPONENT_NAME, slot: 'Input' })({
  display: 'none'
});

const ToggleIcon = styled('span', {
  name: COMPONENT_NAME,
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
        transition: theme.transitions.create(['transform']),
        zIndex: 1
      },
      '&:after': {
        boxShadow: '0 2px 4px rgb(0 0 0 / 30%)',
        content: '""',
        left: 2,
        position: 'absolute',
        top: 2,
        transform: 'translateX(0px)',
        transition: theme.transitions.create(['transform']),
        zIndex: 2
      },

      [`.${toggleClasses.disabled} > &`]: {
        opacity: 0.3
      }
    };
  },
  ({ theme, styleProps }) => {
    const { switchWidth, switchHeight } = {
      medium: { switchWidth: 50, switchHeight: 30 },
      small: { switchWidth: 40, switchHeight: 20 }
    }[styleProps.size!];

    const switchBorderColor = theme.palette.divider,
      switchHandleColor = '#fff',
      switchInactiveColor = theme.palette.background.paper,
      switchActiveColor = theme.palette[styleProps.color || 'primary'].main;

    return {
      width: theme.typography.pxToRem(switchWidth),
      height: theme.typography.pxToRem(switchHeight),
      borderRadius: theme.typography.pxToRem(switchHeight),
      backgroundColor: switchBorderColor,
      '&:before': {
        width: theme.typography.pxToRem(switchWidth - 4),
        height: theme.typography.pxToRem(switchHeight - 4),
        borderRadius: theme.typography.pxToRem(switchHeight),
        backgroundColor: switchInactiveColor
      },
      '&:after': {
        width: theme.typography.pxToRem(switchHeight - 4),
        height: theme.typography.pxToRem(switchHeight - 4),
        borderRadius: theme.typography.pxToRem(switchHeight - 4),
        backgroundColor: switchHandleColor
      },

      [`.${toggleClasses.checked} > &`]: {
        backgroundColor: switchActiveColor,
        '&:before': {
          transform: 'scale(0)',
          width: theme.typography.pxToRem(switchWidth - 4),
          height: theme.typography.pxToRem(switchHeight - 4),
          borderRadius: theme.typography.pxToRem(switchHeight),
          backgroundColor: switchInactiveColor
        },
        '&:after': {
          transform: `translateX(${theme.typography.pxToRem(
            switchWidth - switchHeight
          )})`,
          width: theme.typography.pxToRem(switchHeight - 4),
          height: theme.typography.pxToRem(switchHeight - 4),
          borderRadius: theme.typography.pxToRem(switchHeight - 4),
          backgroundColor: switchHandleColor
        }
      }
    };
  }
);

const Toggle = React.forwardRef<HTMLElement, ToggleProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
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
      className={css(classes.root, className)}
      htmlFor={id}
      onClick={onClick}
      ref={ref as React.Ref<HTMLLabelElement>}
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
