import * as React from 'react';
import ClearButton from './ClearButton';
import RevealButton from './RevealButton';
import styled from '../styles/styled';
import TextareaAutosize from './TextareaAutosize';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  nextTick
} from '@wonder-ui/utils';
import { InputFocusOptions, resolveOnChange, triggerFocus } from './inputUtils';
import {
  useControlled,
  useEventCallback,
  useForkRef,
  useSafeState
} from '@wonder-ui/hooks';

export interface InputAction {
  focus(option?: InputFocusOptions): void;
  blur(): void;
  select(): void;
  setSelectionRange(
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none'
  ): void;
}

const COMPONENT_NAME = 'WuiInput';

export const inputClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'prefix',
  'suffix',
  'clearButton',
  'revealButton',
  'borderless',
  'multiline',
  'disabled',
  'focused',
  'resizable',
  'readonly',
  'hasError'
]);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  actionRef?: React.Ref<InputAction | undefined>;
  allowClear?: boolean;
  borderless?: boolean;
  classes?: Partial<typeof inputClasses>;
  component?: React.ElementType;
  disabled?: boolean;
  disabledActiveStyle?: boolean;
  error?: boolean;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  resizable?: boolean;
  suffix?: React.ReactNode;
  onRenderPrefix?(props: InputProps): React.ReactNode;
  onRenderSuffix?(props: InputProps): React.ReactNode;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  /** Transform `display value` to value */
  parser?: (displayValue: any) => any;
  /** Transform `value` to display value show in input */
  formatter?: (value: any) => string;
}

export interface InputStyleProps extends InputProps {
  focused?: boolean;
}

const useClasses = (styleProps: InputStyleProps) => {
  const {
    borderless,
    classes,
    disabled,
    focused,
    multiline,
    resizable,
    readOnly,
    error
  } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      multiline && 'multiline',
      multiline && resizable && 'resizable',
      borderless && 'borderless',
      readOnly && 'readonly',
      focused && 'focused',
      error && 'hasError'
    ],
    input: ['input'],
    prefix: ['prefix'],
    suffix: ['suffix'],
    clearButton: ['clearButton'],
    revealButton: ['revealButton']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

