import styled from '../styles/styled';
import { animated, SpringConfig, useTransition } from '@react-spring/web';
import { COMPONENT_NAME } from './RouteTransitionClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { easingFunction } from '../styles/transitions';
import type { RouteTransitionProps } from './RouteTransitionTypes';

const useClasses = (styleProps: RouteTransitionProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const RouteTransitionRoot = styled(animated.div, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  position: 'absolute',
  overflow: 'hidden'
});

const center = { x: 0, zIndex: 1 };
const left = { x: -20, zIndex: -1 };
const right = { x: 100, zIndex: 1 };

export default function RouteTransition(props: RouteTransitionProps) {
  const {
    className,
    children: items,
    duration = 375,
    childrenKey,
    reverse,
    style,
    ...rest
  } = props;

  const config: SpringConfig = {
    duration,
    easing: easingFunction.easeInOut
  };

  const transitions = useTransition(items, {
    // expires: false,
    config,
    key: childrenKey,
    delay: 66,
    initial: center,
    ...(reverse
      ? { from: left, enter: center, leave: right }
      : { from: right, enter: center, leave: left })
  });

  const classes = useClasses(props);

  return transitions(
    ({ x, ...styles }, item) =>
      item && (
        <RouteTransitionRoot
          className={css(classes.root, className)}
          style={{
            ...style,
            ...styles,
            transform: x.to((x) => {
              return `translate3d(${x}%, 0,0)`;
            })
          }}
          {...rest}
        >
          {item}
        </RouteTransitionRoot>
      )
  );
}
