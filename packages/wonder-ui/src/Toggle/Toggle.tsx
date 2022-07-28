import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, composeClasses, css } from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  toggleClasses,
  toggleCssVars,
  useToggleCssVars
} from './ToggleClasses';
import { hideVisually } from 'polished';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import type { ToggleProps } from './ToggleTypes';

const useClasses = (styleProps: ToggleProps) => {
  const { checked, classes, color, disabled } = styleProps;

  const slots = {
    root: [
      'root',
      color && `color${capitalize(color)}`,
      checked && 'checked',
      disabled && 'disabled'
    ],
    icon: ['icon'],
    input: ['input']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ToggleRoot = styled('label', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  alignSelf: 'center',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  [`&.${toggleClasses.disabled}`]: {
    pointerEvents: 'none'
  }
});

const ToggleInput = styled('input', { name: COMPONENT_NAME, slot: 'Input' })(
  hideVisually()
);

const ToggleIcon = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})<{ styleProps: ToggleProps }>(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  transition: theme.transitions.create(['background-color']),
  width: toggleCssVars.value('width'),
  height: toggleCssVars.value('height'),
  borderRadius: toggleCssVars.value('height'),
  backgroundColor: toggleCssVars.value('borderColor'),

  '&:before': {
    boxSizing: 'border-box',
    content: '""',
    left: toggleCssVars.value('borderWidth'),
    position: 'absolute',
    top: toggleCssVars.value('borderWidth'),
    transform: 'scale(1)',
    transition: theme.transitions.create(['transform']),
    zIndex: 1,

    width: `calc(${toggleCssVars.value('width')} - ${toggleCssVars.value(
      'borderWidth'
    )} * 2)`,
    height: `calc(${toggleCssVars.value('height')} - ${toggleCssVars.value(
      'borderWidth'
    )} * 2)`,
    borderRadius: toggleCssVars.value('height'),
    backgroundColor: toggleCssVars.value('inactiveColor')
  },
  '&:after': {
    boxShadow: '0 2px 4px rgb(0 0 0 / 30%)',
    content: '""',
    left: toggleCssVars.value('borderWidth'),
    position: 'absolute',
    top: toggleCssVars.value('borderWidth'),
    transform: 'translateX(0px)',
    transition: theme.transitions.create(['transform']),
    zIndex: 2,

    width: `calc(${toggleCssVars.value('height')} - ${toggleCssVars.value(
      'borderWidth'
    )} * 2)`,
    height: `calc(${toggleCssVars.value('height')} - ${toggleCssVars.value(
      'borderWidth'
    )} * 2)`,
    borderRadius: `calc(${toggleCssVars.value(
      'height'
    )} - ${toggleCssVars.value('borderWidth')})`,
    backgroundColor: toggleCssVars.value('handleColor')
  },

  [`.${toggleClasses.checked} > &`]: {
    backgroundColor: toggleCssVars.value('color'),
    '&:before': {
      transform: 'scale(0)',
      backgroundColor: toggleCssVars.value('inactiveColor')
    },
    '&:after': {
      transform: `translateX(calc(${toggleCssVars.value(
        'width'
      )} - ${toggleCssVars.value('height')}))`,
      backgroundColor: toggleCssVars.value('handleColor')
    }
  },

  [`.${toggleClasses.disabled} > &`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}));

const Toggle = React.forwardRef<HTMLElement, ToggleProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    checked: checkedProp,
    className,
    color,
    defaultChecked = false,
    disabled = false,
    icon,
    id,
    inputProps,
    onChange,
    style,
    theme,
    ...rest
  } = props;
  const [checked, setChecked] = useControlled({
    defaultValue: defaultChecked,
    value: checkedProp
  });

  const handleChange = useEventCallback((e) => {
    const checkedValue = e.target.checked;

    setChecked(checkedValue);
    onChange?.(e);
  });

  const styleProps = { ...props, color, disabled, checked };
  const classes = useClasses(styleProps);
  useToggleCssVars();

  return (
    <ToggleRoot
      className={css(classes.root, className)}
      htmlFor={id}
      ref={ref as React.Ref<HTMLLabelElement>}
      style={{
        ...style,
        ...(color &&
          toggleCssVars.style({
            color: theme.palette[color].main
          }))
      }}
      {...rest}
    >
      <ToggleInput
        checked={checked}
        className={classes.input}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        type="checkbox"
        {...inputProps}
      />

      {!icon && <ToggleIcon styleProps={styleProps} className={classes.icon} />}

      {typeof icon === 'function' && icon(checked)}
    </ToggleRoot>
  );
});

export default Toggle;
