import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import {
  getAutoHeightDuration,
  getDuration,
  springConfig,
  TransitionBaseProps
} from '../styles/transitions';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';

function getScale(value: number) {
  return { scaleX: value, scaleY: value ** 2 };
}

export interface GrowProps extends Omit<TransitionBaseProps, 'duration'> {
  /**
   * 动画时间 ms
   * @default auto
   */
  duration?: 'auto' | number | { enter: number; exit: number };
}

/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = React.forwardRef<HTMLDivElement, GrowProps>((props, ref) => {
  const {
    children,
    in: inProp,
    onEnter,
    onEntered,
    onExit,
    onExited,
    duration: durationProp,
    style,
    immediate,
    delay,
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
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
      opacity: 0,
      ...getScale(0.75),
      cancel: true,
      onStart,
      onRest
    };
  });

  React.useEffect(() => {
    const { current: node } = nodeRef;

    let duration: number;

    if (node) {
      if (durationProp === 'auto') {
        duration = getAutoHeightDuration(node.clientHeight);
      } else {
        duration = getDuration(durationProp, inProp);
      }

      api.start({
        ...(inProp
          ? { opacity: 1, ...getScale(1) }
          : { opacity: 0, ...getScale(0.75) }),
        immediate,
        delay,
        config: springConfig({ in: inProp, duration })
      });
    }
  }, [inProp, immediate, delay]);

  return (
    <animated.div
      ref={handleRef}
      style={{
        ...style,
        ...styles
      }}
      {...rest}
    >
      {children}
    </animated.div>
  );
});

export default Grow;
