import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  css,
  forwardRef,
  generateUtilityClasses,
  getDevice,
  composeClasses
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
  classes?: Partial<typeof stepButtonClasses>;
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  delay?: number;
  disabled?: boolean;
  interval?: number;
  onStep?(): void;
  style?: React.CSSProperties;
}

const COMPONENT_NAME = 'WuiStepButton';

const stepButtonClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'disabled'
]);

const useClasses = (styleProps: StepButtonProps) => {
  const { classes, disabled } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const StepButtonRoot = styled('span', { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: StepButtonProps;
}>(({ styleProps }) => ({
  touchAction: 'manipulation',
  userSelect: 'none',

  ...(styleProps.disabled && {
    pointerEvents: 'none'
  })
}));

const StepButton = forwardRef<HTMLElement, StepButtonProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
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

  const classes = useClasses(props);

  const onStepRef = React.useRef<StepButtonProps['onStep']>();
  onStepRef.current = onStep;

  // We will interval update step when hold mouse down
  const onStepMouseDown = (e: any) => {
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
      className={css(className, classes.root)}
      {...rest}
      {...handleProps}
      styleProps={styleProps}
      ref={ref as React.Ref<HTMLElement>}
    />
  );
});

export default StepButton;
