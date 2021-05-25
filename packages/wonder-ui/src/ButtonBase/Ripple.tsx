import * as React from 'react';
import { css } from '@wonder-ui/utils';
import { useEventCallback, useEnhancedEffect } from '@wonder-ui/hooks';

export interface RippleProps extends React.HTMLProps<HTMLSpanElement> {
  classes: Record<
    | 'ripple'
    | 'rippleVisible'
    | 'ripplePulsate'
    | 'child'
    | 'childLeaving'
    | 'childPulsate',
    string
  >;
  in?: boolean;
  onExited?(): void;
  pulsate?: boolean;
  rippleSize?: number;
  rippleX?: number;
  rippleY?: number;
  timeout: number;
}

const Ripple = React.forwardRef<HTMLSpanElement, RippleProps>((props, ref) => {
  const {
    className,
    classes,
    pulsate = false,
    rippleX = 0,
    rippleY = 0,
    rippleSize = 0,
    in: inProp,
    onExited = () => {},
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);

  const rippleClassName = css(
    className,
    classes.ripple,
    classes.rippleVisible,
    {
      [classes.ripplePulsate]: pulsate
    }
  );

  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };

  const childClassName = css(classes?.child, {
    [classes?.childLeaving]: leaving,
    [classes?.childPulsate]: pulsate
  });

  const handleExited = useEventCallback(onExited);
  // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority
  useEnhancedEffect(() => {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true);

      // react-transition-group#onExited
      const timeoutId = setTimeout(handleExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [handleExited, inProp, timeout]);
  return (
    <span className={rippleClassName} style={rippleStyles} ref={ref}>
      <span className={childClassName} />
    </span>
  );
});

export default Ripple;
