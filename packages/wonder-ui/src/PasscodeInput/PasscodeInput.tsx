import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  clamp,
  composeClasses,
  createArray,
  css,
  nextTick
} from '@wonder-ui/utils';
import { COMPONENT_NAME, passcodeInputClasses } from './PasscodeInputClasses';
import { useControlled, useForkRef } from '@wonder-ui/hooks';
import type { PasscodeInputProps, StyleProps } from './PasscodeInputTypes';
import { keyframes } from '@wonder-ui/styled';

const useClasses = (props: StyleProps) => {
  const { classes, seperated, error } = props.styleProps;

  const slots = {
    root: ['root', seperated && 'seperated', error && 'error'],
    cells: ['cells'],
    cell: ['cell'],
    input: ['input'],
    dot: ['dot'],
    focused: ['focused']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const defaultLength = 6;

const caretBlink = keyframes`
from {
  opacity: 1;
}
60% {
  opacity: 1;
}
80% {
  opacity: 0;
}
to {
  opacity: 0;
}`;

const shakeX = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;

const PasscodeInputRoot = styled('div', {
  slot: 'Root',
  name: COMPONENT_NAME
})<StyleProps>(({ styleProps, theme }) => ({
  position: 'relative',
  display: 'inline-block',
  userSelect: 'none',

  ...(!styleProps.seperated && {
    borderRadius: `var(--passcode-input-border-radius, 8px)`,
    overflow: 'hidden',
    border: `thin solid var(--passcode-input-border-color, ${theme.palette.divider})`,
    ...(styleProps.focused && {
      borderColor: `var(--passcode-input-border-color-focused, ${theme.palette.primary.main})`,
      boxShadow: `0 0 2px 0 var(--passcode-input-border-color-focused, ${theme.palette.primary.main})`,
      outline: 'none'
    })
  }),

  [`&.${passcodeInputClasses.error}`]: {
    ...(styleProps.seperated
      ? {
          animation: `175ms ease-in-out 0s 2 normal none running ${shakeX}`
        }
      : {
          borderColor: `var(--passcode-input-error-color, ${theme.palette.danger.main})`,
          boxShadow: `0 0 2px 0 var(--passcode-input-error-color, ${theme.palette.danger.main})`,
          animation: `175ms ease-in-out 0s 2 normal none running ${shakeX}`
        })
  }
}));

const PasscodeInputCells = styled('div', {
  slot: 'Cells',
  name: COMPONENT_NAME
})({
  display: 'inline-flex',
  verticalAlign: 'top'
});

const PasscodeInputCell = styled('div', {
  slot: 'Cell',
  name: COMPONENT_NAME
})<StyleProps>(({ theme, styleProps }) => ({
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: `var(--passcode-input-cell-size, 40px)`,
  height: `var(--passcode-input-cell-size, 40px)`,
  background: theme.palette.background.paper,
  color: `var(--passcode-input-text-color, ${theme.palette.text.primary})`,
  ...(styleProps.seperated
    ? {
        borderRadius: `var(--passcode-input-border-radius, 8px)`,
        border: `1px solid var(--passcode-input-border-color, ${theme.palette.divider})`,
        '&:not(:last-child)': {
          marginRight: `var(--passcode-input-cell-gap, 6px)`
        },
        ...(styleProps.focused && {
          borderColor: `var(--passcode-input-border-color-focused, ${theme.palette.primary.main})`,
          boxShadow: `0 0 2px 0 var(--passcode-input-border-color-focused, ${theme.palette.primary.main})`,
          outline: 'none'
        }),
        ...(styleProps.error && {
          borderColor: `var(--passcode-input-error-color, ${theme.palette.danger.main})`,
          boxShadow: `0 0 2px 0 var(--passcode-input-error-color, ${theme.palette.danger.main})`
        })
      }
    : {
        '&:not(:last-child)': {
          borderRight: `1px solid var(--passcode-input-border-color, ${theme.palette.divider})`
        }
      }),

  ...(styleProps.dot && {
    '&:before': {
      content: `''`,
      width: `var(--dot-size, 10px)`,
      height: `var(--dot-size, 10px)`,
      borderRadius: ' 50%',
      background: `var(--passcode-input-text-color, ${theme.palette.text.primary})`
    }
  }),
  ...(styleProps.caret && {
    '&:after': {
      content: `''`,
      width: 2,
      height: '1.1em',
      marginLeft: 1,
      background: `var(--passcode-input-caret-color, ${theme.palette.primary.main})`,
      animation: `1.2s linear infinite ${caretBlink}`
    }
  })
}));

const PasscodeInputInput = styled('input', {
  slot: 'Input',
  name: COMPONENT_NAME
})({
  position: 'absolute',
  left: '-200vw',
  top: 0,
  display: 'block',
  width: 50,
  height: 20,
  opacity: 0.5
});

const PasscodeInput = React.forwardRef<HTMLDivElement, PasscodeInputProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      className,
      defaultValue = '',
      value: valueProp,
      length = defaultLength,
      caret = true,
      clearText = false,
      error = false,
      seperated = false,
      readOnly,
      disabled,
      onChange,
      onFinish,
      onFocus,
      onBlur,
      ...rest
    } = props;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [focused, setFocused] = React.useState(false);
    const [value, setValue] = useControlled<string>({
      defaultValue,
      value: valueProp,
      onChange
    });

    const cellLength = React.useMemo(() => {
      return typeof length === 'number' && length > 0 && length < Infinity
        ? Math.floor(length)
        : defaultLength;
    }, [length]);

    React.useEffect(() => {
      if (value.length >= cellLength) {
        onFinish?.(value);
      }
    }, [value, cellLength, onFinish]);

    const cells = React.useMemo(() => {
      const chars = value.split('');
      const caretIndex = chars.length; // 光标位置index等于当前文字长度
      const focusedIndex = clamp(chars.length, 0, cellLength - 1);

      return createArray(cellLength, (i) => ({
        caret: caret && caretIndex === i && focused,
        dot: !clearText && !!chars[i],
        focused: focusedIndex === i && focused,
        text: chars[i] && clearText ? chars[i] : ''
      }));
    }, [caret, value, clearText, focused]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value.slice(0, cellLength));
    };

    const handleFocus = () => {
      inputRef.current?.focus();

      setFocused(true);
      onFocus?.();

      nextTick(() => {
        if (!readOnly) {
          rootRef.current?.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth'
          });
        }
      });
    };

    const handleBlur = () => {
      setFocused(false);
      onBlur?.();
    };

    const styleProps = {
      ...props,
      clearText,
      seperated,
      caret,
      focused,
      error
    };
    const classes = useClasses({ styleProps });

    return (
      <PasscodeInputRoot
        tabIndex={0}
        ref={handleRef}
        className={css(classes.root, className, {
          [classes.focused]: !seperated && focused
        })}
        styleProps={styleProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      >
        <PasscodeInputCells className={classes.cells}>
          {cells.map((cell, index) => (
            <PasscodeInputCell
              key={index}
              className={css(classes.cell, {
                [classes.focused]: cell.focused,
                [classes.dot]: cell.dot
              })}
              styleProps={{
                ...styleProps,
                caret: cell.caret,
                focused: cell.focused,
                dot: cell.dot
              }}
            >
              {cell.text}
            </PasscodeInputCell>
          ))}
        </PasscodeInputCells>
        <PasscodeInputInput
          ref={inputRef}
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          className={classes.input}
          value={value}
          maxLength={cellLength}
          onChange={handleInputChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </PasscodeInputRoot>
    );
  }
);

export default PasscodeInput;
