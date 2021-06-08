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
import { emphasize } from '../styles/colorManipulator';

export interface StepperProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'children' | 'onChange'> {
  InputProps?: Omit<React.HTMLProps<HTMLInputElement>, 'as'>;
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
  onChange?: (value: string) => void;
  ref?: React.Ref<any>;
  step?: number | string;
  value?: number | string;
}

const StepperRoot = styled('div', {
  name: 'Stepper',
  slot: 'Root'
})({
  [`&.${stepperClasses.disabled}`]: {
    opacity: 0.3,
    pointerEvents: 'none'
  }
});

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
  '&:active': {
    backgroundColor: emphasize(theme.palette.background.default, 0.1)
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
})(({ theme }) => ({
  ...commomButtonStyles(theme),
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  '&:after': {
    display: 'none'
  },
  [`&.${stepperClasses.disableMinusButton}`]: {
    opacity: 0.5,
    pointerEvents: 'none'
  }
}));

const StepperPlus = styled(ButtonBase, {
  name: 'Stepper',
  slot: 'Plus'
})(({ theme }) => ({
  ...commomButtonStyles(theme),
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  '&:after': {
    height: '50%',
    width: 1
  },
  [`&.${stepperClasses.disablePlusButton}`]: {
    opacity: 0.5,
    pointerEvents: 'none'
  }
}));

const StepperInput = styled('input', {
  name: 'Stepper',
  slot: 'Input'
})(({ theme }) => ({
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

  [`&.${stepperClasses.disableInput}`]: {
    pointerEvents: 'none'
  },
  /** hide arrows */
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  },
  '&[type=number]': {
    MozAppearance: 'textfield'
  }
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

  const isRange = (value: number) => {
    return value >= min && value <= max;
  };

  const format = (value: number) => numeral(value).format(`${step}`);

  const [valueState, setValueIfunControlled] = useControlled<any>({
    defaultValue: format(defaultValue),
    value: valueProp
  });

  const value = toNumber(valueState);
  const isMax = value === max;
  const isMin = value === min;

  const setValue = (value: number) => {
    const _value = numeral(value).format(`${step}`);
    setValueIfunControlled(_value);
    if (onChange) {
      onChange(_value);
    }
  };

  const handleMinus = React.useCallback(() => {
    const _value = numeral(value).subtract(step).value() || 0;
    if (isRange(_value)) {
      setValue(_value);
    }
  }, [value, step]);

  const handlePlus = React.useCallback(() => {
    const _value = numeral(value).add(step).value() || 0;

    if (isRange(_value)) {
      setValue(_value);
    }
  }, [value, step]);

  const handleChange = React.useCallback((e) => {
    const target = e.target as HTMLInputElement;
    setValueIfunControlled(target.value);
  }, []);

  const handleBlur = React.useCallback((e) => {
    const target = e.target as HTMLInputElement;
    const _value = numeral(target.value).value() || 0;
    if (isRange(_value)) {
      setValue(_value);
    } else if (_value >= max) {
      setValue(max);
    } else {
      setValue(min);
    }

    if (InputProps?.onBlur) {
      InputProps?.onBlur(e);
    }
  }, []);

  const handleFocus = React.useCallback((e) => {
    setTimeout(() => {
      e.target.select();
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
      {...rest}
    >
      {!hideMinusButton && (
        <StepperMinus
          disableRipple
          className={classes.minus}
          onClick={handleMinus}
        />
      )}
      {!hideInput && (
        <StepperInput
          type="number"
          role="spinbutton"
          inputMode="decimal"
          {...InputProps}
          aria-valuemin={min}
          aria-valuenow={valueState}
          aria-valuemax={max}
          className={css(classes.input, InputProps?.className)}
          value={valueState}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {!hidePlusButton && (
        <StepperPlus
          disableRipple
          className={classes.plus}
          onClick={handlePlus}
        />
      )}
    </StepperRoot>
  );
});

export default Stepper;
