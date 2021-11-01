import * as React from 'react';
import styled from '../styles/styled';
import { COMPONENT_NAME } from './SwipeItemClasses';
import { composeClasses, css, warn } from '@wonder-ui/utils';
import { SwipeContext } from '../Swipe/SwipeContext';
import { SwipeItemState } from './SwipeItemTypes';
import {
  useCreation,
  useId,
  useMount,
  useReactive,
  useUnmount
} from '@wonder-ui/hooks';
import type { SwipeItemProps, SwipeItemStyleProps } from './SwipeItemTypes';

const useClasses = (styleProps: SwipeItemStyleProps) => {
  const { active, classes } = styleProps;

  const slots = {
    root: ['root', active && 'active']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

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

    if (!context) {
      warn('<SwipeItem> must be a child component of <Swipe>.');
      return null;
    }

    const {
      activeIndex,
      store,
      props: parentProps,
      state: parentState
    } = context;

    const state = useReactive<SwipeItemState>({ offset: 0 });

    const itemKey = useId('swipe-item-');

    store.set(itemKey, state);

    useUnmount(() => {
      store.delete(itemKey);
    });

    const index = useCreation(() => {
      return Array.from(store.keys()).indexOf(itemKey);
    }, [store, itemKey]);

    const mounted = useMount();
    const rendered = React.useRef<boolean>(false);

    const computedStyle = React.useMemo(() => {
      const style: React.CSSProperties = {};

      if (parentProps.vertical) {
        style.height = parentState.height;
      } else {
        style.width = parentState.width;
      }

      if (state.offset) {
        style.transform = `translate${parentProps.vertical ? 'Y' : 'X'}(${
          state.offset
        }px)`;
      }

      return style;
    }, [
      state.offset,
      parentState.height,
      parentState.width,
      parentProps.vertical
    ]);

    const shouldRender = useCreation(() => {
      if (!parentProps.lazyRender || rendered.current) {
        return true;
      }

      // wait for all item to mount, so we can get the exact count
      if (!mounted) {
        return false;
      }

      const count = React.Children.count(parentProps.children);

      const maxActive = count - 1;
      const prevActive =
        activeIndex === 0 && parentProps.loop ? maxActive : activeIndex - 1;
      const nextActive =
        activeIndex === maxActive && parentProps.loop ? 0 : activeIndex + 1;

      rendered.current =
        index === activeIndex || index === prevActive || index === nextActive;

      return rendered.current;
    }, [
      parentProps.children,
      parentProps.lazyRender,
      parentProps.loop,
      activeIndex,
      index,
      mounted
    ]);

    const styleProps = {
      ...props,
      active: index === activeIndex
    };

    const classes = useClasses(styleProps);

    return (
      <SwipeItemRoot
        className={css(classes.root, className)}
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
