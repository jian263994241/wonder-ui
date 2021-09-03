import * as React from 'react';
import Button from '../Button';
import ButtonBase from '../ButtonBase';
import Col from '../Col';
import Container from '../Container';
import KeyboardModal, { KeyboardModalAction } from './KeyboardModal';
import Navbar from '../Navbar';
import Row from '../Row';
import styled from '../styles/styled';
import SvgIcon from '../SvgIcon';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  createArray,
  css,
  generateUtilityClasses,
  globalClasses
} from '@wonder-ui/utils';
import { useCreation, useForkRef } from '@wonder-ui/hooks';
import type {
  NumberKeyboardProps,
  KeyConfig,
  NumberKeyboardClasses
} from './NumberKeyboardTypes';

const COMPONENT_NAME = 'WuiNumberKeyboard';

const numberKeyboardClasses: NumberKeyboardClasses = generateUtilityClasses(
  COMPONENT_NAME,
  [
    'root',
    'header',
    'body',
    'keys',
    'keyWrapper',
    'key',
    'close',
    'delete',
    'enter',
    'slidebar'
  ]
);

const useClasses = (styleProps: NumberKeyboardProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    header: ['header'],
    body: ['body'],
    keys: ['keys'],
    keyWrapper: ['keyWrapper'],
    key: ['key'],
    delete: ['delete'],
    enter: ['enter'],
    close: ['close'],
    slidebar: ['slidebar']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const NumberKeyboardRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  pointerEvents: 'auto',
  backgroundColor: theme.palette.background.default,
  paddingBottom: `calc(${theme.spacing(2)}px + env(safe-area-inset-bottom))`,
  boxSizing: 'border-box'
}));

const NumberKeyboardHeader = styled(Navbar, {
  name: COMPONENT_NAME,
  slot: 'Header'
})({});

const NumberKeyboardBody = styled(Container, {
  name: COMPONENT_NAME,
  slot: 'Body'
})(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1, 1, 0, 1),
  [`.${numberKeyboardClasses.header} + &`]: {
    paddingTop: 0
  }
}));

const NumberKeyboardSlidebar = styled(Row, {
  name: COMPONENT_NAME,
  slot: 'Slidebar'
})(({ theme }) => ({
  flex: 1,
  paddingLeft: theme.spacing(1)
}));

const NumberKeyboardKeys = styled(Row, {
  name: COMPONENT_NAME,
  slot: 'Keys'
})({
  flex: 3
});

const NumberKeyboardKeyWrapper = styled(Col, {
  name: COMPONENT_NAME,
  slot: 'KeyWapper'
})({});

