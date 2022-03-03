import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { springConfig, TransitionBaseProps } from '../styles/transitions';
import { useEventCallback } from '@wonder-ui/hooks';

export interface FadeProps extends TransitionBaseProps {}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  const {
    children,
    duration: durationProp,
    delay,
    in: inProp,
    immediate,
    style,
    onEnter,
    onEntered,
    onExit,
    onExited,
    ...rest
  } = props;

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
    return { cancel: true, opacity: 0, onStart, onRest };
  });

  React.useEffect(() => {
    api.start({
      opacity: inProp ? 1 : 0,
      delay,
      immediate,
      config: springConfig({ in: inProp, duration: durationProp })
    });
  }, [inProp, delay, immediate, durationProp]);

  return (
    <animated.div
      style={{
        ...style,
        opacity: styles.opacity,
        //@ts-expect-error
        display: styles.opacity.to((o) => {
          return o === 0 ? 'none' : style?.display;
        })
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </animated.div>
  );
});

export default Fade;
