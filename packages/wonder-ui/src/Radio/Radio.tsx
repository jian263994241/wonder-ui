import * as React from 'react';
import CheckCircleFill from '../icons/CheckCircleFill';
import Circle from '../icons/Circle';
import RecordCircle from '../icons/RecordCircle';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, radioClasses } from './RadioClasses';
import { composeClasses, createCssVars, css } from '@wonder-ui/utils';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import type { RadioProps, RadioStyleProps } from './RadioTypes';

const useClasses = (styleProps: RadioStyleProps) => {
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

const cssVars = createCssVars(COMPONENT_NAME, ['iconSize', 'gap']);

const CheckboxRoot = styled('label', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  ...cssVars.style({
    iconSize: 22,
    gap: theme.spacing(1)
  }),
  ...theme.typography.body1,
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

const CheckboxIcon = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})(({ theme }) => ({
  flex: 'none',
  color: theme.palette.text.icon,
  width: cssVars.value('iconSize'),
  height: cssVars.value('iconSize'),
  ['& > *']: { display: 'block', width: '100%', height: '100%' },
  [`.${radioClasses.checked} > &, .${radioClasses.indeterminate} > &`]: {
    color: theme.palette.primary.main
  },
  [`.${radioClasses.disabled} > & `]: {
    color: theme.palette.action.disabled
  }
}));

const CheckboxInput = styled('input', {
  name: COMPONENT_NAME,
  slot: 'Input'
})({
  display: 'none'
});

const CheckboxContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  flex: '0 1 auto',
  fontSize: 'inherit',
  paddingLeft: cssVars.value('gap')
});

const Checkbox = React.forwardRef<HTMLLabelElement, RadioProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      checked: checkedProp,
      className,
      defaultChecked: defaultCheckedProp = false,
      disabled: disabledProp,
      indeterminate = false,
      icon,
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

    const renderIcon = () => {
      if (typeof icon === 'function') {
        return icon(checked, indeterminate);
      }
      if (checked) {
        return <CheckCircleFill />;
      } else if (indeterminate) {
        return <RecordCircle />;
      } else {
        return <Circle />;
      }
    };

    return (
      <CheckboxRoot
        className={css(classes.root, className)}
        style={style}
        ref={ref}
        {...rest}
      >
        <CheckboxInput
          type="radio"
          id={id}
          name={name}
          className={classes.input}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <CheckboxIcon className={classes.icon}>{renderIcon()}</CheckboxIcon>
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
