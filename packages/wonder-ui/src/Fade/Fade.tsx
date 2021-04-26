import * as React from 'react';
import Transition, {
  BaseTransitionProps,
  TransitionTimeout
} from '../Transition';
import { reflow, getTransitionProps } from '../Transition/utils';
import { duration } from '../styles/transitions';
import useTheme from '../styles/useTheme';
import { useForkRef } from '@wonder-ui/hooks';

const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

const defaultTimeout = duration.area.medium;

export interface FadeProps extends BaseTransitionProps<HTMLElement> {
  /**
   * @description children
   */
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description transition duration ms
   *
   */
  timeout?: TransitionTimeout;
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
  const handleRef = useForkRef(children.ref, ref);

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
      ref={handleRef}
      {...rest}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          ...childProps,
          style: {
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...(styles[state as keyof typeof styles] || { opacity: 0 }),
            ...style,
            ...childProps.style
          }
        });
      }}
    </Transition>
  );
});

Fade.defaultProps = {
  in: false // Modal hasTransition
};

export default Fade;
