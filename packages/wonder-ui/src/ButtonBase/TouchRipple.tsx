import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { animated, Transition } from '@react-spring/web';
import { css } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';
import { touchRippleClasses, TouchRippleClasses } from './TouchRippleClasses';
import { useForkRef, useSafeState } from '@wonder-ui/hooks';

const DURATION = 550;
export const DELAY_RIPPLE = 80;

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;

const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
`;

export const TouchRippleRoot = styled('span', {
  name: 'MuiTouchRippleRoot',
  slot: 'Root'
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
});

export const TouchRippleRipple = styled('span', {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})`
  opacity: 0;
  position: absolute;
  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({ theme }) => theme.transitions.duration.shorter}ms;
  }
  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }
  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    left: 0;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;

export interface TouchRippleAction {
  pulsate(): void;
  start(event: any): void;
  stop(event: any, cb?: () => void): void;
}

export interface TouchRippleProps {
  actionRef?: React.Ref<TouchRippleAction | undefined>;
  center?: boolean;
  classes?: Partial<TouchRippleClasses>;
  className?: string;
}

interface RippleProps {
  pulsate: boolean;
  rippleSize: number;
  rippleX: number;
  rippleY: number;
}

const TouchRipple: React.FC<TouchRippleProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTouchRipple' });
    const {
      actionRef,
      center: centerProp = false,
      classes = {},
      className,
      ...rest
    } = props;

    const [ripples, setRipples] = useSafeState<RippleProps[]>([]);
    const nextKey = React.useRef(0);
    const rippleCallback = React.useRef<(() => void) | null | undefined>();

    React.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);

    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = React.useRef(false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = React.useRef<NodeJS.Timeout>();

    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = React.useRef<Function | null>(null);
    const container = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(container, ref);

    React.useEffect(() => {
      return () => {
        clearTimeout(startTimer.current!);
      };
    }, []);

    const startCommit = React.useCallback(
      (params: RippleProps & { cb?: () => void }) => {
        const { pulsate, rippleX, rippleY, rippleSize, cb } = params;

        setRipples((oldRipples) => [
          ...oldRipples,
          {
            key: nextKey.current,
            pulsate,
            rippleX,
            rippleY,
            rippleSize
          }
        ]);
        nextKey.current += 1;
        rippleCallback.current = cb;
      },
      [classes]
    );

    const start = React.useCallback(
      (
        event: any = {},
        options: {
          pulsate?: boolean;
          center?: boolean;
          fakeElement?: boolean;
        } = {},
        cb?: () => void
      ) => {
        const {
          pulsate = false,
          center = centerProp || options.pulsate,
          fakeElement = false // For test purposes
        } = options;

        if (event.type === 'mousedown' && ignoringMouseDown.current) {
          ignoringMouseDown.current = false;
          return;
        }

        if (event.type === 'touchstart') {
          ignoringMouseDown.current = true;
        }

        const element = fakeElement ? null : container.current;
        const rect = element
          ? element.getBoundingClientRect()
          : {
              width: 0,
              height: 0,
              left: 0,
              top: 0
            };

        // Get the size of the ripple
        let rippleX: number;
        let rippleY: number;
        let rippleSize: number;

        if (
          center ||
          (event.clientX === 0 && event.clientY === 0) ||
          (!event.clientX && !event.touches)
        ) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          const { clientX, clientY } = event.touches ? event.touches[0] : event;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

          // For some reason the animation is broken on Mobile Chrome if the size if even.
          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          const sizeX =
            Math.max(
              Math.abs((element ? element.clientWidth : 0) - rippleX),
              rippleX
            ) *
              2 +
            2;
          const sizeY =
            Math.max(
              Math.abs((element ? element.clientHeight : 0) - rippleY),
              rippleY
            ) *
              2 +
            2;
          rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }

        // Touche devices
        if (event.touches) {
          // check that this isn't another touchstart due to multitouch
          // otherwise we will only clear a single timer when unmounting while two
          // are running
          if (startTimerCommit.current === null) {
            // Prepare the ripple effect.
            startTimerCommit.current = () => {
              startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
            };
            // Delay the execution of the ripple effect.
            startTimer.current = setTimeout(() => {
              if (startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
              }
            }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
          }
        } else {
          startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
        }
      },
      [centerProp, startCommit]
    );

    const pulsate = React.useCallback(() => {
      start({}, { pulsate: true });
    }, [start]);

    const stop = React.useCallback(
      (event: React.TouchEvent, cb?: () => void) => {
        clearTimeout(startTimer.current!);

        // The touch interaction occurs too quickly.
        // We still want to show ripple effect.
        if (event.type === 'touchend' && startTimerCommit.current) {
          startTimerCommit.current();
          startTimerCommit.current = null;
          startTimer.current = setTimeout(() => {
            stop(event, cb);
          });
          return;
        }

        startTimerCommit.current = null;

        setRipples((oldRipples) => {
          if (oldRipples.length > 0) {
            return oldRipples.slice(1);
          }

          return oldRipples;
        });

        rippleCallback.current = cb;
      },
      []
    );

    React.useImperativeHandle(actionRef, () => ({ pulsate, start, stop }), [
      pulsate,
      start,
      stop
    ]);

    return (
      <TouchRippleRoot
        className={css(classes.root, touchRippleClasses.root, className)}
        ref={handleRef}
        {...rest}
      >
        <Transition
          items={ripples}
          from={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: DURATION }}
        >
          {({ opacity }, item) => {
            return (
              <TouchRippleRipple
                style={{
                  width: item.rippleSize,
                  height: item.rippleSize,
                  top: -(item.rippleSize / 2) + item.rippleY,
                  left: -(item.rippleSize / 2) + item.rippleX
                }}
                className={css(
                  classes.ripple,
                  touchRippleClasses.ripple,
                  touchRippleClasses.rippleVisible,
                  {
                    [css(
                      classes.ripplePulsate,
                      touchRippleClasses.ripplePulsate
                    )]: item.pulsate
                  }
                )}
              >
                <animated.div
                  className={css(classes.child, touchRippleClasses.child, {
                    [css(
                      classes.childPulsate,
                      touchRippleClasses.childPulsate
                    )]: item.pulsate
                  })}
                  style={{ opacity }}
                />
              </TouchRippleRipple>
            );
          }}
        </Transition>
      </TouchRippleRoot>
    );
  }
);

export default TouchRipple;
