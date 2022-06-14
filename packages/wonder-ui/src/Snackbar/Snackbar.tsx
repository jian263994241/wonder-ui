import * as React from 'react';
import ClickAwayListener from '../ClickAwayListener';
import Portal from '../Portal';
import SnackbarContent from '../SnackbarContent';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { snackbarClasses, useClasses } from './SnackbarClasses';
import { useEventCallback, useForkRef, useSafeState } from '@wonder-ui/hooks';
import type { SnackbarProps } from './SnackbarTypes';

const SnackbarRoot = styled('div', {
  name: 'WuiSnackbar',
  slot: 'Root'
})(({ theme }) => ({
  zIndex: theme.zIndex.snackbar,
  position: 'fixed',
  display: 'flex',
  left: 8,
  right: 8,
  justifyContent: 'center',
  alignItems: 'center',
  [`&.${snackbarClasses.anchorTopLeft}`]: {
    top: 8,
    justifyContent: 'flex-start'
  },
  [`&.${snackbarClasses.anchorTopCenter}`]: {
    top: 8
  },
  [`&.${snackbarClasses.anchorTopRight}`]: {
    top: 8,
    justifyContent: 'flex-end'
  },
  [`&.${snackbarClasses.anchorBottomLeft}`]: {
    bottom: 8,
    justifyContent: 'flex-start'
  },
  [`&.${snackbarClasses.anchorBottomCenter}`]: {
    bottom: 8
  },
  [`&.${snackbarClasses.anchorBottomRight}`]: {
    bottom: 8,
    justifyContent: 'flex-end'
  },
  [`&.${snackbarClasses.anchorCenter}`]: {
    left: '50%',
    top: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate3d(-50%, -50%, 0)'
  },

  [theme.breakpoints.up('sm')]: {
    [`&.${snackbarClasses.anchorTopLeft}`]: {
      top: 24,
      left: 24,
      right: 'auto'
    },
    [`&.${snackbarClasses.anchorTopCenter}`]: {
      top: 24,
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    },
    [`&.${snackbarClasses.anchorTopRight}`]: {
      top: 24,
      right: 24,
      left: 'auto'
    },
    [`&.${snackbarClasses.anchorBottomLeft}`]: {
      bottom: 24,
      left: 24,
      right: 'auto'
    },
    [`&.${snackbarClasses.anchorBottomCenter}`]: {
      bottom: 24,
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    },
    [`&.${snackbarClasses.anchorBottomRight}`]: {
      bottom: 24,
      right: 24,
      left: 'auto'
    }
  }
}));

const Snackbar = React.forwardRef<HTMLElement, SnackbarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiSnackbar' });
    const {
      action,
      anchorOrigin: { vertical, horizontal } = {
        vertical: 'bottom',
        horizontal: 'left'
      },
      ClickAwayListenerProps,
      autoHideDuration = null,
      className,
      disableWindowBlurListener = false,
      disablePortal = false,
      message,
      onClose,
      onMouseEnter,
      onMouseLeave,
      resumeHideDuration,
      transitionDuration,
      visible,
      maskClickable = true,
      ...rest
    } = props;

    const nodeRef = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, ref);
    const timerAutoHide = React.useRef<any>();
    const [exited, setExited] = useSafeState(true);

    const styleProps = { ...props, anchorOrigin: { vertical, horizontal } };
    const classes = useClasses(styleProps);

    const handleClose = useEventCallback((event, reason) => {
      if (onClose) {
        onClose(event, reason);
      }
    });

    const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
      if (!onClose || autoHideDurationParam == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = setTimeout(() => {
        handleClose(null, 'timeout');
      }, autoHideDurationParam);
    });

    React.useEffect(() => {
      if (visible) {
        setAutoHideTimer(autoHideDuration);
      }

      return () => {
        clearTimeout(timerAutoHide.current);
      };
    }, [visible, autoHideDuration, setAutoHideTimer]);

    const handlePause = () => {
      clearTimeout(timerAutoHide.current);
    };

    const handleResume = React.useCallback(() => {
      if (autoHideDuration != null) {
        setAutoHideTimer(
          resumeHideDuration != null
            ? resumeHideDuration
            : autoHideDuration * 0.5
        );
      }
    }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

    const handleMouseEnter = (event: any) => {
      if (onMouseEnter) {
        onMouseEnter(event);
      }
      handlePause();
    };

    const handleMouseLeave = (event: any) => {
      if (onMouseLeave) {
        onMouseLeave(event);
      }
      handleResume();
    };

    const handleExited = () => {
      setExited(true);
    };

    const handleEnter = () => {
      setExited(false);
    };

    React.useEffect(() => {
      // TODO: window global should be refactored here
      if (!disableWindowBlurListener && visible) {
        window.addEventListener('focus', handleResume);
        window.addEventListener('blur', handlePause);

        return () => {
          window.removeEventListener('focus', handleResume);
          window.removeEventListener('blur', handlePause);
        };
      }

      return undefined;
    }, [disableWindowBlurListener, handleResume, visible]);

    const handleClickAway = (event: any) => {
      if (maskClickable) {
        handleClose(event, 'clickaway');
      }
    };

    if (!visible && exited) {
      return null;
    }

    return (
      <Portal disablePortal={disablePortal}>
        <ClickAwayListener
          onClickAway={handleClickAway}
          {...ClickAwayListenerProps}
        >
          <SnackbarRoot
            className={css(classes.root, className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={handleRef}
            {...rest}
          >
            <SnackbarContent
              message={message}
              action={action}
              center={vertical === 'center' && horizontal === 'center'}
              classes={{ root: classes.content }}
              in={visible}
              duration={transitionDuration}
              onEnter={handleEnter}
              onExited={handleExited}
            />
          </SnackbarRoot>
        </ClickAwayListener>
      </Portal>
    );
  }
);

export default Snackbar;
