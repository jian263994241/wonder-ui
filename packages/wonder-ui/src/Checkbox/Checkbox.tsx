import * as React from 'react';
import CheckCircleFill from '../icons/CheckCircleFill';
import Circle from '../icons/Circle';
import RecordCircle from '../icons/RecordCircle';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  checkboxClasses,
  checkboxCssVars,
  COMPONENT_NAME,
  useCheckboxCssVars
} from './CheckboxClasses';
import { CheckboxGroupContext } from '../CheckboxGroup/CheckboxGroupContext';
import { composeClasses, css } from '@wonder-ui/utils';
import { hideVisually } from 'polished';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import type { CheckboxProps, CheckboxStyleProps } from './CheckboxTypes';

const useClasses = (styleProps: CheckboxStyleProps) => {
  const { block, classes, checked, indeterminate, disabled } = styleProps;

  const slots = {
    root: [
      'root',
      block && 'block',
      indeterminate && 'indeterminate',
      checked && 'checked',
      disabled && 'disabled'
    ],
    input: ['input'],
    icon: ['icon'],
    content: ['content']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const CheckboxRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  [`&.${checkboxClasses.block}`]: {
    display: 'flex'
  },

  [`&.${checkboxClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  }
}));

const CheckboxIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})({
  flex: 'none',
  '& > *': {
    display: 'block'
  },
  ...svgIconCssVars.style({
    color: checkboxCssVars.value('inactiveColor'),
    size: checkboxCssVars.value('iconSize')
  }),

  [`.${checkboxClasses.checked} > &, .${checkboxClasses.indeterminate} > &`]:
    svgIconCssVars.style({
      color: checkboxCssVars.value('color')
    })
});

const CheckboxInput = styled('input', {
  name: COMPONENT_NAME,
  slot: 'Input'
})(hideVisually());

const CheckboxContent = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  flex: '0 1 auto',
  paddingLeft: checkboxCssVars.value('gap')
});

const defaultIcon = (checked: boolean, indeterminate: boolean) => {
  if (checked) {
    return <CheckCircleFill />;
  } else if (indeterminate) {
    return <RecordCircle />;
  }

  return <Circle />;
};

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      checked: checkedProp,
      className,
      defaultChecked: defaultCheckedProp = false,
      disabled: disabledProp,
      indeterminate = false,
      icon = defaultIcon,
      onChange,
      style,
      value,
      id,
      name,
      ...rest
    } = props;

    const context = React.useContext(CheckboxGroupContext);

    const [_checked, setCheckedIfUncontrolled] = useControlled({
      value: checkedProp,
      defaultValue: defaultCheckedProp
    });

    const checked = context ? context.isValueSelected(value) : _checked;
    const disabled = context ? context.disabled ?? disabledProp : disabledProp;

    const styleProps = { ...props, indeterminate, checked, disabled };

    const classes = useClasses(styleProps);

    const handleChange = useEventCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedIfUncontrolled(e.target.checked);

        if (onChange) {
          onChange(e);
        }

        if (context && value != undefined) {
          context.handleChange(value);
        }
      }
    );

    const renderIcon = () => (
      <CheckboxIcon className={classes.icon}>
        {typeof icon === 'function' ? icon(checked, indeterminate) : icon}
      </CheckboxIcon>
    );

    useCheckboxCssVars();

    return (
      <CheckboxRoot
        component="label"
        className={css(classes.root, className)}
        variant="subtitle1"
        style={style}
        ref={ref}
        {...rest}
      >
        <CheckboxInput
          type="checkbox"
          className={classes.input}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          id={id}
          name={name}
        />
        {renderIcon()}
        {children && (
          <CheckboxContent className={classes.content}>
            {children}
          </CheckboxContent>
        )}
      </CheckboxRoot>
    );
  }
);

export default Checkbox;
