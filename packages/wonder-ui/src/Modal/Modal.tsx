import * as React from 'react';
import Backdrop from '../Backdrop';
import FocusLock from 'react-focus-lock';
import ModalManager, { ariaHidden, Modal as ModalType } from './ModalManager';
import Portal, { getContainer } from '../Portal/Portal';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, css, ownerDocument } from '@wonder-ui/utils';
import { modalClasses, useClasses } from './ModalClasses';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';
import {
  useEventCallback,
  useEventListener,
  useForkRef,
  useSafeState
} from '@wonder-ui/hooks';
import type { ModalProps } from './ModalTypes';

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

function getHasTransition(props: React.PropsWithChildren<any>) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

const ModalRoot = styled(FocusLock, {
  name: 'WuiModal',
  slot: 'Root',
  shouldForwardProp: () => true
})<ReactFocusLockProps & { style?: React.CSSProperties }>(
  ({ theme, style }) => ({
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    overflow: 'auto',
    outline: 0,
    WebkitOverflowScrolling: 'touch',
    //Hack FocusLock has no style prop.
    ...style,

    [`&.${modalClasses.hidden}`]: {
      visibility: 'hidden'
    }
  })
);

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((inProps, ref) => {
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
    style,
    visible = false
  } = props;

  const [exited, setExited] = useSafeState(true);
  const modal = React.useRef<{
    modalRef?: Element | null;
    mount?: Element | null;
  }>({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef<Element | null>(null);
  const handleRef = useForkRef(modalRef, ref);

  const hasTransition = hasTransitionProp ?? getHasTransition(props);

  const getDoc = () => ownerDocument(mountNodeRef.current);
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

  const isTopModal = React.useCallback(
    () => manager.isTopModal(getModal()),
    [manager]
  );

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

  const handleKeyDown = (event: any) => {
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

  const rootProps: Record<string, string> = {
    role: 'presentation'
  };

  React.useEffect(() => {
    const { current: node } = modalRef;

    if (node) {
      Object.keys(rootProps).forEach((key) => {
        const prop = rootProps[key];
        node.setAttribute(key, prop);
      });
    }
  }, [exited]);

  useEventListener(modalRef.current, 'keydown', handleKeyDown);

  if (!keepMounted && !visible && (!hasTransition || exited)) {
    return null;
  }

  const styleProps = { ...props, visible, exited };

  const classes = useClasses(styleProps);

  let _children = children;

  if (React.isValidElement(children)) {
    const childProps: any = {};

    const { tabIndex = '-1', onEnter, onExited } = children.props as any;

    childProps.tabIndex = tabIndex;
    childProps['data-autofocus'] = autoFocus;

    if (hasTransition) {
      childProps.in = visible;
      childProps.onEnter = createChainedFunction(handleEnter, onEnter);
      childProps.onExited = createChainedFunction(handleExited, onExited);
    }

    _children = React.cloneElement(children, childProps);
  }

  return (
    <Portal
      disablePortal={disablePortal}
      container={container}
      ref={handlePortalRef}
    >
      <ModalRoot
        returnFocus
        noFocusGuards
        {...FocusLockProps}
        ref={handleRef}
        as={component}
        className={css(classes.root, className, FocusLockProps?.className)}
        disabled={disableFocusLock}
        autoFocus={autoFocus}
        style={style}
      >
        {!hideBackdrop && (
          <Backdrop
            visible={visible}
            onClick={handleBackdropClick}
            className={classes.backdrop}
            {...BackdropProps}
          />
        )}
        {_children}
      </ModalRoot>
    </Portal>
  );
});

export default Modal;
