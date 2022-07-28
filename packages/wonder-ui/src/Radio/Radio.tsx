import * as React from 'react';
import CheckCircleFill from '../icons/CheckCircleFill';
import Circle from '../icons/Circle';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  radioClasses,
  radioCssVars,
  useRadioCssVars
} from './RadioClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import type { RadioProps, RadioStyleProps } from './RadioTypes';
import { hideVisually } from 'polished';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';

const useClasses = (styleProps: RadioStyleProps) => {
  const { block, classes, checked, disabled } = styleProps;

  const slots = {
    root: [
      'root',
      block && 'block',
      checked && 'checked',
      disabled && 'disabled'
    ],
    input: ['input'],
    icon: ['icon'],
    content: ['content']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const RadioRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  [`&.${radioClasses.block}`]: {
    display: 'flex'
  },

  [`&.${radioClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'not-allowed'
  }
}));

const RadioIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})({
  flex: 'none',
  '& > *': {
    display: 'block'
  },
  ...svgIconCssVars.style({
    color: radioCssVars.value('inactiveColor'),
    size: radioCssVars.value('iconSize')
  }),

  [`.${radioClasses.checked} > &`]: svgIconCssVars.style({
    color: radioCssVars.value('color')
  })
});

const RadioInput = styled('input', {
  name: COMPONENT_NAME,
  slot: 'Input'
})(hideVisually());

const RadioContent = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  flex: '0 1 auto',
  fontSize: 'inherit',
  paddingLeft: radioCssVars.value('gap')
});

const defaultIcon = (checked: boolean) => {
  if (checked) {
    return <CheckCircleFill />;
  }

  return <Circle />;
};

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    checked: checkedProp,
    className,
    defaultChecked: defaultCheckedProp = false,
    disabled: disabledProp,
    icon = defaultIcon,
    id,
    name,
    onChange,
    style,
    value,
    ...rest
  } = props;

  const context = React.useContext(RadioGroupContext);

  const [_checked, setCheckedIfUncontrolled] = useControlled({
    value: checkedProp,
    defaultValue: defaultCheckedProp
  });

  const checked = context ? context.isValueSelected(value) : _checked;
  const disabled = context ? context.disabled ?? disabledProp : disabledProp;

  const styleProps = { ...props, checked, disabled };

  const classes = useClasses(styleProps);

  useRadioCssVars();

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
    <RadioIcon className={classes.icon}>
      {typeof icon === 'function' ? icon(checked) : icon}
    </RadioIcon>
  );

  return (
    <RadioRoot
      component="label"
      variant="subtitle1"
      className={css(classes.root, className)}
      style={style}
      ref={ref}
      {...rest}
    >
      <RadioInput
        type="radio"
        id={id}
        name={name}
        className={classes.input}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      {renderIcon()}
      {children && (
        <RadioContent className={classes.content}>{children}</RadioContent>
      )}
    </RadioRoot>
  );
});

export default Radio;