const NumberKeyboardButton = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Button'
})(({ theme }) => {
  const mode = theme.palette.mode;

  return {
    fontSize: theme.typography.pxToRem(28),
    minHeight: 48,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: theme.palette[mode].main,
    borderRadius: 8,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter
    }),
    [`&.${globalClasses.active}`]: {
      backgroundColor: theme.palette[mode].dark
    },
    [`.${numberKeyboardClasses.slidebar} &.${numberKeyboardClasses.enter}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.pxToRem(16),
      [`&.${globalClasses.active}`]: {
        backgroundColor: theme.palette.primary.dark
      }
    }
  };
});

const NumberKeyboard = React.forwardRef<HTMLDivElement, NumberKeyboardProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      className,
      closeButtonText = '关闭',
      deleteButtonText,
      enterButtonText = '完成',
      extraKey,
      onClose,
      onDelete,
      onEnter,
      onInput,
      randomKeyOrder = false,
      showCloseKey = false,
      showDeleteKey = true,
      showEnterKey = false,
      showSlidebar = false,
      valuePropName = 'value',
      triggerName = 'onClick',
      title,
      ...rest
    } = props;

    const extraKeys = useCreation(() => {
      return Array.isArray(extraKey) ? extraKey : [extraKey];
    }, [extraKey]);

    const genBasicKeys = () => {
      const keys: KeyConfig[] = createArray(9, (index) => index).map((i) => ({
        text: i + 1
      }));

      keys.push({ text: 0 });

      if (randomKeyOrder) {
        keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }

      return keys;
    };

    const genDefaultKeys = (): KeyConfig[] => {
      const keys = genBasicKeys();
      const lastKey = keys.pop();

      if (showCloseKey && !extraKeys[0]) {
        keys.push({ text: '', type: 'close' });
      } else {
        keys.push({ text: extraKeys[0], type: 'extra' });
      }

      keys.push(lastKey!);

      if (showDeleteKey) {
        keys.push({
          text: deleteButtonText,
          type: 'delete'
        });
      }

      return keys;
    };

    const genCustomKeys = () => {
      const keys = genBasicKeys();
      const lastKey = keys.pop();

      if (extraKeys.length === 1) {
        if (showCloseKey) {
          keys.push(
            { text: '', type: 'close' },
            { ...lastKey, wider: !extraKeys[0] },
            { text: extraKeys[0], type: 'extra' }
          );
        } else {
          keys.push(
            { ...lastKey, wider: true },
            { text: extraKeys[0], type: 'extra' }
          );
        }
      } else if (extraKeys.length === 2) {
        keys.push({ text: extraKeys[0], type: 'extra' }, lastKey!, {
          text: extraKeys[1],
          type: 'extra'
        });
      }

      return keys;
    };

    const styleProps = { ...props };

    const classes = useClasses(styleProps);

    const keys = useCreation(
      () => (showSlidebar ? genCustomKeys() : genDefaultKeys()),
      [showSlidebar]
    );

    const renderCollapseIcon = () => (
      <SvgIcon viewBox="0 0 30 24">
        <path d="M25.877 12.843h-1.502c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.5c.187 0 .187 0 .187-.188v-1.511c0-.19 0-.191-.185-.191zM17.999 10.2c0 .188 0 .188.188.188h1.687c.188 0 .188 0 .188-.188V8.688c0-.187.004-.187-.186-.19h-1.69c-.187 0-.187 0-.187.19V10.2zm2.25-3.967h1.5c.188 0 .188 0 .188-.188v-1.7c0-.19 0-.19-.188-.19h-1.5c-.189 0-.189 0-.189.19v1.7c0 .188 0 .188.19.188zm2.063 4.157h3.563c.187 0 .187 0 .187-.189V4.346c0-.19.004-.19-.185-.19h-1.69c-.187 0-.187 0-.187.188v4.155h-1.688c-.187 0-.187 0-.187.189v1.514c0 .19 0 .19.187.19zM14.812 24l2.812-3.4H12l2.813 3.4zm-9-11.157H4.31c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.502c.187 0 .187 0 .187-.188v-1.511c0-.19.01-.191-.189-.191zm15.937 0H8.25c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h13.5c.188 0 .188 0 .188-.188v-1.511c0-.19 0-.191-.188-.191zm-11.438-2.454h1.5c.188 0 .188 0 .188-.188V8.688c0-.187 0-.187-.188-.189h-1.5c-.187 0-.187 0-.187.189V10.2c0 .188 0 .188.187.188zM27.94 0c.563 0 .917.21 1.313.567.518.466.748.757.748 1.51v14.92c0 .567-.188 1.134-.562 1.512-.376.378-.938.566-1.313.566H2.063c-.563 0-.938-.188-1.313-.566-.562-.378-.75-.945-.75-1.511V2.078C0 1.51.188.944.562.567.938.189 1.5 0 1.875 0zm-.062 2H2v14.92h25.877V2zM5.81 4.157c.19 0 .19 0 .19.189v1.762c-.003.126-.024.126-.188.126H4.249c-.126-.003-.126-.023-.126-.188v-1.7c-.187-.19 0-.19.188-.19zm10.5 2.077h1.503c.187 0 .187 0 .187-.188v-1.7c0-.19 0-.19-.187-.19h-1.502c-.188 0-.188.001-.188.19v1.7c0 .188 0 .188.188.188zM7.875 8.5c.187 0 .187.002.187.189V10.2c0 .188 0 .188-.187.188H4.249c-.126-.002-.126-.023-.126-.188V8.625c.003-.126.024-.126.188-.126zm7.875 0c.19.002.19.002.19.189v1.575c-.003.126-.024.126-.19.126h-1.563c-.126-.002-.126-.023-.126-.188V8.625c.002-.126.023-.126.189-.126zm-6-4.342c.187 0 .187 0 .187.189v1.7c0 .188 0 .188-.187.188H8.187c-.126-.003-.126-.023-.126-.188V4.283c.003-.126.024-.126.188-.126zm3.94 0c.185 0 .372 0 .372.189v1.762c-.002.126-.023.126-.187.126h-1.75C12 6.231 12 6.211 12 6.046v-1.7c0-.19.187-.19.187-.19z" />
      </SvgIcon>
    );

    const renderDeleteIcon = () => (
      <SvgIcon viewBox="0 0 32 22">
        <path d="M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z" />
      </SvgIcon>
    );

    const rootRef = React.useRef<HTMLDivElement>();
    const handleRef = useForkRef(rootRef, ref);
    const keyboardModalAction = React.useRef<KeyboardModalAction>();

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

    const renderKeys = () =>
      keys.map((key, index) => {
        let content: React.ReactNode = key.text;

        if (key.type === 'delete') {
          content = key.text || renderDeleteIcon();
        }

        if (key.type == 'close') {
          content = renderCollapseIcon();
        }

        const grid = 4;
        const col = key.wider ? (3 - extraKeys.length) * grid : grid;

        return (
          <NumberKeyboardKeyWrapper
            className={classes.keyWrapper}
            key={index}
            col={col as any}
          >
            {content !== undefined && content !== '' && (
              <NumberKeyboardButton
                className={css({
                  [classes.key]: true,
                  [classes.delete]: key.type === 'delete',
                  [classes.close]: key.type === 'close'
                })}
                onClick={() => hanldeInput(key)}
                disableRipple
              >
                {content}
              </NumberKeyboardButton>
            )}
          </NumberKeyboardKeyWrapper>
        );
      });

    const renderSidebar = () => {
      if (showSlidebar) {
        return (
          <NumberKeyboardSlidebar
            className={classes.slidebar}
            rowCols={1}
            gutter={[1, 1]}
          >
            {showDeleteKey && (
              <NumberKeyboardKeyWrapper className={classes.keyWrapper}>
                <NumberKeyboardButton
                  className={css(classes.delete, classes.key)}
                  onClick={() => hanldeInput({ type: 'delete' })}
                  disableRipple
                >
                  {deleteButtonText || renderDeleteIcon()}
                </NumberKeyboardButton>
              </NumberKeyboardKeyWrapper>
            )}
            <NumberKeyboardKeyWrapper className={classes.keyWrapper}>
              <NumberKeyboardButton
                className={css(classes.enter, classes.key)}
                onClick={() => hanldeInput({ type: 'enter' })}
                disableRipple
              >
                {enterButtonText}
              </NumberKeyboardButton>
            </NumberKeyboardKeyWrapper>
          </NumberKeyboardSlidebar>
        );
      }
    };

    const renderHeader = () => {
      const hasEnterKey = showEnterKey && !showSlidebar;
      const hasCloseKey = showSlidebar
        ? showCloseKey && extraKeys.length === 2
        : showCloseKey && !!extraKeys[0];

      if (title || hasEnterKey || hasCloseKey) {
        return (
          <NumberKeyboardHeader
            className={classes.header}
            title={title}
            left={
              hasEnterKey &&
              hasCloseKey && (
                <Button
                  disableRipple
                  variant="text"
                  className={classes.close}
                  onClick={() => hanldeInput({ type: 'close' })}
                >
                  {closeButtonText}
                </Button>
              )
            }
            right={
              <React.Fragment>
                {hasEnterKey && (
                  <Button
                    disableRipple
                    variant="text"
                    className={classes.enter}
                    onClick={onEnter}
                  >
                    {enterButtonText}
                  </Button>
                )}
                {hasCloseKey && !hasEnterKey && (
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
      <NumberKeyboardRoot
        className={css(classes.root, className)}
        ref={handleRef}
        {...rest}
      >
        {renderHeader()}
        <NumberKeyboardBody className={classes.body} size="sm">
          <NumberKeyboardKeys className={classes.keys} gutter={[1, 1]}>
            {renderKeys()}
          </NumberKeyboardKeys>
          {renderSidebar()}
        </NumberKeyboardBody>
      </NumberKeyboardRoot>
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

export default NumberKeyboard;
