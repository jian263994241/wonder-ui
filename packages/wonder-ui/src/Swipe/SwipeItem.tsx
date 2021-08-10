import * as React from 'react';
import { useMount, useReactive } from '@wonder-ui/hooks';
import type { SwipeItemProps } from './SwipeTypes';

const SwipeItem = React.forwardRef<HTMLDivElement, SwipeItemProps>(
  (props, ref) => {
    const {
      actionRef,
      activeIndex = 0,
      count = 0,
      children,
      style,
      size,
      index = -1,
      vertical,
      loop,
      disableLazyLoading,
      ...rest
    } = props;

    const mounted = useMount();
    const rendered = React.useRef<boolean>(false);

    const state = useReactive({ offset: 0 });

    const computedStyle = React.useMemo(() => {
      const style: React.CSSProperties = {};

      if (size) {
        style[vertical ? 'height' : 'width'] = size;
      }

      if (state.offset) {
        style.transform = `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`;
      }

      return style;
    }, [state.offset, size, vertical]);

    const shouldRender = React.useMemo(() => {
      if (disableLazyLoading || rendered.current) {
        return true;
      }

      // wait for all item to mount, so we can get the exact count
      if (!mounted) {
        return false;
      }

      const maxActive = count - 1;
      const prevActive =
        activeIndex === 0 && loop ? maxActive : activeIndex - 1;
      const nextActive =
        activeIndex === maxActive && loop ? 0 : activeIndex + 1;

      rendered.current =
        index === activeIndex || index === prevActive || index === nextActive;

      return rendered.current;
    }, [activeIndex, index, loop, disableLazyLoading, count, mounted]);

    const setOffset = (offset: number) => {
      state.offset = offset;
    };

    React.useImperativeHandle(actionRef, () => ({ setOffset }), []);

    return (
      <div style={{ ...style, ...computedStyle }} ref={ref} {...rest}>
        {shouldRender ? children : null}
      </div>
    );
  }
);

export default SwipeItem;
