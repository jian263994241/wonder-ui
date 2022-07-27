import * as React from 'react';
import InputNumber, {
  InputNumberAction,
  InputNumberProps
} from '../InputNumber';
import StepButton from '../StepButton';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  useStepperCssVars,
  stepperCssVars
} from './StepperClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { CSSObject } from '@wonder-ui/styled';
import { useControlled } from '@wonder-ui/hooks';
import type { StepperProps } from './StepperTypes';

const useClasses = (styleProps: StepperProps) => {
  const {
    classes,
    disabled,
    disableInput,
    disableMinusButton,
    disablePlusButton
  } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled'],
    input: ['input', disableInput && 'disableInput'],
    minus: [
      'button',
      'minus',
      disableMinusButton && 'disabled',
      disableMinusButton && 'disableMinusButton'
    ],
    plus: [
      'button',
      'plus',
      disablePlusButton && 'disabled',
      disablePlusButton && 'disablePlusButton'
    ]
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const StepperRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: StepperProps }>(({ theme, styleProps }) => ({
  display: 'inline-flex',
  ...(styleProps.disabled && {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none'
  })
}));

const commomButtonStyles: CSSObject = {
  width: stepperCssVars.value('height'),
  height: stepperCssVars.value('height'),
  backgroundColor: stepperCssVars.value('bgColor'),
  borderRadius: stepperCssVars.value('borderRadius'),

  '&:active': {
    opacity: 0.7
  },
  '&:before, &:after': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: stepperCssVars.value('buttonColor'),
    transform: 'translate(-50%, -50%)',
    content: '""',
    width: '50%',
    height: 1
  }
};

const StepperMinus = styled(StepButton, {
  name: COMPONENT_NAME,
  slot: 'Minus'
})<{ styleProps: StepperProps }>(({ styleProps }) => ({
  ...commomButtonStyles,

  ...((!styleProps.hideInput || !styleProps.hidePlusButton) && {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }),

  '&:after': {
    display: 'none'
  }
}));

const StepperPlus = styled(StepButton, {
  name: COMPONENT_NAME,
  slot: 'Plus'
})<{ styleProps: StepperProps }>(({ styleProps }) => ({
  ...commomButtonStyles,

  ...((!styleProps.hideInput || !styleProps.hideMinusButton) && {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }),

  '&:after': {
    height: '50%',
    width: 1
  }
}));

const StepperInputNumber = styled(InputNumber, {
  name: COMPONENT_NAME,
  slot: 'InputNumber'
})<{ styleProps: StepperProps }>(({ styleProps }) => ({
  width: `calc(${stepperCssVars.value('height')} * 1.5)`,
  height: stepperCssVars.value('height'),
  margin: `0 ${stepperCssVars.value('gap')}`,
  color: stepperCssVars.value('textColor'),
  fontSize: stepperCssVars.value('fontSize'),
  textAlign: 'center',
  backgroundColor: stepperCssVars.value('bgColor'),

  ...(styleProps.disableInput && {
    pointerEvents: 'none'
  })
}));

const Stepper = React.forwardRef<HTMLElement, StepperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiStepper' });
  const {
    InputNumberProps,
    className,
    defaultValue: defaultValueProp,
    disableInput = false,
    disableMinusButton = false,
    disablePlusButton = false,
    disabled = false,
    hideInput = false,
    hideMinusButton = false,
    hidePlusButton = false,
    max = Infinity,
    min = 0,
    onChange,
    step = 1,
    stepDelay = 800,
    stepInterval = 150,
    value: valueProp,
    defaultValue = min,
    ...rest
  } = props;

  const [value, setValueIfuncontrolled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const inputActionRef = React.useRef<InputNumberAction>(null);

  const handleMinus = () => inputActionRef.current?.onInternalStep(false);

  const handlePlus = () => inputActionRef.current?.onInternalStep(true);

  const handleChange: InputNumberProps['onChange'] = (value) => {
    setValueIfuncontrolled(value);

    onChange?.(value);
  };

  const styleProps = {
    ...props,
    disabled,
    disableInput,
    disableMinusButton: disableMinusButton || value <= min,
    disablePlusButton: disablePlusButton || value >= max,
    hideMinusButton,
    hidePlusButton,
    hideInput
  };

  const classes = useClasses(styleProps);

  useStepperCssVars();

  return (
    <StepperRoot
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      styleProps={styleProps}
      {...rest}
    >
      {!hideMinusButton && (
        <StepperMinus
          className={classes.minus}
          onStep={handleMinus}
          interval={stepInterval}
          delay={stepDelay}
          disabled={disableMinusButton}
          styleProps={styleProps}
        />
      )}
      <StepperInputNumber
        borderless
        type="number"
        role="spinbutton"
        inputMode="decimal"
        actionRef={inputActionRef}
        {...InputNumberProps}
        onChange={handleChange}
        style={{
          ...InputNumberProps?.style,
          ...(hideInput && { display: 'none' })
        }}
        className={css(classes.input, InputNumberProps?.className)}
        styleProps={styleProps}
        disableStepHandler
        value={value}
        step={step}
        min={min}
        max={max}
      />
      {!hidePlusButton && (
        <StepperPlus
          className={classes.plus}
          onStep={handlePlus}
          interval={stepInterval}
          delay={stepDelay}
          disabled={disablePlusButton}
          styleProps={styleProps}
        />
      )}
    </StepperRoot>
  );
});

export default Stepper;
