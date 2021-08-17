import * as React from 'react';
import styled from '../styles/styled';
import { SwipeContext } from '../Swipe/SwipeContext';
import { useMount, useReactive, useConst } from '@wonder-ui/hooks';
import { warn, generateUtilityClasses, css, findIndex } from '@wonder-ui/utils';
import type { SwipeItemProps, SwipeItemClasses } from './SwipeItemTypes';
import type { SwipeItemAction } from '../Swipe/SwipeTypes';

const COMPONENT_NAME = 'WuiSwipeItem';

export const swipeItemClasses: SwipeItemClasses = generateUtilityClasses(
  COMPONENT_NAME,
  ['root']
);

const SwipeItemRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  height: '100%'
});

const SwipeItem = React.forwardRef<HTMLDivElement, SwipeItemProps>(
  (props, ref) => {
    const { children, className, style, ...rest } = props;
    const context = React.useContext(SwipeContext);
    const actionRef = React.useRef<SwipeItemAction>();

    if (!context) {
      warn('<SwipeItem> must be a child component of <Swipe>.');
      return null;
    }

    const {
      activeIndex = 0,
      count = 0,
      size,
      vertical,
      loop,
      disableLazyLoading,
      actionRefs
    } = context;

    const index = React.useMemo(() => {
      let currentIndex = findIndex(actionRefs, (item) => item === actionRef);

      if (currentIndex < 0) {
        actionRefs.push(actionRef);
        currentIndex = findIndex(actionRefs, (item) => item === actionRef);
      }

      return currentIndex;
    }, []);

    React.useEffect(
      () => () => {
        actionRefs.splice(index, 1);
      },
      [index]
    );

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
      <SwipeItemRoot
        className={css(swipeItemClasses.root, className)}
        style={{ ...style, ...computedStyle }}
        ref={ref}
        {...rest}
      >
        {shouldRender ? children : null}
      </SwipeItemRoot>
    );
  }
);

export default SwipeItem;
