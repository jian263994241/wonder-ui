import * as React from 'react';
import { animated, useTransition } from '@react-spring/web';
import { springConfig, TransitionProps } from '../styles/transitions';
import { css, withStopPropagation } from '@wonder-ui/utils';
import { useEventCallback } from '@wonder-ui/hooks';

function getScale(value: number) {
  return { scaleX: value, scaleY: value ** 2 };
}

export interface GrowProps<C extends React.ElementType = React.ElementType>
  extends TransitionProps<C> {}

/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
export default function Grow<C extends React.ElementType = React.ElementType>(
  props: GrowProps<C>
) {
  const {
    className,
    children,
    component = 'div',
    componentProps,
    in: visible = false,
    keepMounted = false,
    duration,
    propagationEvent,
    style,
    delay,
    onEnter,
    onEntered,
    onExit,
    onExited,
    ...rest
  } = props;

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

  const [isExited, setExited] = React.useState(!visible);

  const exitedState = { opacity: 0, ...getScale(0.75) };
  const enteredState = { opacity: 1, ...getScale(1) };

  const transitions = useTransition(visible, {
    delay,
    expires: !keepMounted,
    config: springConfig({ in: visible, duration }),
    reverse: visible,
    from: exitedState,
    enter: enteredState,
    leave: exitedState,
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
          className={css(className, rootProps.className)}
          style={{ ...style, ...rootProps.style, ...styles }}
        >
          {children}
        </AnimatedBox>
      )
  );
}
