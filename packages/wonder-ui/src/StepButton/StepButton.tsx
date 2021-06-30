import * as React from 'react';
import { forwardRef } from '@wonder-ui/utils';

/**
 * When click and hold on a button - the speed of auto changing the value.
 */
const STEP_INTERVAL = 200;

/**
 * When click and hold on a button - the delay before auto changing the value.
 */
const STEP_DELAY = 600;

export interface StepButtonProps {
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  delay?: number;
  interval?: number;
  onStep?(): void;
  style?: React.CSSProperties;
}

const StepButton = forwardRef<HTMLElement, StepButtonProps>((props, ref) => {
  const {
    component: Comp = 'span',
    delay = STEP_DELAY,
    interval = STEP_INTERVAL,
    onStep,
    ...rest
  } = props;

  const stepTimeoutRef = React.useRef<any>();

  const onStepRef = React.useRef<StepButtonProps['onStep']>();
  onStepRef.current = onStep;

  // We will interval update step when hold mouse down
  const onStepMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onStepRef.current) {
      onStepRef.current();
    }

    // Loop step for interval
    function loopStep() {
      if (onStepRef.current) {
        onStepRef.current();
      }

      stepTimeoutRef.current = setTimeout(loopStep, interval);
    }

    // First time press will wait some time to trigger loop step update
    stepTimeoutRef.current = setTimeout(loopStep, delay);
  };

  const onStopStep = () => {
    clearTimeout(stepTimeoutRef.current);
  };

  React.useEffect(() => onStopStep, []);

  return (
    <Comp
      unselectable="no"
      role="button"
      {...rest}
      onMouseUp={onStopStep}
      onMouseLeave={onStopStep}
      onMouseDown={onStepMouseDown}
      ref={ref as React.Ref<HTMLElement>}
    />
  );
});

export default StepButton;
