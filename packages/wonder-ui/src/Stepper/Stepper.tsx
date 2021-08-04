import * as React from 'react';
import InputNumber, {
  InputNumberAction,
  InputNumberProps
} from '../InputNumber';
import StepButton from '../StepButton';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { CSSObject } from '@wonder-ui/styled';
import { stepperClasses, useClasses } from './StepperClasses';
import { Theme } from '../styles/createTheme';
import { useControlled } from '@wonder-ui/hooks';

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * InputNumber 属性
   */
  InputNumberProps?: Partial<InputNumberProps>;
  classes?: Partial<typeof stepperClasses>;
  /**
   * 初始值
   */
  defaultValue?: number | string;
  /**
   * 禁用输入框
   */
  disableInput?: boolean;
  /**
   * 禁用减
   */
  disableMinusButton?: boolean;
  /**
   * 禁用加
   */
  disablePlusButton?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 隐藏输入框
   */
  hideInput?: boolean;
  /**
   * 隐藏减
   */
  hideMinusButton?: boolean;
  /**
   * 隐藏加
   */
  hidePlusButton?: boolean;
  /**
   * 最大值
   */
  max?: number | string;
  /**
   * 最小值
   * @default 0
   */
  min?: number | string;
  /**
   * 值改变的时候回调
   */
  onChange?: (value: number) => void;
  /**
   * 步长
   * @default 1
   */
  step?: number | string;
  /**
   * 当前值
   */
  value?: number | string;
}

export interface StepperStyleProps extends StepperProps {}

const StepperRoot = styled('div', {
  name: 'Stepper',
  slot: 'Root'
})<{ styleProps: StepperStyleProps }>(({ styleProps }) => ({
  display: 'inline-flex',
  ...(styleProps.disabled && {
    opacity: 0.3,
    pointerEvents: 'none'
  })
}));

const commomButtonStyles = (theme: Theme): CSSObject => ({
  display: 'inline-block',
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

const StepperMinus = styled(StepButton, {
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

const StepperPlus = styled(StepButton, {
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

const StepperInputNumber = styled(InputNumber, {
  name: 'Stepper',
  slot: 'InputNumber'
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
    disablePlusButton: disablePlusButton || value >= max
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
          className={classes.minus}
          onStep={handleMinus}
          styleProps={styleProps}
        />
      )}
      <StepperInputNumber
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
        defaultValue={defaultValue}
        // onChange={onChange}
        disabledActiveStyle
        step={step}
        min={min}
        max={max}
      />
      {!hidePlusButton && (
        <StepperPlus
          className={classes.plus}
          onStep={handlePlus}
          styleProps={styleProps}
        />
      )}
    </StepperRoot>
  );
});

export default Stepper;
