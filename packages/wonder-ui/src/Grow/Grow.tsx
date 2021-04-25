import * as React from 'react';
import Transition, {
  BaseTransitionProps,
  TransitionTimeout,
  TransitionProps
} from '../Transition';
import useTheme from '../styles/useTheme';
import { useForkRef } from '@wonder-ui/hooks';
import { reflow, getTransitionProps } from '../Transition/utils';

function getScale(value: number) {
  return `scale(${value}, ${value ** 2})`;
}

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

export interface GrowProps extends BaseTransitionProps {
  /**
   * @description Perform the enter transition when it first mounts if `in` is also `true`.
   * @default true
   */
  appear?: boolean;
  easing?: {
    enter: string;
    exit: string;
  };
  /**
   * @description A single child content element.
   */
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  /**
   * @description 显示隐藏内容
   */
  in?: boolean;

  style?: React.CSSProperties;

  timeout?: TransitionTimeout | 'auto';
}

/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow: React.FC<GrowProps> = React.forwardRef((props, ref) => {
  const {
    appear = true,
    children,
    in: inProp,
    easing,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = 'auto'
  } = props;

  const timer = React.useRef<any>();
  const autoTimeout = React.useRef<number>();
  const theme = useTheme();

  const handleRef = useForkRef(children.ref, ref);

  const handleEnter: TransitionProps['onEnter'] = (node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps(
      { style, timeout, easing },
      {
        mode: 'enter'
      }
    );

    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [
      theme.transitions.create('opacity', {
        duration,
        delay
      }),
      theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay,
        easing: transitionTimingFunction
      })
    ].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleExit: TransitionProps['onExit'] = (node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps(
      { style, timeout, easing },
      {
        mode: 'exit'
      }
    );

    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [
      theme.transitions.create('opacity', {
        duration,
        delay
      }),
      theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333,
        easing: transitionTimingFunction
      })
    ].join(',');

    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  };

  const addEndListener: TransitionProps['addEndListener'] = (node, next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <Transition
      appear={appear}
      in={inProp}
      ref={handleRef}
      onEnter={handleEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={handleExit}
      onExiting={onExiting}
      onExited={onExited}
      addEndListener={addEndListener}
      timeout={timeout === 'auto' ? null : timeout}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          ...childProps,
          style: {
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...(styles as any)[state],
            ...style,
            ...children.props.style
          }
        });
      }}
    </Transition>
  );
});

export default Grow;
