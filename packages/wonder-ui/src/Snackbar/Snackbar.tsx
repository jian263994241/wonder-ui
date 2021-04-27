import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';
import clsx from 'clsx';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';
import SnackbarContent, { SnackbarContentProps } from '../SnackbarContent';
import ClickAwayListener, {
  ClickAwayListenerProps
} from '../ClickAwayListener';
import Grow from '../Grow';
import { BaseTransitionProps, TransitionTimeout } from '../Transition';

export interface SnackbarProps extends BaseProps {
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
  actions?: React.ReactNode;
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
}

const SnackbarRoot = styled('div', {
  name: 'WuiSnackbar',
  slot: 'Root'
})<PickStyleProps<SnackbarProps, 'anchorOrigin'>>(({ theme, styleProps }) => ({
  zIndex: theme.zIndex.snackbar,
  position: 'fixed',
  display: 'flex',
  left: 8,
  right: 8,
  justifyContent: 'center',
  alignItems: 'center',
  ...(styleProps.anchorOrigin.vertical === 'top' ? { top: 8 } : { bottom: 8 }),
  ...(styleProps.anchorOrigin.horizontal === 'left' && {
    justifyContent: 'flex-start'
  }),
  ...(styleProps.anchorOrigin.horizontal === 'right' && {
    justifyContent: 'flex-end'
  }),
  [theme.breakpoints.up('sm')]: {
    ...(styleProps.anchorOrigin.vertical === 'top'
      ? { top: 24 }
      : { bottom: 24 }),
    ...(styleProps.anchorOrigin.horizontal === 'left' && {
      left: 24,
      right: 'auto'
    }),
    ...(styleProps.anchorOrigin.horizontal === 'center' && {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    }),
    ...(styleProps.anchorOrigin.horizontal === 'right' && {
      right: 24,
      left: 'auto'
    })
  },
  [theme.breakpoints.up('xs')]: {
    ...(styleProps.anchorOrigin.vertical === 'center' &&
      styleProps.anchorOrigin.horizontal === 'center' && {
        left: '50%',
        top: '50%',
        bottom: 'auto',
        right: 'auto',
        transform: 'translate3d(-50%, -50%, 0)'
      })
  }
}));

const Snackbar: React.FC<SnackbarProps> = React.forwardRef((inProps, ref) => {
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

  const styleProps = { anchorOrigin: { vertical, horizontal } };
  const classes = useClasses({ ...props, styleProps, name: 'WuiSnackbar' });

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
        resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5
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
        styleProps={styleProps}
        className={clsx(classes.root, className)}
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
              {...ContentProps}
            />
          )}
        </TransitionComponent>
      </SnackbarRoot>
    </ClickAwayListener>
  );
});

export default Snackbar;
