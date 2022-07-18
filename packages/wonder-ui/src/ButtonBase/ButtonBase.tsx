import * as React from 'react';
import styled from '../styles/styled';
import TouchRipple, { TouchRippleAction } from './TouchRipple';
import useThemeProps from '../styles/useThemeProps';
import { ButtonBaseClasses, ButtonBaseProps } from './ButtonBaseTypes';
import {
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';
import {
  useTouchFeedback,
  useEventCallback,
  useForkRef,
  useIsFocusVisible,
  useSafeState
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiButtonBase';

export const buttonBaseClasses: ButtonBaseClasses = generateUtilityClasses(
  COMPONENT_NAME,
  ['root', 'disabled', 'focusVisible', 'active']
);

interface StyleProps extends ButtonBaseProps {
  focusVisible?: boolean;
  active?: boolean;
}

export const useClasses = (styleProps: StyleProps) => {
  const { active, disabled, focusVisible, focusVisibleClassName, classes } =
    styleProps;

  const slots = {
    root: [
      'root',
      active && 'active',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      focusVisible && focusVisibleClassName
    ]
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ButtonBaseRoot = styled('button', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.75,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none', // Reset
  WebkitAppearance: 'none', // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none' // Disable link interactions
  },
  '&:disabled': {
    pointerEvents: 'auto',
    cursor: 'not-allowed'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
}));

const ButtonBase = forwardRef<HTMLElement, ButtonBaseProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    TouchRippleProps,
    actionRef,
    centerRipple = false,
    className,
    children,
    component = 'button',
    LinkComponent = 'a',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    onMouseDown,
    onContextMenu,
    onDragLeave,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    onBlur,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onClick,
    onKeyUp,
    tabIndex = 0,
    type,
    ...rest
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement>();
  const rippleActionRef = React.useRef<TouchRippleAction>(null);

  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();

  const [focusVisible, setFocusVisible] = useSafeState(false);

  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
  }, [disabled, focusVisible]);

  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleActionRef.current?.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  React.useImperativeHandle(
    actionRef,
    () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current?.focus();
      }
    }),
    []
  );

  function useRippleHandler(
    rippleAction: keyof TouchRippleAction,
    eventCallback?:
      | React.MouseEventHandler<HTMLButtonElement>
      | React.TouchEventHandler<HTMLButtonElement>
      | React.FocusEventHandler<HTMLButtonElement>,
    skipRippleAction: boolean = disableTouchRipple
  ) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;
      if (!ignore && rippleActionRef.current) {
        rippleActionRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler(
    'stop',
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    }
  );
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler(
    'stop',
    (event: React.FocusEvent<HTMLButtonElement>) => {
      handleBlurVisible();
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    },
    false
  );
  const handleFocus = useEventCallback((event) => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget as HTMLButtonElement;
    }

    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current as HTMLElement;
    return (
      component &&
      component !== 'button' &&
      !(button.tagName === 'A' && (button as HTMLLinkElement).href)
    );
  };

  const keydownRef = React.useRef(false);
  const handleKeyDown = useEventCallback((event) => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (
      focusRipple &&
      !keydownRef.current &&
      focusVisible &&
      rippleActionRef.current &&
      event.key === ' '
    ) {
      keydownRef.current = true;
      rippleActionRef.current.stop(event, () => {
        rippleActionRef.current!.start(event);
      });
    }

    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === ' '
    ) {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === 'Enter' &&
      !disabled
    ) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });

  const handleKeyUp = useEventCallback((event) => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (
      focusRipple &&
      event.key === ' ' &&
      rippleActionRef.current &&
      focusVisible &&
      !event.defaultPrevented
    ) {
      keydownRef.current = false;
      rippleActionRef.current.stop(event, () => {
        rippleActionRef.current!.pulsate();
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      onClick &&
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === ' ' &&
      !event.defaultPrevented
    ) {
      onClick(event);
    }
  });

  let ComponentProp = component;

  if (ComponentProp === 'button' && rest.href) {
    ComponentProp = LinkComponent;
  }

  const buttonProps: Record<string, any> = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!rest.href) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const { active, targetRef } = useTouchFeedback({ type: 'touch' });
  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef, targetRef);

  const [mountedState, setMountedState] = useSafeState(false);

  React.useEffect(() => {
    setMountedState(true);
  }, []);

  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const styleProps = {
    ...props,
    active,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };

  const classes = useClasses(styleProps);

  return (
    <ButtonBaseRoot
      as={ComponentProp}
      className={css(classes.root, className)}
      onBlur={handleBlur}
      onClick={onClick}
      onContextMenu={handleContextMenu}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      ref={handleRef}
      tabIndex={disabled ? -1 : tabIndex}
      type={type}
      {...buttonProps}
      {...rest}
    >
      {component !== 'input' ? (
        <React.Fragment>
          {children}
          {enableTouchRipple ? (
            <TouchRipple
              center={centerRipple}
              actionRef={rippleActionRef}
              {...TouchRippleProps}
            />
          ) : null}
        </React.Fragment>
      ) : null}
    </ButtonBaseRoot>
  );
});

export default ButtonBase;
