import * as React from 'react';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, toNumber } from '@wonder-ui/utils';
import { CSSObject } from '@wonder-ui/styled';
import { stepperClasses, useClasses } from './StepperClasses';
import { Theme } from '../styles/createTheme';
import { useControlled } from '@wonder-ui/hooks';
import numeral from 'numeral';
import InputBase, { InputBaseProps, InputBaseAction } from '../InputBase';

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  InputProps?: Partial<InputBaseProps>;
  className?: string;
  classes?: Partial<typeof stepperClasses>;
  defaultValue?: number | string;
  disableInput?: boolean;
  disableMinusButton?: boolean;
  disablePlusButton?: boolean;
  disabled?: boolean;
  hideInput?: boolean;
  hideMinusButton?: boolean;
  hidePlusButton?: boolean;
  max?: number | string;
  min?: number | string;
  onChange?: (value: number) => void;
  ref?: React.Ref<HTMLDivElement>;
  step?: number | string;
  style?: React.CSSProperties;
  value?: number | string;
}

export interface StepperStyleProps extends StepperProps {}

const StepperRoot = styled('div', {
  name: 'Stepper',
  slot: 'Root'
})<{ styleProps: StepperStyleProps }>(({ styleProps }) => ({
  ...(styleProps.disabled && {
    opacity: 0.3,
    pointerEvents: 'none'
  })
}));

const commomButtonStyles = (theme: Theme): CSSObject => ({
  position: 'relative',
  boxSizing: 'border-box',
  width: 28,
  height: 28,
  margin: 0,
  padding: 0,
  verticalAlign: 'middle',
  border: 0,
  backgroundColor: theme.palette.background.default,
  opacity: 1,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:active': {
    opacity: 0.7
  },
  '&:before, &:after': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: 'currentColor',
    transform: 'translate(-50%, -50%)',
    content: '""',
    width: '50%',
    height: 1
  }
});

const StepperMinus = styled(ButtonBase, {
  name: 'Stepper',
  slot: 'Minus'
})<{ styleProps: StepperStyleProps }>(({ theme, styleProps }) => ({
  ...commomButtonStyles(theme),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  '&:after': {
    display: 'none'
  },
  ...(styleProps.disableMinusButton && {
    opacity: 0.5,
    pointerEvents: 'none'
  })
}));

const StepperPlus = styled(ButtonBase, {
  name: 'Stepper',
  slot: 'Plus'
})<{ styleProps: StepperStyleProps }>(({ theme, styleProps }) => ({
  ...commomButtonStyles(theme),
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  '&:after': {
    height: '50%',
    width: 1
  },
  ...(styleProps.disablePlusButton && {
    opacity: 0.5,
    pointerEvents: 'none'
  })
}));

const StepperInput = styled(InputBase, {
  name: 'Stepper',
  slot: 'Input'
})<{ styleProps: StepperStyleProps }>(({ theme, styleProps }) => ({
  boxSizing: 'border-box',
  width: 32,
  height: 28,
  margin: '0 2px',
  padding: 0,
  color: theme.palette.text.primary,
  fontSize: 14,
  lineHeight: 'normal',
  textAlign: 'center',
  verticalAlign: 'middle',
  backgroundColor: theme.palette.background.default,
  border: 0,
  borderWidth: '1px 0',
  borderRadius: 0,
  appearance: 'none',
  outline: 0,
  ...(styleProps.disableInput && {
    pointerEvents: 'none'
  })
}));

const Stepper = React.forwardRef<HTMLElement, StepperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiStepper' });
  const {
    InputProps,
    className,
    defaultValue: defaultValueProp,
    disableInput = false,
    disableMinusButton = false,
    disablePlusButton = false,
    disabled = false,
    hideInput = false,
    hideMinusButton = false,
    hidePlusButton = false,
    max: maxProp,
    min: minProp,
    onChange,
    step: stepProp,
    value: valueProp,
    ...rest
  } = props;

  const max = toNumber(maxProp || Infinity);
  const min = toNumber(minProp || 0);
  const step = toNumber(stepProp || 1);
  const defaultValue = toNumber(defaultValueProp || min);
  const inputActionRef = React.useRef<InputBaseAction>(null);

  const format = (value: number) => numeral(value).format(`${step}`);

  const [valueState, setValueIfunControlled] = useControlled<any>({
    defaultValue: format(defaultValue),
    value: valueProp
  });
  const valueRef = React.useRef<number>(valueState);

  const value = toNumber(valueState);
  const isMax = value === max;
  const isMin = value === min;

  const setValue = (value: number) => {
    let _value;

    if (value >= min && value <= max) {
      _value = value;
    } else if (value >= max) {
      _value = max;
    } else {
      _value = min;
    }

    valueRef.current = _value;

    setValueIfunControlled(_value);

    if (onChange) {
      onChange(_value);
    }
  };

  const handleMinus = React.useCallback(() => {
    const _value = numeral(value).subtract(step).value() || valueRef.current;
    setValue(_value);
  }, [value, step]);

  const handlePlus = React.useCallback(() => {
    const _value = numeral(value).add(step).value() || valueRef.current;

    setValue(_value);
  }, [value, step]);

  const handleChange = React.useCallback(
    (e) => {
      const target = e.target as HTMLInputElement;
      setValueIfunControlled(target.value);
    },
    [disableInput]
  );

  const handleBlur = React.useCallback((e) => {
    const target = e.target as HTMLInputElement;
    const _value = numeral(target.value).value() || valueRef.current;

    setValue(_value);

    if (InputProps?.onBlur) {
      InputProps?.onBlur(e);
    }
  }, []);

  const handleFocus = React.useCallback((e) => {
    setTimeout(() => {
      inputActionRef.current?.select();
    }, 0);

    if (InputProps?.onFocus) {
      InputProps?.onFocus(e);
    }
  }, []);

  const styleProps = {
    ...props,
    disabled,
    disableInput,
    disableMinusButton: disableMinusButton || isMin,
    disablePlusButton: disablePlusButton || isMax
  };

  const classes = useClasses(styleProps);

  return (
    <StepperRoot
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      styleProps={styleProps}
      {...rest}
    >
      {!hideMinusButton && (
        <StepperMinus
          disableRipple
          className={classes.minus}
          onClick={handleMinus}
          styleProps={styleProps}
        />
      )}
      {!hideInput && (
        <StepperInput
          type="number"
          role="spinbutton"
          inputMode="decimal"
          actionRef={inputActionRef}
          {...InputProps}
          aria-valuemin={min}
          aria-valuenow={valueState}
          aria-valuemax={max}
          className={css(classes.input, InputProps?.className)}
          value={valueState}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          styleProps={styleProps}
        />
      )}
      {!hidePlusButton && (
        <StepperPlus
          disableRipple
          className={classes.plus}
          onClick={handlePlus}
          styleProps={styleProps}
        />
      )}
    </StepperRoot>
  );
});

export default Stepper;
