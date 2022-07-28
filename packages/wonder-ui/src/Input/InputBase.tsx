import * as React from 'react';
import ClearButton from './ClearButton';
import RevealButton from './RevealButton';
import Space from '../Space/Space';
import styled from '../styles/styled';
import TextareaAutosize from './TextareaAutosize';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { capitalize, composeClasses, css } from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  inputClasses,
  inputCssVars,
  useInputCssVars
} from './InputClasses';
import { resolveOnChange, triggerFocus } from './inputUtils';
import {
  useControlled,
  useEventCallback,
  useForkRef,
  useSafeState
} from '@wonder-ui/hooks';
import { useListContext } from '../List/ListContext';
import type {
  InputFocusOptions,
  InputProps,
  InputStyleProps
} from './InputTypes';

const useClasses = (styleProps: InputStyleProps) => {
  const {
    borderless,
    classes,
    disabled,
    focused,
    multiline,
    resizable,
    readOnly,
    size,
    error
  } = styleProps;

  const slots = {
    root: [
      'root',
      !borderless && 'bordered',
      disabled && 'disabled',
      multiline && 'multiline',
      multiline && resizable && 'resizable',

      readOnly && 'readonly',
      focused && 'focused',
      error && 'hasError',
      size && `size${capitalize(size)}`
    ],
    input: ['input'],
    prefix: ['prefix'],
    suffix: ['suffix'],
    clearButton: ['clearButton'],
    revealButton: ['revealButton']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const InputRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  margin: 0,
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
  height: inputCssVars.value('height'),
  border: inputCssVars.value('border', 'none'),
  borderRadius: inputCssVars.value('borderRadius', '0px'),
  padding: `${inputCssVars.value(
    'paddingVertical',
    '0px'
  )} ${inputCssVars.value('paddingHorizontal', '0px')}`,
  boxShadow: inputCssVars.value('boxShadow', 'none'),

  transition: theme.transitions.create(['border-color', 'box-shadow']),
  backgroundColor: inputCssVars.value('bgColor'),

  [`&.${inputClasses.sizeSmall}`]: inputCssVars.style({
    height: inputCssVars.value('sizeSmall')
  }),
  [`&.${inputClasses.sizeMiddle}`]: inputCssVars.style({
    height: inputCssVars.value('sizeMiddle')
  }),
  [`&.${inputClasses.sizeLarge}`]: inputCssVars.style({
    height: inputCssVars.value('sizeLarge')
  }),

  [`&&.${inputClasses.multiline}`]: inputCssVars.style({
    height: 'auto'
  }),

  [`&.${inputClasses.bordered}`]: inputCssVars.style({
    border: `1px solid ${inputCssVars.value('borderColor')}`,
    borderRadius: theme.shape.borderRadius,
    paddingVertical: 0,
    paddingHorizontal: 8
  }),

  [`&.${inputClasses.bordered}.${inputClasses.multiline}`]: inputCssVars.style({
    paddingVertical: 4,
    paddingHorizontal: 8
  }),

  [`&.${inputClasses.bordered}.${inputClasses.hasError}`]: inputCssVars.style({
    borderColor: theme.palette.error.main,
    textColor: theme.palette.error.main
  }),

  [`&.${inputClasses.bordered}.${inputClasses.focused}:not(.${inputClasses.readonly}):not(.${inputClasses.disabled})
  `]: inputCssVars.style({
    borderColor: alpha(theme.palette.primary.main, 0.9),
    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`
  }),

  [`&.${inputClasses.disabled}`]: {
    cursor: 'not-allowed'
  }
}));

const InputInput = styled('input', {
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
    color: inputCssVars.value('textColor', 'currentColor'),
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
    padding: 0,
    top: 0,

    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder, // Firefox 19+
    '&::-ms-input-placeholder': placeholder, // Edge

    '& > textarea::-webkit-input-placeholder': placeholder,
    '& > textarea::-moz-placeholder': placeholder, // Firefox 19+
    '& > textarea::-ms-input-placeholder': placeholder, // Edge

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

    [`.${inputClasses.multiline} > &`]: {
      height: 'auto',
      resize: styleProps.resizable ? 'vertical' : 'none',
      paddingTop: 0,
      top: -1
    }
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
  color: theme.palette.text.icon,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  paddingRight: theme.spacing(0.5),
  '& > * +  *': {
    marginLeft: theme.spacing(0.5)
  }
}));

const InputSuffix = styled(Space, {
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
    const listContext = useListContext();
    const inList = listContext != null;

    const {
      actionRef,
      allowClear = false,
      autoComplete = 'off',
      borderless = inList ? true : false,
      className,
      component,
      defaultValue = '',
      disabled = false,
      error = false,
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
      onRenderRevealButton,
      prefix,
      readOnly = false,
      required,
      resizable = false,
      size = inList ? 'small' : 'middle',
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
      resizable,
      borderless,
      readOnly,
      focused,
      error,
      size
    };

    const classes = useClasses(styleProps);

    useInputCssVars();

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

    const removePasswordTimeout = React.useRef<NodeJS.Timeout>();

    const clearPasswordValueAttribute = () => {
      removePasswordTimeout.current = setTimeout(() => {
        if (
          inputRef.current &&
          inputRef.current.getAttribute('type') === 'password' &&
          inputRef.current.hasAttribute('value')
        ) {
          inputRef.current.removeAttribute('value');
        }
      });
    };

    const handleChange = useEventCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // const _value =
        //   formatter && parser ? parser(e.target.value) : e.target.value;
        setValueIfunControlled(e.target.value);
        resolveOnChange(inputRef.current!, e, onChange);
      }
    );

    const handleKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onPressEnter && e.key === 'Enter') {
          onPressEnter(e);
        }
        onKeyDown?.(e);
      }
    );

    const handleFocus = useEventCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true, clearPasswordValueAttribute);

        onFocus?.(e);
      }
    );

    const handleBlur = useEventCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false, clearPasswordValueAttribute);

        onBlur?.(e);
      }
    );

    const handleClick = useEventCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (readOnly) {
          action.blur();
        }

        onClick?.(e);
      }
    );

    const handleReset = useEventCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setValueIfunControlled('', () => action.focus());

        resolveOnChange(inputRef.current!, e, onChange);
      }
    );

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
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        tabIndex={disabled || readOnly ? -1 : tabIndex}
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
          // value={formatter && parser ? formatter(value) : value}
          value={value}
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

            {type === 'password' &&
              (onRenderRevealButton ? (
                onRenderRevealButton({
                  onClick: handleReveal,
                  visible: isRevealingPassword,
                  className: classes.revealButton
                })
              ) : (
                <InputRevealButton
                  onClick={handleReveal}
                  visible={isRevealingPassword}
                  className={classes.revealButton}
                />
              ))}

            {onRenderSuffix ? onRenderSuffix(styleProps) : suffix}
          </InputSuffix>
        )}
      </InputRoot>
    );
  }
);

export default InputBase;
