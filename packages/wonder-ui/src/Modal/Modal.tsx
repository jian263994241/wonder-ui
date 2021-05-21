import * as React from 'react';
import Backdrop, { BackdropProps } from '../Backdrop';
import FocusLock from 'react-focus-lock';
import ModalManager, { ariaHidden, Modal as ModalType } from './ModalManager';
import Portal, { Container, getContainer } from '../Portal/Portal';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, getDocument } from '@wonder-ui/utils';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';
import type { RestProps } from '../styles/types';

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

function getHasTransition(props: React.PropsWithChildren<any>) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

export interface ModalProps {
  /**
   * AutoFocus
   */
  autoFocus?: boolean;
  /**
   * Backdrop Props
   * @default {}
   */
  BackdropProps?: Partial<BackdropProps>;
  /**
   * 子节点
   */
  children: React.ReactElement;
  /**
   * HTML Attributes
   */
  className?: string;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * 容器 HTMLElement
   */
  container?: Container;
  /**
   * 过渡后关闭
   * @default false
   */
  closeAfterTransition?: boolean;

  /**
   * 禁用esc按键执行关闭
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * 禁用FocusLock
   * @default false
   */
  disableFocusLock?: boolean;
  /**
   * 禁用 Portal
   * @default false
   */
  disablePortal?: boolean;
  /**
   * 禁用滚动锁
   * @default false
   */
  disableScrollLock?: boolean;
  /**
   * FocusLock Props
   * @default {}
   */
  FocusLockProps?: ReactFocusLockProps;
  /**
   * 隐藏Backdrop
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * @ignore
   */
  hasTransition?: boolean;
  /**
   * 保持Modal节点
   * @default false
   */
  keepMounted?: boolean;
  /**
   * @ignore
   * Modal manager
   */
  manager?: InstanceType<typeof ModalManager>;
  /**
   * 背景板点击事件
   */
  onBackdropClick?(event: React.MouseEvent): void;
  /**
   * Modal关闭事件
   */
  onClose?<T extends 'backdropClick' | 'escapeKeyDown'>(
    event: T extends 'escapeKeyDown' ? React.KeyboardEvent : React.MouseEvent,
    type: T
  ): void;
  /**
   * esc键盘事件
   */
  onKeyDown?(event: React.KeyboardEvent): void;
  /**
   * 过渡动画事件
   */
  onTransitionEnter?(): void;
  /**
   * 过渡动画事件
   */
  onTransitionExited?(): void;
  /**
   * Ref
   */
  ref?: React.Ref<any>;
  /**
   * HTML Attributes
   */
  style?: React.CSSProperties;
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;
}

type StyleProps = {
  styleProps: Partial<ModalProps> & {
    exited: boolean;
  };
};

const ModalRoot = styled('div', {
  name: 'WuiModal',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  overflow: 'auto',
  outline: 0,
  WebkitOverflowScrolling: 'touch',
  ...(!styleProps.visible &&
    styleProps.exited && {
      visibility: 'hidden'
    })
}));

const Modal: React.FC<ModalProps & RestProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiModal' });
    const {
      autoFocus = false,
      BackdropProps,
      children,
      className,
      closeAfterTransition,
      component,
      container,
      disableEscapeKeyDown = false,
      disableFocusLock = false,
      disablePortal = false,
      disableScrollLock = false,
      FocusLockProps,
      hideBackdrop = false,
      hasTransition: hasTransitionProp,
      keepMounted,
      manager = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      onTransitionEnter,
      onTransitionExited,
      visible = false,
      ...rest
    } = props;

    React.Children.only(children);

    const [exited, setExited] = React.useState(true);
    const modal = React.useRef<{
      modalRef?: Element | null;
      mount?: Element | null;
    }>({});
    const mountNodeRef = React.useRef(null);
    const modalRef = React.useRef<Element | null>(null);
    const handleRef = useForkRef(modalRef, ref);
    const hasTransition =
      hasTransitionProp != undefined
        ? hasTransitionProp
        : getHasTransition(props);

    const getDoc = () => getDocument(mountNodeRef.current);
    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mount = mountNodeRef.current;
      return modal.current as ModalType;
    };

    const handleMounted = () => {
      manager.mount(getModal(), { disableScrollLock });

      // Fix a bug on Chrome where the scroll isn't initially 0.
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    };

    const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [
      manager
    ]);

    const handlePortalRef = useEventCallback((node) => {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (visible && isTopModal()) {
        handleMounted();
      } else if (modalRef.current) {
        ariaHidden(modalRef.current, true);
      }
    });

    const handleOpen = useEventCallback(() => {
      const resolvedContainer = (getContainer(container) ||
        getDoc().body) as HTMLElement;

      manager.add(getModal(), resolvedContainer);

      // The element was already mounted.
      if (modalRef.current) {
        handleMounted();
      }
    });

    const handleClose = React.useCallback(() => {
      manager.remove(getModal());
    }, [manager]);

    React.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);

    React.useEffect(() => {
      if (visible) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [visible, handleClose, hasTransition, closeAfterTransition, handleOpen]);

    if (!keepMounted && !visible && (!hasTransition || exited)) {
      return null;
    }

    const handleEnter = () => {
      setExited(false);

      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };

    const handleExited = () => {
      setExited(true);

      if (onTransitionExited) {
        onTransitionExited();
      }

      if (closeAfterTransition) {
        handleClose();
      }
    };

    const handleBackdropClick = (event: React.MouseEvent) => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (onKeyDown) {
        onKeyDown(event);
      }

      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      }

      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();

        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };

    const styleProps = { visible, exited };

    const classes = useClasses({ ...props, styleProps, name: 'WuiModal' });

    const childProps: any = {};

    const { tabIndex = '-1', onEnter, onExited } = children.props as any;

    childProps.tabIndex = tabIndex;
    childProps['data-autofocus'] = autoFocus;

    if (hasTransition) {
      childProps.in = visible;
      childProps.onEnter = createChainedFunction(handleEnter, onEnter);
      childProps.onExited = createChainedFunction(handleExited, onExited);
    }

    return (
      <Portal
        disablePortal={disablePortal}
        container={container}
        ref={handlePortalRef}
      >
        <ModalRoot
          role="presentation"
          {...rest}
          as={component}
          className={classes.root}
          onKeyDown={handleKeyDown}
          styleProps={styleProps}
          ref={handleRef}
        >
          {!hideBackdrop && (
            <Backdrop
              visible={visible}
              onClick={handleBackdropClick}
              {...BackdropProps}
            />
          )}
          <FocusLock
            disabled={disableFocusLock}
            noFocusGuards={disableFocusLock}
            autoFocus={autoFocus}
            {...FocusLockProps}
          >
            {children ? React.cloneElement(children, childProps) : null}
          </FocusLock>
        </ModalRoot>
      </Portal>
    );
  }
);

export default Modal;
