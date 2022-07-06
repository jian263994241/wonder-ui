import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { css } from '@wonder-ui/utils';
import {
  getAutoHeightDuration,
  getTransitionDurationFromElement,
  springConfig,
  TransitionDuration,
  TransitionProps
} from '../styles/transitions';
import { mergedRef, unitToPx, withStopPropagation } from '@wonder-ui/utils';
import { useEventCallback } from '@wonder-ui/hooks';

export interface CollapseProps<C extends React.ElementType = React.ElementType>
  extends Omit<TransitionProps<C>, 'duration' | 'keepMounted'> {
  /**
   * 折叠尺寸, 支持 px vw vh rem 单位，默认 px
   * @default 0
   */
  collapsedSize?: string | number;
  /**
   * 动画时间 ms
   * @default auto
   */
  duration?: 'auto' | TransitionDuration;
  /**
   * 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 立即完成
   */
  immediate?: boolean;
}

export default function Collapse<C extends React.ElementType>(
  props: CollapseProps<C>
) {
  const {
    children,
    className,
    collapsedSize: collapsedSizeProp,
    component = 'div',
    componentProps,
    direction = 'vertical',
    in: visible = false,
    immediate,
    onEnter,
    onEntered,
    onExit,
    onExited,
    duration: durationProp = 'auto',
    style,
    delay,
    propagationEvent,
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
  const isHorizontal = direction === 'horizontal';
  const dimension = isHorizontal ? 'width' : 'height';
  const scrollSize = isHorizontal ? 'scrollWidth' : 'scrollHeight';
  const collapsedSize = React.useMemo(
    () => unitToPx(collapsedSizeProp || 0),
    [collapsedSizeProp]
  );

  const getTransitionDuration = (node: any) => {
    let transitionDuration;

    if (!node) return 0;

    if (durationProp === 'auto') {
      transitionDuration = getAutoHeightDuration(
        node[scrollSize] - collapsedSize
      );
    } else {
      transitionDuration =
        typeof durationProp === 'number'
          ? durationProp
          : getTransitionDurationFromElement(node);
    }

    return transitionDuration;
  };

  const handleStart = useEventCallback(() => {
    if (visible) {
      onEnter?.();
    } else {
      onExit?.();
    }
  });

  const handleRest = useEventCallback(() => {
    if (visible) {
      onEntered?.();
    } else {
      onExited?.();
    }
  });

  const [styles, api] = useSpring(() => {
    return {
      cancel: true,
      size: collapsedSize,
      onStart: handleStart,
      onRest: handleRest
    };
  });

  React.useEffect(() => {
    const { current: node } = nodeRef;

    if (node) {
      api.start({
        immediate,
        size: visible ? node[scrollSize] : collapsedSize,
        delay,
        config: springConfig({
          in: visible,
          duration: getTransitionDuration(node)
        })
      });
    }
  }, [visible, collapsedSize, delay, immediate]);

  const AnimatedBox = React.useMemo(() => animated(component), [component]);
  const rootProps = { ...rest, ...componentProps } as any;

  return withStopPropagation(
    propagationEvent,
    <AnimatedBox
      {...rootProps}
      ref={mergedRef(nodeRef, rootProps.ref)}
      className={css(className, componentProps?.className)}
      style={{
        ...style,
        overflow: 'hidden',
        [dimension]: styles.size
      }}
    >
      {children}
    </AnimatedBox>
  );
}
