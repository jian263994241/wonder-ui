import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';
import {
  getAutoHeightDuration,
  getTransitionDurationFromElement,
  springConfig,
  TransitionBaseProps
} from '../styles/transitions';
import { unitToPx } from '@wonder-ui/utils';
import { useEventCallback, useForkRef } from '@wonder-ui/hooks';

export interface CollapseProps extends Omit<TransitionBaseProps, 'duration'> {
  /**
   * 折叠尺寸, 支持 px vw vh rem 单位，默认 px
   * @default 0
   */
  collapsedSize?: string | number;
  /**
   * 动画时间 ms
   * @default auto
   */
  duration?: 'auto' | number | { enter: number; exit: number };
  /**
   * 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
}

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const {
      children,
      collapsedSize: collapsedSizeProp,
      direction = 'vertical',
      in: inProp,
      onEnter,
      onEntered,
      onExit,
      onExited,
      duration: durationProp = 'auto',
      style,
      immediate,
      delay,
      ...rest
    } = props;

    const nodeRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(nodeRef, ref);
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

    const onStart = useEventCallback(() => {
      if (inProp) {
        onEnter?.();
      } else {
        onExit?.();
      }
    });

    const onRest = useEventCallback(() => {
      if (inProp) {
        onEntered?.();
      } else {
        onExited?.();
      }
    });

    const [styles, api] = useSpring(() => {
      return {
        cancel: true,
        size: collapsedSize,
        onStart,
        onRest
      };
    });

    React.useEffect(() => {
      const { current: node } = nodeRef;

      if (node) {
        api.start({
          size: inProp ? node[scrollSize] : collapsedSize,
          immediate,
          delay,
          config: springConfig({
            in: inProp,
            duration: getTransitionDuration(node)
          })
        });
      }
    }, [inProp, collapsedSize, immediate, delay]);

    return (
      <animated.div
        ref={handleRef}
        style={{
          ...style,
          overflow: 'hidden',
          [dimension]: styles.size
        }}
        {...rest}
      >
        {children}
      </animated.div>
    );
  }
);

export default Collapse;
