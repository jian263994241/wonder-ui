import * as React from 'react';
import { animated, useTransition } from '@react-spring/web';
import { css } from '@wonder-ui/utils';
import {
  getRect,
  mergedRef,
  ownerWindow,
  withStopPropagation
} from '@wonder-ui/utils';
import { springConfig, TransitionProps } from '../styles/transitions';
import { useEventCallback } from '@wonder-ui/hooks';

export interface SlideProps<C extends React.ElementType = React.ElementType>
  extends TransitionProps<C> {
  /**
   * 方向
   * @default down
   */
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

export default function Slide<C extends React.ElementType>(
  props: SlideProps<C>
) {
  const {
    children,
    component = 'div',
    className,
    componentProps,
    direction = 'down',
    duration: durationProp,
    delay,
    in: visible = false,
    onEnter,
    onEntered,
    onExit,
    onExited,
    style,
    keepMounted = false,
    propagationEvent,
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLElement>(null);

  const [isExited, setExited] = React.useState(false);

  const handleStart = useEventCallback(() => {
    if (visible) {
      setExited(false);
      onEnter?.();
    } else {
      onExit?.();
    }
  });

  const handleRest = useEventCallback(() => {
    if (visible) {
      onEntered?.();
    } else {
      setExited(true);
      onExited?.();
    }
  });

  const transitions = useTransition(visible, {
    delay,
    expires: !keepMounted,
    config: springConfig({ in: visible, duration: durationProp }),
    reverse: visible,

    enter: (item) => async (next, cancel) => {
      const { current: node } = nodeRef;
      if (node) {
        const state = getTranslateValue(direction, node);

        node.style.transform = `translate(${state.x}px, ${state.y}px)`;
        await next(state);
        await next({ x: 0, y: 0, visibility: 'unset' });
      }
    },

    leave: (item) => async (next, cancel) => {
      const { current: node } = nodeRef;
      if (node) {
        await next(getTranslateValue(direction, node));
      }
    },

    onStart: handleStart,
    onRest: handleRest
  });

  const AnimatedBox = React.useMemo(() => animated(component), [component]);
  const rootProps = { ...rest, ...componentProps } as any;

  return transitions(
    (styles, item) =>
      item &&
      withStopPropagation(
        propagationEvent,
        <AnimatedBox
          {...rootProps}
          hidden={isExited}
          className={css(className, rootProps?.className)}
          style={{ ...style, ...styles }}
          ref={mergedRef(nodeRef, rootProps.ref)}
        >
          {children}
        </AnimatedBox>
      )
  );
}
