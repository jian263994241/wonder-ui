import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { Context } from '../TabContext/TabContext';
import { useCreation } from '@wonder-ui/hooks';
import SwipeItem from '../SwipeItem';
import { SwipeContext } from '../Swipe/SwipeContext';
export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 节点类型
   */
  component?: React.ElementType;
  /**
   * 隐藏时销毁内容
   */
  destroyInactiveTabPane?: boolean;
  /**
   * 值
   */
  value?: any;
}

const TabPaneRoot = styled('div', {
  name: 'WuiTabPane',
  slot: 'Root'
})({
  width: '100%',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

const TabPane = React.forwardRef<HTMLDivElement, TabPaneProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTabPane' });
    const {
      destroyInactiveTabPane = false,
      children,
      component,
      value,
      ...rest
    } = props;

    const context = React.useContext(Context);

    if (!context) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[WUI] <TabPane> must be a child component of <TabContext>.'
        );
      }
      return null;
    }

    const { props: contextProps, state } = context;

    const inited = React.useRef(false);

    const active = useCreation(() => {
      const isActive = value === state.value;

      if (isActive && !inited.current) {
        inited.current = true;
      }

      return isActive;
    }, [state.value, value]);

    const swipeContext = React.useContext(SwipeContext);

    if (swipeContext) {
      return (
        <SwipeItem ref={ref} role="tabpanel" aria-hidden={!active}>
          {children}
        </SwipeItem>
      );
    }

    const shouldRender = inited.current || !contextProps.lazyRender;
    const content = shouldRender ? children : null;

    return (
      <TabPaneRoot
        as={component}
        role="tabpanel"
        aria-hidden={!active}
        hidden={!active}
        ref={ref}
        {...rest}
      >
        {content}
      </TabPaneRoot>
    );
  }
);

export default TabPane;
