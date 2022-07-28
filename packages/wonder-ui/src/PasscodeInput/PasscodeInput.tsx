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
import {
  COMPONENT_NAME,
  passcodeInputClasses,
  passcodeInputCssVars,
  usePasscodeInputCssVars
} from './PasscodeInputClasses';
import { useControlled, useForkRef } from '@wonder-ui/hooks';
import type { PasscodeInputProps, StyleProps } from './PasscodeInputTypes';
import { keyframes } from '@wonder-ui/styled';
import { hideVisually } from 'polished';

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
})({
  position: 'relative',
  display: 'block',
  userSelect: 'none'
});

const PasscodeInputCells = styled('div', {
  slot: 'Cells',
  name: COMPONENT_NAME
})<StyleProps>(({ styleProps }) => ({
  display: 'inline-flex',
  verticalAlign: 'top',
  ...(!styleProps.seperated && {
    borderRadius: passcodeInputCssVars.value('borderRadius'),
    overflow: 'hidden',
    border: `1px solid ${passcodeInputCssVars.value('borderColor')}`,
    ...(styleProps.focused && {
      borderColor: passcodeInputCssVars.value('focusedBorderColor'),
      boxShadow: `0 0 3px 0 ${passcodeInputCssVars.value(
        'focusedBorderColor'
      )}`,
      outline: 'none'
    }),
    ...(styleProps.error && {
      borderColor: passcodeInputCssVars.value('errorBorderColor'),
      boxShadow: `0 0 2px 0 ${passcodeInputCssVars.value('errorBorderColor')}`
    })
  }),
  [`.${passcodeInputClasses.error} &`]: {
    animation: `175ms ease-in-out 0s 2 normal none running ${shakeX}`
  }
}));

const PasscodeInputCell = styled('div', {
  slot: 'Cell',
  name: COMPONENT_NAME
})<StyleProps>(({ styleProps }) => ({
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: passcodeInputCssVars.value('cellSize'),
  height: passcodeInputCssVars.value('cellSize'),
  background: passcodeInputCssVars.value('bgColor'),
  color: passcodeInputCssVars.value('textColor'),
  ...(styleProps.seperated
    ? {
        borderRadius: passcodeInputCssVars.value('borderRadius'),
        border: `1px solid ${passcodeInputCssVars.value('borderColor')}`,
        '&:not(:last-child)': {
          marginRight: passcodeInputCssVars.value('cellGap')
        },
        ...(styleProps.focused && {
          borderColor: passcodeInputCssVars.value('focusedBorderColor'),
          boxShadow: `0 0 2px 0 ${passcodeInputCssVars.value(
            'focusedBorderColor'
          )}`,
          outline: 'none'
        }),
        ...(styleProps.error && {
          borderColor: passcodeInputCssVars.value('errorBorderColor'),
          boxShadow: `0 0 2px 0 ${passcodeInputCssVars.value(
            'errorBorderColor'
          )}`
        })
      }
    : {
        '&:not(:last-child)': {
          borderRight: `1px solid ${passcodeInputCssVars.value('borderColor')}`,
          ...(styleProps.error && {
            borderRight: `1px solid ${passcodeInputCssVars.value(
              'errorBorderColor'
            )}`
          })
        }
      }),

  ...(styleProps.dot && {
    '&:before': {
      content: `''`,
      width: passcodeInputCssVars.value('dotSize'),
      height: passcodeInputCssVars.value('dotSize'),
      borderRadius: '50%',
      background: passcodeInputCssVars.value('textColor')
    }
  }),
  ...(styleProps.caret && {
    '&:after': {
      content: `''`,
      width: 2,
      height: '1.1em',
      marginLeft: 1,
      background: passcodeInputCssVars.value('caretColor'),
      animation: `1.2s linear infinite ${caretBlink}`
    }
  })
}));

const PasscodeInputInput = styled('input', {
  slot: 'Input',
  name: COMPONENT_NAME
})(hideVisually());

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

    usePasscodeInputCssVars();

    return (
      <PasscodeInputRoot
        tabIndex={0}
        ref={handleRef}
        className={css(classes.root, className, {
          [classes.focused]: !seperated && focused
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      >
        <PasscodeInputCells className={classes.cells} styleProps={styleProps}>
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
