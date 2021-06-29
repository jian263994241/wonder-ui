import * as React from 'react';
import ClearButton from './ClearButton';
import styled from '../styles/styled';
import TextareaAutosize from './TextareaAutosize';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { composeClasses, css, generateUtilityClasses } from '@wonder-ui/utils';
import { InputFocusOptions, resolveOnChange, triggerFocus } from './inputUtils';
import { useControlled, useForkRef } from '@wonder-ui/hooks';

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

const componentName = 'WuiInput';

export const inputClasses = generateUtilityClasses(componentName, [
  'root',
  'input',
  'prefix',
  'suffix',
  'clearButton',
  'borderless',
  'multiline',
  'disabled',
  'focused',
  'resizable',
  'readonly'
]);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  actionRef?: React.Ref<InputAction | undefined>;
  allowClear?: boolean;
  borderless?: boolean;
  classes?: Partial<typeof inputClasses>;
  disabled?: boolean;
  disabledActiveStyle?: boolean;
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
    readOnly
  } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      multiline && 'multiline',
      multiline && resizable && 'resizable',
      borderless && 'borderless',
      readOnly && 'readonly',
      focused && 'focused'
    ],
    input: ['input'],
    prefix: ['prefix'],
    suffix: ['suffix'],
    clearButton: ['clearButton']
  };

  return composeClasses(componentName, slots, classes);
};

export const InputRoot = styled('div', {
  name: componentName,
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
  height: styleProps.multiline ? 'auto' : 32,
  padding: '0 8px',
  margin: 0,
  ...((!!styleProps.prefix || !!styleProps.onRenderPrefix) && {
    paddingLeft: 0
  }),

  ...((!!styleProps.suffix ||
    !!styleProps.onRenderSuffix ||
    styleProps.allowClear) && {
    paddingRight: 0
  }),

  transition: theme.transitions.create(['border-color', 'box-shadow']),

  ...(!styleProps.borderless && {
    border: 'thin solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,

    ...(!styleProps.disabled &&
      !styleProps.disabledActiveStyle && {
        ...(styleProps.focused && {
          borderColor: alpha(theme.palette.primary.main, 0.9),
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`
        })
      }),

    ...(styleProps.readOnly && {
      cursor: 'default'
    }),

    ...(styleProps.disabled && {
      cursor: 'not-allowed',
      color: theme.palette.text.disabled
    })
  })
}));

export const InputInput = styled('input', {
  name: componentName,
  slot: 'Input'
})<{ styleProps: InputStyleProps }>(({ theme, styleProps }) => {
  const light = theme.palette.mode === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };

  return {
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
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
    margin: '4px 0',
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
  name: componentName,
  slot: 'ClearButton'
})({
  flexShrink: 1,
  fontSize: 18
});

const InputPrefix = styled('span', {
  name: componentName,
  slot: 'Prefix'
})({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  paddingLeft: 8,
  paddingRight: 4,
  '& > * +  *': {
    marginLeft: 4
  }
});

const InputSuffix = styled('span', {
  name: componentName,
  slot: 'Suffix'
})({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  paddingRight: 8,
  paddingLeft: 4,
  '& > * +  *': {
    marginLeft: 4
  }
});

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: componentName });
    const {
      actionRef,
      allowClear = false,
      autoComplete = 'off',
      borderless = false,
      className,
      style,
      disabled = false,
      disabledActiveStyle = false,
      multiline = false,
      maxRows,
      minRows = 2,
      resizable = false,
      readOnly = false,
      required,
      prefix,
      suffix,
      onBlur,
      onClick,
      onFocus,
      onRenderPrefix,
      onRenderSuffix,
      value: valueProp,
      defaultValue = '',
      onChange,
      parser,
      formatter,
      ...rest
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleRef = useForkRef(inputRef, ref);
    const [focused, setFocused] = React.useState(false);
    const [value, setValueIfunControlled] = useControlled({
      value: valueProp,
      defaultValue
    });

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
      focused
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

    React.useImperativeHandle(actionRef, () => action, [inputRef]);

    const handleChange = React.useCallback((e) => {
      const _value =
        formatter && parser ? parser(e.target.value) : e.target.value;

      setValueIfunControlled(_value);
      resolveOnChange(inputRef.current!, e, onChange, _value);
    }, []);

    const handleFocus = React.useCallback((event) => {
      setFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    }, []);

    const handleBlur = React.useCallback((event) => {
      setFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    }, []);

    const handleClick = React.useCallback((event) => {
      action.focus();
      if (onClick) {
        onClick(event);
      }
    }, []);

    const handleReset = React.useCallback((e) => {
      setValueIfunControlled('');
      action.focus();
      resolveOnChange(inputRef.current!, e, onChange);
    }, []);

    return (
      <InputRoot
        className={css(className, classes.root)}
        style={style}
        styleProps={styleProps}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {(prefix || onRenderPrefix) && (
          <InputPrefix className={classes.prefix}>
            {onRenderPrefix ? onRenderPrefix(styleProps) : prefix}
          </InputPrefix>
        )}

        <InputInput
          autoComplete={autoComplete}
          type="text"
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

        {(suffix || onRenderSuffix || allowClear) && (
          <InputSuffix className={classes.suffix}>
            {allowClear && !!value && (
              <InputClearButton
                className={classes.clearButton}
                onClick={handleReset}
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
