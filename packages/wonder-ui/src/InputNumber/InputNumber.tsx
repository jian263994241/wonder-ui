import * as React from 'react';
import ArrowForward from '../ArrowForward';
import getMiniDecimal, {
  DecimalClass,
  toFixed,
  ValueType
} from './utils/MiniDecimal';
import Input, { inputClasses, InputProps, InputAction } from '../Input';
import StepButton from '../StepButton';
import styled from '../styles/styled';
import {
  css,
  generateUtilityClasses,
  mergedRef,
  forwardRef,
  composeClasses
} from '@wonder-ui/utils';
import {
  getNumberPrecision,
  num2str,
  validateNumber
} from './utils/numberUtil';
import { useCursor, useEventCallback, useUpdateEffect } from '@wonder-ui/hooks';
// https://github.com/react-component/input-number/blob/master/src/InputNumber.tsx

/**
 * We support `stringMode` which need handle correct type when user call in onChange
 */
const getDecimalValue = (stringMode: boolean, decimalValue: DecimalClass) => {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }

  return decimalValue.toNumber();
};

const getDecimalIfValidate = (value: ValueType) => {
  const decimal = getMiniDecimal(value);
  return decimal.isInvalidate() ? null : decimal;
};

const COMPONENT_NAME = 'WuiInputNumber';

export const inputNumberClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'notNumber',
  'outOfRange'
]);

export interface InputNumberAction {
  focus(): void;
  blur(): void;
  onInternalStep(up: boolean, focus?: boolean): void;
}

export interface InputNumberProps
  extends Omit<
    InputProps,
    | 'value'
    | 'defaultValue'
    | 'onInput'
    | 'onChange'
    | 'formatter'
    | 'parser'
    | 'actionRef'
  > {
  actionRef?: React.Ref<InputNumberAction | null>;

  classes?: Partial<typeof inputClasses & typeof inputNumberClasses>;
  /** value will show as string */
  stringMode?: boolean;

  disableStepHandler?: boolean;

  defaultValue?: ValueType;
  value?: ValueType;

  className?: string;
  style?: React.CSSProperties;
  min?: ValueType;
  max?: ValueType;
  step?: ValueType;
  tabIndex?: number;

  // Customize handler node
  upHandler?: React.ReactNode;
  downHandler?: React.ReactNode;
  keyboard?: boolean;

  /** Parse display value to validate number */
  parser?: (displayValue: string | undefined) => ValueType;
  /** Transform `value` to display value show in input */
  formatter?: (
    value: any,
    info: { userTyping: boolean; input: string }
  ) => string;
  /** Syntactic sugar of `formatter`. Config precision of display. */
  precision?: number;
  /** Syntactic sugar of `formatter`. Config decimal separator of display. */
  decimalSeparator?: string;

  onInput?: (text: string) => void;
  onChange?: (value: any) => void;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;

  onStep?: (
    value: any,
    info: { offset: ValueType; type: 'up' | 'down' }
  ) => void;
}

export interface InputNumberStyleProps extends InputNumberProps {
  notNumber?: boolean;
  outOfRange?: boolean;
}

const useClasses = (styleProps: InputNumberStyleProps) => {
  const { classes, notNumber, outOfRange } = styleProps;
  const slots = {
    root: ['root', notNumber && 'notNumber', outOfRange && 'outOfRange']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const InputNumberRoot = styled(Input, {
  name: COMPONENT_NAME,
  slot: 'Root',
  shouldForwardProp: () => true
})<{
  styleProps: InputNumberStyleProps;
}>(({ styleProps, theme }) => ({
  [`&.${inputNumberClasses.outOfRange} > .${inputClasses.input}`]: {
    color: theme.palette.error.main
  },
  ...(!styleProps.disableStepHandler && {
    [`& > .${inputClasses.suffix}`]: {
      paddingRight: 0
    }
  })
}));

const InputNumberStepHandler = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Handler'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 22,
  height: '100%',
  borderLeft: 'thin solid',
  borderColor: theme.palette.divider,
  marginRight: -8
}));

const InputNumberStepHandlerUp = styled(StepButton, {
  name: COMPONENT_NAME,
  slot: 'HandlerUp'
})(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '50%',
  textAlign: 'center',
  borderBottom: 'thin solid',
  borderColor: theme.palette.divider,
  fontSize: '0.8em'
}));