export const InputRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: InputStyleProps }>(({ theme, styleProps }) => ({
  font: 'inherit',
  letterSpacing: 'inherit',
  color: 'currentColor',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  position: 'relative',
  overflow: 'hidden',
  WebkitTapHighlightColor: 'transparent',
  width: '100%',
  height: styleProps.multiline ? 'auto' : theme.typography.pxToRem(32),
  padding: theme.spacing(0, 1),
  margin: 0,

  transition: theme.transitions.create(['border-color', 'box-shadow']),

  ...(!styleProps.borderless && {
    border: 'thin solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,

    ...(styleProps.error && {
      borderColor: theme.palette.error.main
    }),

    ...(!styleProps.disabled &&
      !styleProps.disabledActiveStyle && {
        ...(styleProps.focused && {
          borderColor: alpha(theme.palette.primary.main, 0.9),
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`
        })
      })
  }),
  ...(styleProps.readOnly && {
    cursor: 'default'
  }),

  ...(styleProps.disabled && {
    cursor: 'not-allowed',
    color: theme.palette.text.disabled
  })
}));

export const InputInput = styled('input', {
  name: COMPONENT_NAME,
  slot: 'Input'
})<{ styleProps: InputStyleProps }>(({ theme, styleProps }) => {
  const light = theme.palette.mode === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.38 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    }),

    ...(styleProps.error && {
      color: theme.palette.error.main,
      opacity: 1
    })
  };

  return {
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
    ...(styleProps.error && {
      color: theme.palette.error.main
    }),
    cursor: 'inherit',
    textAlign: 'inherit',
    background: 'inherit',
    boxShadow: 'none',
    boxSizing: 'border-box',
    borderRadius: 0,
    border: 0,
    textOverflow: 'ellipsis',
    outline: 0,
    position: 'relative',
    width: '100%',
    minWidth: 0,
    maxHeight: '100%',
    lineHeight: 'inherit',
    margin: theme.spacing(0.5, 0),
    padding: 0,
    top: !!styleProps.multiline ? -1 : 0,

    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder, // Firefox 19+
    '&:-ms-input-placeholder': placeholder, // IE11
    '&::-ms-input-placeholder': placeholder, // Edge
    '&:focus': {
      outline: 0
    },
    // Reset Firefox invalid required input style
    '&:invalid': {
      boxShadow: 'none'
    },
    '&::-webkit-search-decoration': {
      // Remove the padding when type=search.
      appearance: 'none'
    },
    '&::-webkit-search-cancel-button': {
      // Remove the cancel button when type=search.
      appearance: 'none'
    },
    /** hide arrows */
    '&::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0
    },
    '&::-webkit-inner-spin-button': {
      appearance: 'none',
      margin: 0
    },
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '&[type=search]': {
      // Improve type search style.
      appearance: 'textfield'
    },
    '&[type=number]': {
      appearance: 'textfield'
    },
    '&[disabled]': {
      opacity: 1, // Reset iOS opacity
      WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug
    },

    ...(styleProps.multiline && {
      height: 'auto',
      resize: styleProps.resizable ? 'vertical' : 'none',
      paddingTop: 0
    })
  };
});

const InputClearButton = styled(ClearButton, {
  name: COMPONENT_NAME,
  slot: 'ClearButton'
})(({ theme }) => ({
  flexShrink: 1,
  fontSize: theme.typography.pxToRem(15)
}));

const InputRevealButton = styled(RevealButton, {
  name: COMPONENT_NAME,
  slot: 'RevealButton'
})(({ theme }) => ({
  flexShrink: 1,
  fontSize: theme.typography.pxToRem(14)
}));

const InputPrefix = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Prefix'
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  paddingRight: theme.spacing(0.5),
  '& > * +  *': {
    marginLeft: theme.spacing(0.5)
  }
}));

const InputSuffix = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Suffix'
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  paddingLeft: theme.spacing(0.5),
  '& > * +  *': {
    marginLeft: theme.spacing(0.5)
  }
}));

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      allowClear = false,
      autoComplete = 'off',
      borderless = false,
      className,
      component,
      defaultValue = '',
      disabled = false,
      disabledActiveStyle = false,
      error = false,
      formatter,
      maxRows,
      minRows = 2,
      multiline = false,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      onPressEnter,
      onCompositionStart,
      onCompositionEnd,
      onRenderPrefix,
      onRenderSuffix,
      parser,
      prefix,
      readOnly = false,
      required,
      resizable = false,
      style,
      suffix,
      tabIndex,
      type,
      value: valueProp,
      ...rest
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleRef = useForkRef(inputRef, ref);
    const [focused, setFocused] = useSafeState(false);
    const [value, setValueIfunControlled] = useControlled({
      value: valueProp,
      defaultValue
    });

    const [isRevealingPassword, setRevealingPassword] = useSafeState(false);

    let InputComponent: React.ElementType = 'input';
    let inputProps: Record<string, any> = {};

    if (multiline) {
      inputProps = { type: undefined, maxRows, minRows };
      InputComponent = TextareaAutosize;
    }

    const styleProps = {
      ...props,
      multiline,
      disabled,
      disabledActiveStyle,
      resizable,
      borderless,
      readOnly,
      focused,
      error
    };

    const classes = useClasses(styleProps);

    const action = {
      focus(option?: InputFocusOptions) {
        triggerFocus(inputRef.current, option);
      },
      blur() {
        inputRef.current?.blur();
      },
      setSelectionRange(
        start: number,
        end: number,
        direction?: 'forward' | 'backward' | 'none'
      ) {
        inputRef.current?.setSelectionRange(start, end, direction);
      },
      select() {
        inputRef.current?.select();
      }
    };

    React.useImperativeHandle(actionRef, () => action, [inputRef, value]);

    const handleChange = useEventCallback((e) => {
      const _value =
        formatter && parser ? parser(e.target.value) : e.target.value;

      setValueIfunControlled(_value);
      resolveOnChange(inputRef.current!, e, onChange, _value);
    });

    const handleFocus = useEventCallback((event) => {
      setFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    });

    const handleBlur = useEventCallback((event) => {
      setFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    });

    const handleClick = useEventCallback((event) => {
      if (readOnly) {
        action.blur();
      } else {
        action.focus();
      }

      if (onClick) {
        onClick(event);
      }
    });

    const handleKeyDown = useEventCallback((event) => {
      if (onPressEnter && event.keyCode === 13) {
        onPressEnter(event);
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    });

    const handleReset = useEventCallback((e) => {
      setValueIfunControlled('');
      action.focus();
      resolveOnChange(inputRef.current!, e, onChange);
    });

    const handleReveal = useEventCallback(() => {
      setRevealingPassword(!isRevealingPassword, () => {
        action.focus({ cursor: 'end' });
      });
    });

    return (
      <InputRoot
        as={component}
        className={css(className, classes.root)}
        style={style}
        styleProps={styleProps}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        tabIndex={disabledActiveStyle ? -1 : tabIndex}
      >
        {(prefix || onRenderPrefix) && (
          <InputPrefix className={classes.prefix}>
            {onRenderPrefix ? onRenderPrefix(styleProps) : prefix}
          </InputPrefix>
        )}

        <InputInput
          autoComplete={autoComplete}
          type={isRevealingPassword ? 'text' : type}
          required={required}
          {...inputProps}
          {...rest}
          styleProps={styleProps}
          className={classes.input}
          as={InputComponent}
          disabled={disabled}
          readOnly={readOnly}
          ref={handleRef}
          value={formatter && parser ? formatter(value) : value}
          onChange={handleChange}
        />

        {(suffix || onRenderSuffix || allowClear || type === 'password') && (
          <InputSuffix className={classes.suffix}>
            {allowClear && !!value && (
              <InputClearButton
                className={classes.clearButton}
                onClick={handleReset}
              />
            )}

            {type === 'password' && (
              <InputRevealButton
                onClick={handleReveal}
                visible={isRevealingPassword}
                className={classes.revealButton}
              />
            )}

            {onRenderSuffix ? onRenderSuffix(styleProps) : suffix}
          </InputSuffix>
        )}
      </InputRoot>
    );
  }
);

export default InputBase;
