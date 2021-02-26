export type easingType = {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  ease: string;
  sharp: string;
};

export const easing: easingType = {
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

export type DurationType = {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
};

export const duration: DurationType = {
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

export const formatMs = (milliseconds: number) =>
  `${Math.round(milliseconds)}ms`;

export const create = (
  props: string | string[] = 'all',
  options: {
    duration?: keyof DurationType | number;
    easing?: keyof easingType;
    delay?: number;
  } = {}
) => {
  const {
    duration: durationOption = 'standard',
    easing: easingOption = 'easeInOut',
    delay = 0
  } = options;

  return (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp) =>
        `${animatedProp} ${
          typeof durationOption === 'string'
            ? formatMs(duration[durationOption])
            : formatMs(durationOption)
        } ${easing[easingOption]} ${
          typeof delay === 'string' ? delay : formatMs(delay)
        }`
    )
    .join(',');
};
