import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { useTabContext } from '../TabContext';

export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 激活内容
   */
  active?: boolean;
  /**
   * @ignore
   * 适合动画的隐藏方式
   */
  animated?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 隐藏时销毁内容
   */
  destroyInactiveTabPane?: boolean;
  /**
   * 强制渲染内容
   */
  forceRender?: boolean;
  /**
   * 值
   */
  value?: any;
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

const TabPaneRoot = styled('div', {
  name: 'WuiTabPane',
  slot: 'Root'
})({
  flex: 'none',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

const TabPane = React.forwardRef<HTMLElement, TabPaneProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiTabPane' });
  const {
    active: activeProp = false,
    animated = false,
    destroyInactiveTabPane = false,
    forceRender = false,
    children,
    style,
    value,
    ...rest
  } = props;

  const { value: contextValue } = useTabContext();
  const active = contextValue != null ? contextValue === value : activeProp;
  const [visited, setVisited] = React.useState(forceRender);

  React.useEffect(() => {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);

  const inActiveStyle: React.CSSProperties = animated
    ? { visibility: 'hidden', overflowY: 'hidden', height: 0 }
    : { display: 'none' };

  return (
    <TabPaneRoot
      role="tabpanel"
      aria-hidden={!active}
      style={{ ...style, ...(!active ? inActiveStyle : {}) }}
      {...rest}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {(active || visited || forceRender) && children}
    </TabPaneRoot>
  );
});

export default TabPane;
