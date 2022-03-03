import * as React from 'react';
import Divider from '../Divider';
import Drawer from '../Drawer';
import {
  doubleRaf,
  getRect,
  getScrollParent,
  on,
  ownerWindow,
  scrollTop
} from '@wonder-ui/utils';
import { useClickAway, useReactive } from '@wonder-ui/hooks';
export interface KeyboardModalAction {
  close(): void;
  open(): void;
  setInnerValue(callback: (prevValue: string) => string): void;
}

export interface KeyboardModalProps {
  actionRef: React.Ref<KeyboardModalAction | undefined>;
  valuePropName: string;
  triggerName: string;
  content: JSX.Element;
  input?: JSX.Element;
}

export default function KeyboardModal(props: KeyboardModalProps) {
  const { actionRef, input, valuePropName, triggerName, content } = props;

  const state = useReactive({
    innerValue: '',
    visible: false
  });

  const rootRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputScrollParentElement = React.useRef<HTMLElement>();
  const closeListenerRef = React.useRef<Function>();
  const scrollTopStartRef = React.useRef<number>();

  const innerClose = (scroll?: boolean) => {
    state.visible = false;

    closeListenerRef.current?.();

    if (scroll) {
      scrollTopStartRef.current = undefined;
    }

    if (typeof scrollTopStartRef.current === 'number') {
      scrollTop(inputScrollParentElement.current!, scrollTopStartRef.current);
      scrollTopStartRef.current = undefined;
    }

    doubleRaf(() => {
      inputRef.current?.blur();
    });
  };

  const innerOpen = () => {
    if (state.visible) return;

    state.visible = true;

    doubleRaf(() => {
      const { current: inputElement } = inputRef;

      if (inputElement) {
        const win = ownerWindow(inputElement);

        if (!inputScrollParentElement.current) {
          inputScrollParentElement.current = getScrollParent(
            inputElement
          ) as HTMLElement;
        }

        const { current: parent } = inputScrollParentElement;

        const inputRect = getRect(inputElement);
        const keyboardRect = getRect(rootRef.current!);

        doubleRaf(() => {
          const safeArea = keyboardRect.height + inputRect.height + 20;

          if (win.innerHeight - inputRect.top < safeArea) {
            const scrollTopStart = scrollTop(parent);

            scrollTopStartRef.current = scrollTopStart;

            const scrollTopEnd =
              scrollTopStart + (inputRect.top - keyboardRect.top + safeArea);

            scrollTop(parent, scrollTopEnd);
          }

          doubleRaf(() => {
            closeListenerRef.current = on(parent, 'scroll', () =>
              innerClose(true)
            );
            inputElement.focus();
          });
        });
      }
    });
  };

  useClickAway(() => innerClose(), [rootRef, inputRef]);

  React.useImperativeHandle(
    actionRef,
    () => {
      return {
        close: () => innerClose(false),
        open: innerOpen,
        setInnerValue(callback) {
          inputRef.current?.focus();
          state.innerValue = callback(state.innerValue);
        }
      };
    },
    []
  );

  if (React.isValidElement(input)) {
    return (
      <React.Fragment>
        {React.cloneElement(input, {
          [valuePropName]: state.innerValue,
          [triggerName]: innerOpen,
          //@ts-expect-error
          ref: inputRef,
          readOnly: true
        })}
        <Drawer
          ref={rootRef}
          role="keyboard"
          visible={state.visible}
          anchor="bottom"
          ModalProps={{
            hideBackdrop: true,
            disableFocusLock: true,
            disableEscapeKeyDown: true,
            disableScrollLock: true
          }}
          style={{ pointerEvents: 'none' }}
        >
          <Divider />
          {content}
        </Drawer>
      </React.Fragment>
    );
  }

  return null;
}
