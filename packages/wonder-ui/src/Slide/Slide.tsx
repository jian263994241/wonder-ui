import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { getRect, ownerWindow } from '@wonder-ui/utils';
import { springConfig, TransitionBaseProps } from '../styles/transitions';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';

export interface SlideProps extends TransitionBaseProps {
  direction?: 'down' | 'left' | 'right' | 'up';
}

function getTranslateValue(
  direction: SlideProps['direction'],
  node: HTMLElement,
  resolvedContainer?: HTMLElement
) {
  const rect = getRect(node);
  const containerRect = resolvedContainer && getRect(node);
  const containerWindow = ownerWindow(node);
  let transform;

  const computedStyle = containerWindow.getComputedStyle(node);
  transform =
    computedStyle.getPropertyValue('-webkit-transform') ||
    computedStyle.getPropertyValue('transform');

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    if (containerRect) {
      return {
        x: containerRect.right + offsetX - rect.left,
        y: 0
      };
    }

    return {
      x: containerWindow.innerWidth + offsetX - rect.left,
      y: 0
    };
  }

  if (direction === 'right') {
    if (containerRect) {
      return {
        x: -(rect.right - containerRect.left - offsetX),
        y: 0
      };
    }

    return {
      x: -(rect.left + rect.width - offsetX),
      y: 0
    };
  }

  if (direction === 'up') {
    if (containerRect) {
      return {
        x: 0,
        y: containerRect.bottom + offsetY - rect.top
      };
    }

    return {
      x: 0,
      y: containerWindow.innerHeight + offsetY - rect.top
    };
  }

  // direction === 'down'
  if (containerRect) {
    return {
      x: 0,
      y: -(rect.top - containerRect.top + rect.height - offsetY)
    };
  }

  return {
    x: 0,
    y: -(rect.top + rect.height - offsetY)
  };
}

const Slide = React.forwardRef<HTMLDivElement, SlideProps>((props, ref) => {
  const {
    children,
    direction = 'down',
    duration: durationProp,
    delay,
    in: inProp,
    immediate,
    onEnter,
    onEntered,
    onExit,
    onExited,
    style,
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, ref);

  const onStart = useEventCallback(() => {
    if (inProp) {
      onEnter?.();
    } else {
      onExit?.();
    }
  });

  const onRest = useEventCallback(() => {
    if (inProp) {
      onEntered?.();
    } else {
      onExited?.();
    }
  });

  const [styles, api] = useSpring(() => {
    return {
      x: 0,
      y: 0,
      cancel: true,
      onStart,
      onRest
    };
  });

  React.useEffect(() => {
    const { current: node } = nodeRef;

    if (node) {
      api.start({
        from: getTranslateValue(direction, node),
        to: { x: 0, y: 0 },
        reverse: !inProp,
        delay,
        immediate,
        config: springConfig({ in: inProp, duration: durationProp })
      });
    }
  }, [inProp, delay, immediate, durationProp]);

  return (
    <animated.div style={{ ...style, ...styles }} ref={handleRef} {...rest}>
      {children}
    </animated.div>
  );
});

export default Slide;
