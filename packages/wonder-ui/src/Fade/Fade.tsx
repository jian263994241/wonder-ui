import * as React from 'react';
import Transition, { TransitionEventListener } from '../Transition';
import { reflow, getTransitionProps } from '../Transition/utils';
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

export interface FadeProps extends TransitionEventListener<HTMLElement> {
  /**
   * @description Perform the enter transition when it first mounts if `in` is also `true`.
   * @default true
   */
  appear?: boolean;
  /**
   * @description children
   */
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  /**
   * @description 显示隐藏内容
   */
  in?: boolean;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description Transition timeout
   */
  timeout?: number | { appear?: number; enter?: number; exit?: number };
}

const Fade: React.FC<FadeProps> = React.forwardRef((props, ref) => {
  const {
    appear = true,
    children,
    in: inProp,
    onEnter,
    onExit,
    style,
    timeout = defaultTimeout,
    ...rest
  } = props;
  const theme = useTheme();

  const nodeRef = React.useRef<HTMLElement>(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const handleEnter: FadeProps['onEnter'] = (node, isAppearing) => {
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
  };

  const handleExit: FadeProps['onExit'] = (node) => {
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
  };

  return (
    <Transition
      appear={appear}
      in={inProp}
      onEnter={handleEnter}
      onExit={handleExit}
      timeout={timeout}
      nodeRef={nodeRef}
      {...rest}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          ...childProps,
          style: {
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...(styles[state as keyof typeof styles] || { opacity: 0 }),
            ...style,
            ...children.props.style
          },
          ref: handleRef
        });
      }}
    </Transition>
  );
});

export default Fade;
