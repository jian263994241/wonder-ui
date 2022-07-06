import * as React from 'react';
import { animated, useTransition } from '@react-spring/web';
import { css, withStopPropagation } from '@wonder-ui/utils';
import { springConfig, TransitionProps } from '../styles/transitions';
import { useEventCallback } from '@wonder-ui/hooks';

export interface FadeProps<C extends React.ElementType = React.ElementType>
  extends TransitionProps<C> {}

export default function Fade<C extends React.ElementType>(props: FadeProps<C>) {
  const {
    className,
    children,
    component = 'div',
    componentProps,
    duration: durationProp,
    delay,
    in: visible = false,
    keepMounted = false,
    propagationEvent,
    style,
    onEnter,
    onEntered,
    onExit,
    onExited,
    ...rest
  } = props;

  const [isExited, setExited] = React.useState(!visible);

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
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