const InputNumberStepHandlerDown = styled(StepButton, {
  name: COMPONENT_NAME,
  slot: 'HandlerDown'
})({
  display: 'block',
  width: '100%',
  height: '50%',
  textAlign: 'center',
  fontSize: '0.8em'
});

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      actionRef,
      className,
      classes: classesProp,
      style,
      min,
      max,
      step = 1,
      disableStepHandler = false,
      defaultValue,
      value,
      disabled,
      readOnly,
      upHandler,
      downHandler,
      keyboard,

      stringMode,

      parser,
      formatter,
      precision = -1,
      decimalSeparator,

      onChange,
      onInput,
      onPressEnter,
      onStep,

      suffix,
      ...rest
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const inputActionRef = React.useRef<InputAction>(null);

    const [focus, setFocus] = React.useState(false);

    const userTypingRef = React.useRef(false);
    const compositionRef = React.useRef(false);

    // ============================ Value =============================
    // Real value control
    const [decimalValue, setDecimalValue] = React.useState<DecimalClass>(() =>
      getMiniDecimal(value ?? defaultValue!)
    );

    function setUncontrolledDecimalValue(newDecimal: DecimalClass) {
      if (value === undefined) {
        setDecimalValue(newDecimal);
      }
    }

    // ====================== Parser & Formatter ======================
    /**
     * `precision` is used for formatter & onChange.
     * It will auto generate by `value` & `step`.
     * But it will not block user typing.
     *
     * Note: Auto generate `precision` is used for legacy logic.
     * We should remove this since we already support high precision with BigInt.
     *
     * @param number  Provide which number should calculate precision
     * @param userTyping  Change by user typing
     */
    const getPrecision = React.useCallback(
      (numStr: string, userTyping: boolean) => {
        if (userTyping) {
          return undefined;
        }

        if (precision >= 0) {
          return precision;
        }

        return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
      },
      [precision, step]
    );

    // >>> Parser
    const mergedParser = React.useCallback(
      (num: string | number) => {
        const numStr = String(num);

        if (parser) {
          return parser(numStr);
        }

        let parsedStr = numStr;
        if (decimalSeparator) {
          parsedStr = parsedStr.replace(decimalSeparator, '.');
        }

        // [Legacy] We still support auto convert `$ 123,456` to `123456`
        return parsedStr.replace(/[^\w.-]+/g, '');
      },
      [parser, decimalSeparator]
    );

    // >>> Formatter
    const inputValueRef = React.useRef<string | number>('');
    const mergedFormatter = React.useCallback(
      (number: string, userTyping: boolean) => {
        if (formatter) {
          return formatter(number, {
            userTyping,
            input: String(inputValueRef.current)
          });
        }

        let str = typeof number === 'number' ? num2str(number) : number;

        // User typing will not auto format with precision directly
        if (!userTyping) {
          const mergedPrecision = getPrecision(str, userTyping);

          if (
            validateNumber(str) &&
            mergedPrecision &&
            (decimalSeparator || mergedPrecision >= 0)
          ) {
            // Separator
            const separatorStr = decimalSeparator || '.';

            str = toFixed(str, separatorStr, mergedPrecision);
          }
        }

        return str;
      },
      [formatter, getPrecision, decimalSeparator]
    );

    // ========================== InputValue ==========================
    /**
     * Input text value control
     *
     * User can not update input content directly. It update with follow rules by priority:
     *  1. controlled `value` changed
     *    * [SPECIAL] Typing like `1.` should not immediately convert to `1`
     *  2. User typing with format (not precision)
     *  3. Blur or Enter trigger revalidate
     */
    const [inputValue, setInternalInputValue] = React.useState<string | number>(
      () => {
        const initValue = defaultValue ?? value!;
        if (
          decimalValue.isInvalidate() &&
          ['string', 'number'].includes(typeof initValue)
        ) {
          return Number.isNaN(initValue) ? '' : initValue;
        }
        return mergedFormatter(decimalValue.toString(), false);
      }
    );
    inputValueRef.current = inputValue;

    // Should always be string
    function setInputValue(newValue: DecimalClass, userTyping: boolean) {
      setInternalInputValue(
        mergedFormatter(
          // Invalidate number is sometime passed by external control, we should let it go
          // Otherwise is controlled by internal interactive logic which check by userTyping
          // You can ref 'show limited value when input is not focused' test for more info.
          newValue.isInvalidate()
            ? newValue.toString(false)
            : newValue.toString(!userTyping),
          userTyping
        )
      );
    }

    // >>> Max & Min limit
    const maxDecimal = React.useMemo(() => getDecimalIfValidate(max!), [max]);
    const minDecimal = React.useMemo(() => getDecimalIfValidate(min!), [min]);

    const upDisabled = React.useMemo(() => {
      if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) {
        return false;
      }

      return maxDecimal.lessEquals(decimalValue);
    }, [maxDecimal, decimalValue]);

    const downDisabled = React.useMemo(() => {
      if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) {
        return false;
      }

      return decimalValue.lessEquals(minDecimal);
    }, [minDecimal, decimalValue]);

    // Cursor controller
    const [recordCursor, restoreCursor] = useCursor(inputRef.current, focus);

    // ============================= Data =============================
    /**
     * Find target value closet within range.
     * e.g. [11, 28]:
     *    3  => 11
     *    23 => 23
     *    99 => 28
     */
    const getRangeValue = (target: DecimalClass) => {
      // target > max
      if (maxDecimal && !target.lessEquals(maxDecimal)) {
        return maxDecimal;
      }

      // target < min
      if (minDecimal && !minDecimal.lessEquals(target)) {
        return minDecimal;
      }

      return null;
    };

    /**
     * Check value is in [min, max] range
     */
    const isInRange = (target: DecimalClass) => !getRangeValue(target);

    /**
     * Trigger `onChange` if value validated and not equals of origin.
     * Return the value that re-align in range.
     */
    const triggerValueUpdate = (
      newValue: DecimalClass,
      userTyping: boolean
    ): DecimalClass => {
      let updateValue = newValue;

      let isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();

      // Skip align value when trigger value is empty.
      // We just trigger onChange(null)
      // This should not block user typing
      if (!updateValue.isEmpty() && !userTyping) {
        // Revert value in range if needed
        updateValue = getRangeValue(updateValue) || updateValue;
        isRangeValidate = true;
      }

      if (!readOnly && !disabled && isRangeValidate) {
        const numStr = updateValue.toString();
        const mergedPrecision = getPrecision(numStr, userTyping);
        if (mergedPrecision && mergedPrecision >= 0) {
          updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision));
        }

        // Trigger event
        if (!updateValue.equals(decimalValue)) {
          setUncontrolledDecimalValue(updateValue);
          onChange?.(
            updateValue.isEmpty()
              ? null
              : getDecimalValue(stringMode!, updateValue)
          );

          // Reformat input if value is not controlled
          if (value === undefined) {
            setInputValue(updateValue, userTyping);
          }
        }

        return updateValue;
      }

      return decimalValue;
    };

    // ========================== User Input ==========================
    // >>> Collect input value
    const collectInputValue = (inputStr: string) => {
      recordCursor();

      // Update inputValue incase input can not parse as number
      setInternalInputValue(inputStr);

      // Parse number
      if (!compositionRef.current) {
        const finalValue = mergedParser(inputStr);
        const finalDecimal = getMiniDecimal(finalValue);
        if (!finalDecimal.isNaN()) {
          triggerValueUpdate(finalDecimal, true);
        }
      }
    };

    // >>> Composition
    const onCompositionStart = () => {
      compositionRef.current = true;
    };

    const onCompositionEnd = () => {
      compositionRef.current = false;
      if (inputRef.current) {
        collectInputValue(inputRef.current.value);
      }
    };

    // >>> Input
    const onInternalInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      let inputStr = e.target.value;

      // optimize for chinese input experience
      // https://github.com/ant-design/ant-design/issues/8196
      if (!parser) {
        inputStr = inputStr.replace(/。/g, '.');
      }

      collectInputValue(inputStr);

      // Trigger onInput later to let user customize value if they want do handle something after onChange
      onInput?.(inputStr);
    };

    // ============================= Step =============================
    const onInternalStep = useEventCallback((up: boolean, focus?: boolean) => {
      // Ignore step since out of range
      if ((up && upDisabled) || (!up && downDisabled)) {
        return;
      }

      // Clear typing status since it may caused by up & down key.
      // We should sync with input value.
      userTypingRef.current = false;

      let stepDecimal = getMiniDecimal(step);
      if (!up) {
        stepDecimal = stepDecimal.negate();
      }

      const target = (decimalValue || getMiniDecimal(0)).add(
        stepDecimal.toString()
      );

      const updatedValue = triggerValueUpdate(target, false);

      onStep?.(getDecimalValue(stringMode!, updatedValue), {
        offset: step,
        type: up ? 'up' : 'down'
      });
      if (focus) {
        inputRef.current?.focus();
      }
    });

    // ============================ Flush =============================
    /**
     * Flush current input content to trigger value change & re-formatter input if needed
     */
    const flushInputValue = (userTyping: boolean) => {
      const parsedValue = getMiniDecimal(mergedParser(inputValue));
      let formatValue: DecimalClass = parsedValue;

      if (!parsedValue.isNaN()) {
        // Only validate value or empty value can be re-fill to inputValue
        // Reassign the formatValue within ranged of trigger control
        formatValue = triggerValueUpdate(parsedValue, userTyping);
      } else {
        formatValue = decimalValue;
      }

      if (value !== undefined) {
        // Reset back with controlled value first
        setInputValue(decimalValue, false);
      } else if (!formatValue.isNaN()) {
        // Reset input back since no validate value
        setInputValue(formatValue, false);
      }
    };

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
      useEventCallback((event) => {
        userTypingRef.current = true;

        if (event.key === 'Enter') {
          if (!compositionRef.current) {
            userTypingRef.current = false;
          }
          flushInputValue(true);
          onPressEnter?.(event);
        }

        if (keyboard === false) {
          return;
        }

        // Do step
        if (
          !compositionRef.current &&
          (['ArrowUp', 'ArrowDown'] as any).includes(event.key)
        ) {
          onInternalStep('ArrowUp' === event.key);
          event.preventDefault();
        }
      });

    const onKeyUp = () => {
      userTypingRef.current = false;
    };

    // >>> Focus & Blur
    const onBlur = () => {
      flushInputValue(false);

      setFocus(false);

      userTypingRef.current = false;
    };

    // ========================== Controlled ==========================
    // Input by precision
    useUpdateEffect(() => {
      if (!decimalValue.isInvalidate()) {
        setInputValue(decimalValue, false);
      }
    }, [precision]);

    // Input by value
    useUpdateEffect(() => {
      const newValue = getMiniDecimal(value!);
      setDecimalValue(newValue);

      // When user typing from `1.2` to `1.`, we should not convert to `1` immediately.
      // But let it go if user set `formatter`
      if (newValue.isNaN() || !userTypingRef.current || formatter) {
        // Update value as effect
        setInputValue(newValue, userTypingRef.current);
      }
    }, [value]);

    // ============================ Cursor ============================
    useUpdateEffect(() => {
      if (formatter) {
        restoreCursor();
      }
    }, [inputValue]);

    const styleProps = {
      ...props,
      disableStepHandler,
      notNumber: decimalValue.isNaN(),
      outOfRange: !decimalValue.isInvalidate() && !isInRange(decimalValue)
    };

    const classes = useClasses(styleProps);

    const inputNumberAction: InputNumberAction = {
      focus() {
        inputActionRef.current?.focus();
      },
      blur() {
        inputActionRef.current?.blur();
      },
      onInternalStep
    };

    React.useImperativeHandle(actionRef, () => inputNumberAction, []);

    // ============================ Render ============================

    return (
      <InputNumberRoot
        actionRef={inputActionRef}
        autoComplete="off"
        role="spinbutton"
        aria-valuemin={min as any}
        aria-valuemax={max as any}
        aria-valuenow={
          decimalValue.isInvalidate() ? null : (decimalValue.toString() as any)
        }
        step={step}
        {...rest}
        ref={mergedRef(inputRef, ref)}
        value={inputValue}
        onChange={onInternalInput}
        disabled={disabled}
        readOnly={readOnly}
        classes={{
          ...classesProp,
          root: css(classes.root, className)
        }}
        style={style}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        styleProps={styleProps}
        suffix={
          disableStepHandler ? (
            suffix
          ) : (
            <React.Fragment>
              {suffix}
              {
                <InputNumberStepHandler>
                  {upHandler || (
                    <InputNumberStepHandlerUp
                      disabled={upDisabled}
                      onStep={() => onInternalStep(true, true)}
                    >
                      <ArrowForward fontSize="inherit" direction="up" />
                    </InputNumberStepHandlerUp>
                  )}

                  {downHandler || (
                    <InputNumberStepHandlerDown
                      disabled={downDisabled}
                      onStep={() => onInternalStep(false, true)}
                    >
                      <ArrowForward fontSize="inherit" direction="down" />
                    </InputNumberStepHandlerDown>
                  )}
                </InputNumberStepHandler>
              }
            </React.Fragment>
          )
        }
      />
    );
  }
);

export default InputNumber;
