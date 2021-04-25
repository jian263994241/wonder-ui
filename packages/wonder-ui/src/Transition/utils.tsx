/**
 * The animation always start from the start
 */
export const reflow = (node: HTMLElement) => node.scrollTop;

type Mode = 'enter' | 'exit' | 'appear';

/**
 * Get transition props
 */
export const getTransitionProps = (
  props: {
    easing?: string | Partial<Record<Mode, string>>;
    style?: React.CSSProperties;
    timeout?: any;
  },
  options: {
    mode: Mode;
  }
) => {
  const { timeout, easing, style = {} } = props;

  return {
    duration:
      style.transitionDuration ||
      (typeof timeout === 'number'
        ? timeout
        : timeout
        ? timeout[options.mode] || 0
        : 0),
    easing:
      style.transitionTimingFunction ||
      (typeof easing === 'object' ? easing[options.mode] : easing),
    delay: style.transitionDelay
  };
};
