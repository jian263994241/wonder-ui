import * as React from 'react';
import Button from '../Button';
import ButtonBase from '../ButtonBase';
import Container from '../Container';
import KeyboardModal, { KeyboardModalAction } from './KeyboardModal';
import Navbar from '../Navbar';
import SafeArea from '../SafeArea/SafeArea';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  createArray,
  css,
  generateUtilityClasses,
  globalClasses
} from '@wonder-ui/utils';
import { Grid, GridItem } from '../Grid/Grid';
import { IconCollapse, IconDelete } from './icons';
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
  paddingBottom: theme.spacing(2),
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

const NumberKeyboardSlidebar = styled(Grid, {
  name: COMPONENT_NAME,
  slot: 'Slidebar'
})(({ theme }) => ({
  flex: 1,
  paddingLeft: theme.spacing(1)
}));

const NumberKeyboardKeys = styled(Grid, {
  name: COMPONENT_NAME,
  slot: 'Keys'
})({
  flex: 3
});

const NumberKeyboardKeyWrapper = styled(GridItem, {
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
      triggerName = 'onFocus',
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

    const renderCollapseIcon = () => <IconCollapse />;

    const renderDeleteIcon = () => <IconDelete />;

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
            span={1}
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
            columns={1}
            gap={8}
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
          <NumberKeyboardKeys className={classes.keys} columns={3} gap={8}>
            {renderKeys()}
          </NumberKeyboardKeys>
          {renderSidebar()}
        </NumberKeyboardBody>
        <SafeArea position="bottom" />
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
