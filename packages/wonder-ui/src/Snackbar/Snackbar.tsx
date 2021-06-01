import * as React from 'react';
import ClickAwayListener, {
  ClickAwayListenerProps
} from '../ClickAwayListener';
import Grow from '../Grow';
import SnackbarContent, { SnackbarContentProps } from '../SnackbarContent';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import { css } from '@wonder-ui/utils';
import { snackbarClasses, useClasses } from './SnackbarClasses';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';

export interface SnackbarProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'action'> {
  /**
   * @ignore
   */
  ClickAwayListenerProps?: Partial<ClickAwayListenerProps>;
  /**
   * @ignore
   */
  ContentProps?: Partial<SnackbarContentProps>;
  /**
   * 过渡动画组件
   */
  TransitionComponent?: React.ComponentType<BaseTransitionProps>;
  /**
   * 过渡动画组件属性
   */
  TransitionProps?: BaseTransitionProps;
  /**
   * 操作区
   */
  action?: React.ReactNode;
  /**
   * 定位
   */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
  /**
   * 自动关闭持续时间
   * @default null
   */
  autoHideDuration?: number | null;
  /**
   * @ignore
   */
  children?: React.ReactElement;
  /**
   * @ignore
   */
  disableWindowBlurListener?: boolean;
  /**
   * 内容
   */
  message?: React.ReactNode;
  /**
   * 关闭回调事件
   */
  onClose?: (event: Event, reason: 'timeout' | 'clickaway') => void;
  /**
   * @ignore
   */
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  /**
   * @ignore
   */
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  /**
   * 暂停持续时间
   */
  resumeHideDuration?: boolean | null;
  /**
   * 过渡动画持续时间
   */
  transitionDuration?: TransitionTimeout;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**@ignore */
  ref?: React.Ref<any>;
}

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
      ContentProps,
      TransitionComponent = Grow,
      TransitionProps: { onEnter, onExited, ...TransitionProps } = {},
      autoHideDuration = null,
      children,
      className,
      disableWindowBlurListener = false,
      message,
      onClose,
      onMouseEnter,
      onMouseLeave,
      resumeHideDuration,
      transitionDuration,
      visible,
      ...rest
    } = props;

    const nodeRef = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, ref);
    const timerAutoHide = React.useRef<any>();
    const [exited, setExited] = React.useState(true);

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

    const handleExited = (node: any) => {
      setExited(true);

      if (onExited) {
        onExited(node);
      }
    };

    const handleEnter = (node: any, isAppearing: any) => {
      setExited(false);

      if (onEnter) {
        onEnter(node, isAppearing);
      }
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
      if (onClose) {
        onClose(event, 'clickaway');
      }
    };

    if (!visible && exited) {
      return null;
    }

    return (
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
          <TransitionComponent
            appear
            in={visible}
            direction={vertical === 'top' ? 'down' : 'up'}
            timeout={transitionDuration}
            onEnter={handleEnter}
            onExited={handleExited}
            {...TransitionProps}
          >
            {children || (
              <SnackbarContent
                message={message}
                action={action}
                center={vertical === 'center' && horizontal === 'center'}
                classes={{ root: classes.content }}
                {...ContentProps}
              />
            )}
          </TransitionComponent>
        </SnackbarRoot>
      </ClickAwayListener>
    );
  }
);

export default Snackbar;
