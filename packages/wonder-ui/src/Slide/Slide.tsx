import * as React from 'react';
import Transition, {
  BaseTransitionProps,
  TransitionTimeout
} from '../Transition';
import useTheme from '../styles/useTheme';
import { debounce, ownerWindow } from '@wonder-ui/utils';
import { duration, easing } from '../styles/transitions';
import { getTransitionProps, reflow } from '../Transition/utils';
import { useForkRef } from '@wonder-ui/hooks';

export interface SlideProps extends BaseTransitionProps<HTMLElement> {
  appear?: boolean;
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  direction?: 'down' | 'left' | 'right' | 'up';
  easing?: { enter: string; exit: string };
  in?: boolean;
  style?: React.CSSProperties;
  timeout?: TransitionTimeout;
}

function getTranslateValue(
  direction: SlideProps['direction'],
  node: HTMLElement
) {
  const rect = node.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;

  if ((node as any).fakeTransform) {
    transform = (node as any).fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform =
      computedStyle.getPropertyValue('-webkit-transform') ||
      computedStyle.getPropertyValue('transform');
  }

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return `translateX(${containerWindow.innerWidth}px) translateX(${
      offsetX - rect.left
    }px)`;
  }

  if (direction === 'right') {
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === 'up') {
    return `translateY(${containerWindow.innerHeight}px) translateY(${
      offsetY - rect.top
    }px)`;
  }

  // direction === 'down'
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}

export function setTranslateValue(
  direction: SlideProps['direction'],
  node: HTMLElement
) {
  const transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp
};

const defaultTimeout = duration.area.medium;

const Slide: React.FC<SlideProps> = React.forwardRef((props, ref) => {
  const {
    appear = true,
    children,
    direction = 'down',
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntering,
    onExit,
    onExited,
    style,
    timeout = defaultTimeout,
    ...rest
  } = props;
  const theme = useTheme();
  const nodeRef = React.useRef<HTMLElement>(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const handleEnter: SlideProps['onEnter'] = (node, isAppearing) => {
    setTranslateValue(direction, node);
    reflow(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering: SlideProps['onEntering'] = (node, isAppearing) => {
    const transitionProps = getTransitionProps(
      { timeout, style, easing: easingProp },
      {
        mode: 'enter'
      }
    );

    node.style.webkitTransition = theme.transitions.create(
      '-webkit-transform',
      {
        ...transitionProps
      }
    );

    node.style.transition = theme.transitions.create('transform', {
      ...transitionProps
    });

    node.style.webkitTransform = 'none';
    node.style.transform = 'none';
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleExit: SlideProps['onExit'] = (node) => {
    const transitionProps = getTransitionProps(
      { timeout, style, easing: easingProp },
      {
        mode: 'exit'
      }
    );

    node.style.webkitTransition = theme.transitions.create(
      '-webkit-transform',
      {
        ...transitionProps
      }
    );

    node.style.transition = theme.transitions.create('transform', {
      ...transitionProps
    });

    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  };

  const handleExited: SlideProps['onExited'] = (node) => {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  };

  const updatePosition = React.useCallback(() => {
    if (nodeRef.current) {
      setTranslateValue(direction, nodeRef.current);
    }
  }, [direction]);

  React.useEffect(() => {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    const handleResize = debounce(() => {
      if (nodeRef.current) {
        setTranslateValue(direction, nodeRef.current);
      }
    });

    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.cancel();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);

  React.useEffect(() => {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);

  return (
    <Transition
      ref={handleRef}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      appear={appear}
      in={inProp}
      timeout={timeout}
      {...rest}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          style: {
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...style,
            ...children.props.style
          },
          ...childProps
        });
      }}
    </Transition>
  );
});

Slide.defaultProps = {
  in: false //Modal hasTranstion
};

export default Slide;
