import * as React from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { duration } from '../styles/transitions';
import { useForkRef } from '@wonder-ui/hooks';
import useTheme from '../styles/useTheme';

const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};

const reflow = (node: Element) => node.scrollTop;

function getTransitionProps(props: any, options: any) {
  const { timeout, style = {} } = props;

  return {
    duration:
      style.transitionDuration || typeof timeout === 'number'
        ? timeout
        : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

type TransitionCallBack = (node: HTMLElement, isAppearing?: boolean) => void;

export interface FadeProps {
  appear?: boolean;

  children: React.ReactHTMLElement<any>;

  style?: React.CSSProperties;

  timeout?: any;
  /**
   * transition 回调
   */
  onEnter?: TransitionCallBack;
  /**
   * transition 回调
   */
  onEntered?: TransitionCallBack;
  /**
   * transition 回调
   */
  onEntering?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExit?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExited?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExiting?: TransitionCallBack;
  /**
   * @description 显示隐藏内容
   */
  visible?: boolean;
}

const Fade: React.FC<FadeProps> = React.forwardRef(function Fade(props, ref) {
  const {
    appear = true,
    children,
    visible: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    ...other
  } = props;
  const theme = useTheme();

  const enableStrictModeCompat = true;
  const nodeRef = React.useRef<HTMLElement>();
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const normalizedTransitionCallback = (
    callback?: (node: HTMLElement, maybeIsAppearing?: boolean) => void
  ) => (maybeIsAppearing?: boolean) => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node as HTMLElement);
      } else {
        callback(node as HTMLElement, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter'
      }
    );

    node.style.transition = theme.transitions.create(
      'opacity',
      transitionProps
    );

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });

  const handleEntered = normalizedTransitionCallback(onEntered);

  const handleExiting = normalizedTransitionCallback(onExiting);

  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit'
      }
    );

    node.style.transition = theme.transitions.create(
      'opacity',
      transitionProps
    );

    if (onExit) {
      onExit(node);
    }
  });

  const handleExited = normalizedTransitionCallback(onExited);

  return (
    <Transition
      appear={appear}
      in={inProp}
      nodeRef={enableStrictModeCompat ? nodeRef : undefined}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      timeout={timeout}
      {...other}
    >
      {(state: TransitionStatus, childProps: any) => {
        return React.cloneElement(children, {
          style: {
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...(styles[state as keyof typeof styles] || { opacity: 0 }),
            ...style,
            ...children.props.style
          },
          ref: handleRef,
          ...childProps
        });
      }}
    </Transition>
  );
});

export default Fade;
