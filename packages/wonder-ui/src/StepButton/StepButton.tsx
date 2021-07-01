import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  css,
  forwardRef,
  generateUtilityClasses,
  getDevice
} from '@wonder-ui/utils';
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
  disabled?: boolean;
  interval?: number;
  onStep?(): void;
  style?: React.CSSProperties;
}

export interface StepButtonStyleProps extends StepButtonProps {}

const componentName = 'WuiStepButton';

const stepButtonClasses = generateUtilityClasses(componentName, ['root']);

const StepButtonRoot = styled('span', { name: componentName, slot: 'Root' })<{
  styleProps: StepButtonStyleProps;
}>(({ styleProps }) => ({
  touchAction: 'manipulation',
  userSelect: 'none',

  ...(styleProps.disabled && {
    pointerEvents: 'none'
  })
}));

const StepButton = forwardRef<HTMLElement, StepButtonProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: componentName });
  const {
    className,
    component = 'span',
    delay = STEP_DELAY,
    disabled = false,
    interval = STEP_INTERVAL,
    onStep,
    ...rest
  } = props;

  const { current: device } = React.useRef(getDevice());

  const stepTimeoutRef = React.useRef<any>();

  const onStepRef = React.useRef<StepButtonProps['onStep']>();
  onStepRef.current = onStep;

  // We will interval update step when hold mouse down
  const onStepMouseDown = (e: any) => {
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

  const handleProps = device.desktop
    ? {
        onMouseUp: onStopStep,
        onMouseLeave: onStopStep,
        onMouseDown: onStepMouseDown
      }
    : {
        onTouchEnd: onStopStep,
        onTouchCancel: onStopStep,
        onTouchMove: onStopStep,
        onTouchStart: onStepMouseDown
      };

  const styleProps = { ...props, disabled };

  return (
    <StepButtonRoot
      aria-disabled={disabled}
      as={component}
      role="button"
      className={css(className, stepButtonClasses.root)}
      {...rest}
      {...handleProps}
      styleProps={styleProps}
      ref={ref as React.Ref<HTMLElement>}
    />
  );
});

export default StepButton;
