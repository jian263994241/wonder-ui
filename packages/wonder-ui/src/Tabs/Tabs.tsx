import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  useEventCallback,
  useReactive,
  useWindowSize,
  useForkRef
} from '@wonder-ui/hooks';
import { nextTick, isVisible, isDef } from '@wonder-ui/utils';
import { TabsProps } from './TabsTypes';
import Sticky from '../Sticky';
import Tab, { TabProps } from '../Tab';
import ButtonBase from '../ButtonBase';
import Swipe from '../Swipe';

const COMPONENT_NAME = 'WuiTabs';

const TabsRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({}));

const TabsHeader = styled('div', { name: COMPONENT_NAME, slot: 'Header' })({
  overflow: 'hidden'
});

const TabsNav = styled('div', { name: COMPONENT_NAME, slot: 'Nav' })({
  position: 'relative',
  display: 'flex',
  userSelect: 'none',
  height: 44
});

const TabsTitle = styled(ButtonBase, { name: COMPONENT_NAME, slot: 'Title' })(
  ({ theme }) => ({
    ...theme.typography.body1,
    flex: '1 0 auto',
    padding: '0 12px',
    alignItems: 'center'
  })
);

const TabsIndicator = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  width: 40,
  height: 2,
  backgroundColor: theme.palette.primary.main
}));

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    active,
    children: childrenProp,
    disableIndicator = false,
    indicatorStyle,
    sticky = false,
    scrollspy = false,
    offsetTop = 0
  } = props;

  const children = useChildren(childrenProp, Tab);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const navRef = React.useRef<HTMLDivElement>(null);
  const titleRefs = React.useRef<React.MutableRefObject<HTMLDivElement>[]>([]);

  const windowSize = useWindowSize();

  const state = useReactive({
    inited: false,
    position: '',
    lineStyle: {} as React.CSSProperties,
    currentIndex: 2
  });

  const lockScrollRef = React.useRef(false);
  const stickyFixedRef = React.useRef(false);

  const setTitleRefs = (node: HTMLElement | null, index: number) => {
    titleRefs.current[index] = {
      current: node
    } as React.MutableRefObject<HTMLDivElement>;
  };

  const getTabName = (
    tab: React.ReactElement<TabProps>,
    index: number
  ): number | string => tab.props.name ?? index;

  const findAvailableTab = (index: number) => {
    const diff = index < state.currentIndex ? -1 : 1;

    while (index >= 0 && index < children.length) {
      if (!children[index].props.disabled) {
        return index;
      }

      index += diff;
    }
  };

  const setCurrentIndex = (currentIndex: number) => {
    const newIndex = findAvailableTab(currentIndex);

    if (!isDef(newIndex)) {
      return;
    }

    const newTab = children[newIndex];
    const newName = getTabName(newTab, newIndex);
    const shouldEmitChange = state.currentIndex !== null;

    state.currentIndex = newIndex;

    if (newName !== active) {
      // emit('update:active', newName);

      if (shouldEmitChange) {
        // emit('change', newName, newTab.title);
      }
    }
  };

  // correct the index of active tab
  const setCurrentIndexByName = (name: number | string) => {
    const matched = children.find(
      (tab, index) => getTabName(tab, index) === name
    );

    const index = matched ? children.indexOf(matched) : 0;

    setCurrentIndex(index);
  };

  // console.log(children);

  // const scrollToCurrentContent = (immediate = false) => {
  //   if (scrollspy) {
  //     const target = children[state.currentIndex].$el;

  //     if (target && scroller.value) {
  //       const to = getElementTop(target, scroller.value) - scrollOffset.value;

  //       lockScroll = true;
  //       scrollTopTo(
  //         scroller.value,
  //         to,
  //         immediate ? 0 : +props.duration,
  //         () => {
  //           lockScroll = false;
  //         }
  //       );
  //     }
  //   }
  // };

  // update nav bar style
  const setLine = useEventCallback(() => {
    const shouldAnimate = state.inited;

    nextTick(() => {
      const { current: titles } = titleRefs;

      if (
        disableIndicator ||
        !titles[state.currentIndex] ||
        !isVisible(rootRef.current!)
      ) {
        return;
      }

      const title = titles[state.currentIndex].current;

      const left = title.offsetLeft + title.offsetWidth / 2;

      const lineWidth = title.offsetWidth;

      const lineStyle: React.CSSProperties = {
        ...indicatorStyle,
        width: indicatorStyle?.width || lineWidth,
        transform: `translateX(${left}px) translateX(-50%)`
      };

      if (shouldAnimate) {
        lineStyle.transitionDuration = `${200}s`;
      }

      state.lineStyle = lineStyle;
    });
  });

  React.useEffect(setLine, [windowSize.width]);

  const onStickyScroll = (params: { isFixed: boolean; scrollTop: number }) => {
    stickyFixedRef.current = params.isFixed;
    // emit('scroll', params);
  };

  const scrollTo = (name: number | string) => {
    nextTick(() => {
      setCurrentIndexByName(name);
      // scrollToCurrentContent(true);
    });
  };

  const renderNav = () => {
    return children.map(({ props }, index) => {
      return (
        <TabsTitle
          role="tab"
          key={index}
          ref={(node) => setTitleRefs(node, index)}
          disableRipple
        >
          {props.title}
        </TabsTitle>
      );
    });
  };

  const renderHeader = () => {
    return (
      <TabsHeader ref={wrapRef}>
        <TabsNav role="tablist" ref={navRef}>
          {renderNav()}
          {!disableIndicator && children.length > 0 && (
            <TabsIndicator style={{ ...state.lineStyle }} />
          )}
        </TabsNav>

        {children}
      </TabsHeader>
    );
  };

  return (
    <TabsRoot ref={handleRef}>
      {sticky ? (
        <Sticky
          container={rootRef.current}
          offsetTop={offsetTop}
          onScroll={onStickyScroll}
        >
          {renderHeader()}
        </Sticky>
      ) : (
        renderHeader()
      )}
      <Swipe>{children}</Swipe>
    </TabsRoot>
  );
});

export default Tabs;
