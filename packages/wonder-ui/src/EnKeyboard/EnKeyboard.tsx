import * as React from 'react';
import Button from '../Button';
import ButtonBase from '../ButtonBase';
import KeyboardModal, {
  KeyboardModalAction
} from '../NumberKeyboard/KeyboardModal';
import Navbar from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  globalClasses
} from '@wonder-ui/utils';
import {
  EnKeyboardClasses,
  EnKeyboardProps,
  KeyConfig
} from './EnKeyboardTypes';
import { IconDelete, IconUpper, IconUpperFill } from '../NumberKeyboard/icons';
import { useReactive } from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiEnKeyboard';

const enKeyboartClasses: EnKeyboardClasses = generateUtilityClasses(
  COMPONENT_NAME,
  [
    'root',
    'header',
    'body',
    'keys',
    'key',
    'close',
    'delete',
    'enter',
    'shift',
    'number',
    'space'
  ]
);

const useClasses = (styleProps: EnKeyboardProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    header: ['header'],
    body: ['body'],
    keys: ['keys'],
    key: ['key'],
    delete: ['delete'],
    enter: ['enter'],
    shift: ['shift'],
    space: ['space'],
    number: ['number'],
    close: ['close']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const EnKeyboardRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  width: '100%',
  pointerEvents: 'auto',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.default,
  paddingBottom: `calc(${theme.spacing(2)}px + env(safe-area-inset-bottom))`
}));

const NumberKeyboardHeader = styled(Navbar, {
  name: COMPONENT_NAME,
  slot: 'Header'
})({});

const NumberKeyboardBody = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Body'
})(({ theme }) => ({
  padding: theme.spacing(1, 1, 0, 1),
  [`.${enKeyboartClasses.header} + &`]: {
    paddingTop: 0
  }
}));

const NumberKeyboardKeys = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Keys'
})(({ theme }) => ({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  justifyContent: 'center',
  '& + &': {
    marginTop: theme.spacing(1)
  }
}));

const EnKeyboardButton = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Button'
})<{ special?: boolean }>(({ theme }) => {
  const mode = theme.palette.mode;

  return {
    fontSize: theme.typography.pxToRem(20),
    minWidth: theme.typography.pxToRem(22),
    minHeight: theme.typography.pxToRem(42),
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: theme.palette[mode].main,
    borderRadius: 8,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: theme.spacing(1),

    [`&.${enKeyboartClasses.shift}`]: {
      fontSize: theme.typography.pxToRem(16),
      flex: 2
    },
    [`&.${enKeyboartClasses.delete}`]: {
      flex: 2
    },
    [`&.${enKeyboartClasses.number}`]: {
      fontSize: theme.typography.pxToRem(16),
      flex: 1
    },
    [`&.${enKeyboartClasses.enter}`]: {
      flex: 1,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.pxToRem(16),
      [`&.${globalClasses.active}`]: {
        backgroundColor: theme.palette.primary.dark
      }
    },
    [`&.${enKeyboartClasses.space}`]: {
      fontSize: theme.typography.pxToRem(16),
      flex: 2
    },

    '&:first-of-type': {
      marginLeft: 0
    },
    [`&.${globalClasses.active}`]: {
      backgroundColor: theme.palette[mode].dark
    }
  };
});

