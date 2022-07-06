import BezierEasing from 'bezier-easing';
import { PropagationEvent } from '@wonder-ui/utils';

export const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  //
  ease: 'cubic-bezier(0.25, 0.01, 0.25, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

export const easingFunction = {
  easeInOut: BezierEasing(0.4, 0, 0.2, 1),
  easeOut: BezierEasing(0, 0, 0.2, 1),
  easeIn: BezierEasing(0.4, 0, 1, 1),
  ease: BezierEasing(0.25, 0.01, 0.25, 1),
  sharp: BezierEasing(0.4, 0, 0.6, 1)
};

//https://material.io/design/motion/speed.html#controlling-speed
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

export type TransitionDuration = number | { enter: number; exit: number };

export interface TransitionProps<
  C extends React.ElementType = React.ElementType,
  P = React.ComponentProps<C>
> {
  /**
   * className
   */
  className?: string;
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * Element
   * @default 'div'
   */
  component?: C;
  /**
   * Element props
   */
  componentProps?: P;
  /**
   * 组件保持挂载, 退出时不销毁
   * @default false
   */
  keepMounted?: boolean;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * 持续时间毫秒(ms)
   */
  duration?: TransitionDuration;
  /**
   * 动画开始前的延迟毫秒(ms)
   */
  delay?: number;
  /**
   * 是否显示
   * @default false
   */
  in?: boolean;
  /**
   * 阻止某些事件的冒泡
   * @default ['click']
   */
  propagationEvent?: PropagationEvent[];
  /**
   * transition event
   */
  onEnter?: () => void;
  /**
   * transition event
   */
  onEntered?: () => void;
  /**
   * transition event
   */
  onExit?: () => void;
  /**
   * transition event
   */
  onExited?: () => void;
}

export const getDuration = (
  durationProp?: TransitionDuration,
  visible?: boolean
) => {
  let timeout = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  };

  if (typeof durationProp === 'number') {
    Object.assign(timeout, {
      enter: durationProp,
      exit: durationProp
    });
  }

  if (typeof durationProp === 'object') {
    Object.assign(timeout, durationProp);
  }

  return visible ? duration.enteringScreen : duration.leavingScreen;
};

export const springConfig = (props: {
  duration?: TransitionDuration;
  in?: boolean;
  easing?: BezierEasing.EasingFunction;
}) => {
  return {
    duration: getDuration(props.duration, props.in),
    easing:
      props.easing ?? (props.in ? easingFunction.easeOut : easingFunction.sharp)
  };
};

export const formatMs = (milliseconds: number) =>
  `${Math.round(milliseconds)}ms`;

type Mode = 'enter' | 'exit' | 'appear';

export const create = (
  props: string | string[] = 'all',
  options: {
    duration?: string | number;
    easing?: string | Partial<Record<Mode, string>>;
    delay?: string | number;
  } = {}
) => {
  const {
    duration: durationInput = duration.standard,
    easing: easingInput = easing.easeInOut,
    delay = 0
  } = options;

  return (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp) =>
        `${animatedProp} ${
          typeof durationInput === 'number'
            ? formatMs(durationInput)
            : durationInput
        } ${easingInput} ${typeof delay === 'number' ? formatMs(delay) : delay}`
    )
    .join(',');
};

export const getAutoHeightDuration = (height?: number) => {
  if (!height) {
    return 0;
  }

  const constant = height / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

export function getTransitionDurationFromElement(element?: HTMLElement) {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } =
    window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (
    (Number.parseFloat(transitionDuration) +
      Number.parseFloat(transitionDelay)) *
    1000
  );
}