const EnKeyboard = React.forwardRef<HTMLDivElement, EnKeyboardProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      closeButtonText = '关闭',
      enterButtonText = '完成',
      onClose,
      onDelete,
      onEnter,
      onInput,
      showCloseKey = false,
      spaceButtonText = '空格',
      theme,
      title,
      className,
      valuePropName = 'value',
      triggerName = 'onClick',
      style
    } = props;

    const state = useReactive({
      localUpperCase: false,
      moreSymbol: false,
      numberPad: false
    });

    const keyboardModalAction = React.useRef<KeyboardModalAction>();

    const classes = useClasses(props);

    const renderKey = (keys: string, localUpperCase?: boolean) => {
      return keys.split('').map((key, index) => {
        const currentKey = localUpperCase ? key.toLocaleUpperCase() : key;
        return (
          <EnKeyboardButton
            className={classes.key}
            onClick={() => hanldeInput({ text: currentKey })}
            key={index}
            disableRipple
          >
            {currentKey}
          </EnKeyboardButton>
        );
      });
    };

    const toggleUpperCase = () => {
      state.localUpperCase = !state.localUpperCase;
    };

    const toggleSymbol = () => {
      state.moreSymbol = !state.moreSymbol;
    };

    const toggleNumberPad = () => {
      state.numberPad = !state.numberPad;
      state.localUpperCase = false;
      state.moreSymbol = false;
    };

    const hanldeInput = (key: KeyConfig) => {
      if (key.type === 'enter') {
        keyboardModalAction.current?.close();
        return onEnter?.();
      }

      if (key.type === 'close') {
        keyboardModalAction.current?.close();
        return onClose?.();
      }

      if (key.type === 'delete') {
        keyboardModalAction.current?.setInnerValue((prevValue) => {
          return prevValue.slice(0, prevValue.length - 1);
        });

        return onDelete?.();
      }

      onInput?.(key.text!);

      keyboardModalAction.current?.setInnerValue((prevValue) => {
        if (key.text == '.' && prevValue.indexOf('.') > -1) {
          return prevValue;
        }

        return prevValue + key.text;
      });
    };

    const renderEnPad = () => (
      <NumberKeyboardBody className={classes.body}>
        <NumberKeyboardKeys className={classes.keys}>
          {renderKey('qwertyuiop', state.localUpperCase)}
        </NumberKeyboardKeys>
        <NumberKeyboardKeys
          className={classes.keys}
          style={{ padding: theme.spacing(0, 2) }}
        >
          {renderKey('asdfghjkl', state.localUpperCase)}
        </NumberKeyboardKeys>
        <NumberKeyboardKeys className={classes.keys}>
          <EnKeyboardButton
            disableRipple
            className={classes.shift}
            onClick={toggleUpperCase}
          >
            {state.localUpperCase ? <IconUpperFill /> : <IconUpper />}
          </EnKeyboardButton>
          {renderKey('zxcvbnm', state.localUpperCase)}
          <EnKeyboardButton
            className={classes.delete}
            onClick={() => hanldeInput({ type: 'delete' })}
            disableRipple
          >
            <IconDelete />
          </EnKeyboardButton>
        </NumberKeyboardKeys>
        <NumberKeyboardKeys className={classes.keys}>
          <EnKeyboardButton
            className={classes.number}
            onClick={toggleNumberPad}
            disableRipple
          >
            .?123
          </EnKeyboardButton>
          <EnKeyboardButton
            className={classes.space}
            onClick={() => hanldeInput({ text: ' ' })}
            disableRipple
          >
            {spaceButtonText}
          </EnKeyboardButton>
          <EnKeyboardButton
            className={classes.enter}
            onClick={() => hanldeInput({ type: 'enter' })}
            disableRipple
          >
            {enterButtonText}
          </EnKeyboardButton>
        </NumberKeyboardKeys>
      </NumberKeyboardBody>
    );

    const renderNumberPad = () => (
      <NumberKeyboardBody className={classes.body}>
        <NumberKeyboardKeys className={classes.keys}>
          {state.moreSymbol ? renderKey('[]{}#%^*+=') : renderKey('1234567890')}
        </NumberKeyboardKeys>
        <NumberKeyboardKeys
          className={classes.keys}
          style={{ padding: theme.spacing(0, 4) }}
        >
          {state.moreSymbol ? renderKey('_|~<>€£￥⦁') : renderKey('-/:()$&@"')}
        </NumberKeyboardKeys>
        <NumberKeyboardKeys className={classes.keys}>
          <EnKeyboardButton
            disableRipple
            className={classes.shift}
            onClick={toggleSymbol}
          >
            {state.moreSymbol ? '123' : '#+='}
          </EnKeyboardButton>
          {renderKey(".,?!'")}
          <EnKeyboardButton
            className={classes.delete}
            onClick={() => hanldeInput({ type: 'delete' })}
            disableRipple
          >
            <IconDelete />
          </EnKeyboardButton>
        </NumberKeyboardKeys>
        <NumberKeyboardKeys className={classes.keys}>
          <EnKeyboardButton
            className={classes.number}
            onClick={toggleNumberPad}
            disableRipple
          >
            ABC
          </EnKeyboardButton>
          <EnKeyboardButton
            className={classes.space}
            onClick={() => hanldeInput({ text: ' ' })}
            disableRipple
          >
            {spaceButtonText}
          </EnKeyboardButton>
          <EnKeyboardButton
            className={classes.enter}
            onClick={() => hanldeInput({ type: 'enter' })}
            disableRipple
          >
            {enterButtonText}
          </EnKeyboardButton>
        </NumberKeyboardKeys>
      </NumberKeyboardBody>
    );

    const renderHeader = () => {
      if (title || showCloseKey) {
        return (
          <NumberKeyboardHeader
            className={classes.header}
            title={title}
            right={
              <React.Fragment>
                {showCloseKey && (
                  <Button
                    disableRipple
                    variant="text"
                    className={classes.close}
                    onClick={() => hanldeInput({ type: 'close' })}
                  >
                    {closeButtonText}
                  </Button>
                )}
              </React.Fragment>
            }
            backgroundInVisible
          />
        );
      }
    };

    const renderContent = (
      <EnKeyboardRoot
        className={css(classes.root, className)}
        style={style}
        ref={ref}
      >
        {renderHeader()}
        {state.numberPad ? renderNumberPad() : renderEnPad()}
      </EnKeyboardRoot>
    );

    if (React.isValidElement(children)) {
      return (
        <KeyboardModal
          actionRef={keyboardModalAction}
          valuePropName={valuePropName}
          triggerName={triggerName}
          content={renderContent}
          input={children}
        />
      );
    }

    return renderContent;
  }
);

export default EnKeyboard;
