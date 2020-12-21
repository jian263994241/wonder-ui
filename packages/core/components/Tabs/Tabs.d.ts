import * as React from 'react';

export interface TabsProps {
  /**
   * tab数据
   */
  tabs?: {
    title: React.ReactNode;
    key?: string;
  }[];

  /**
   * TabBar位置	 | default: top
   * */
  tabBarPosition?: 'top' | 'bottom' | 'left' | 'right';
  /**
   *  替换TabBar
   * ((props: TabBarPropsType) => React.ReactNode) | false;
   */
  renderTabBar?: (props: any) => React.ReactNode;
  /**
   * 初始化Tab, index or key
   */
  initialPage?: string | number;
  /**
   * 当前Tab, index or key
   */
  page?: string | number;
  /**
   * 是否可以滑动内容切换 | default: true
   * */
  swipeable?: boolean;
  /**
   * 使用跟手滚动 | default: true
   * */
  useOnPan?: boolean;
  /** 预加载两侧Tab数量 | default: 1 */
  prerenderingSiblingsNumber?: number;
  /** 是否开启切换动画 | default: true */
  animated?: boolean;
  /**
   * tab切换时触发
   * (tab: Models.TabData, index: number) => void;
   */
  onChange?: (tabData: any, index: number) => void;
  /**
   * tab 被点击的回调
   * (tab: Models.TabData, index: number) => void;
   * */
  onTabClick?: (tabData: any, index: number) => void;
  /** 销毁超出范围Tab | default: false */
  destroyInactiveTab?: boolean;
  /** 滑动切换阈值(宽度比例) | default: 0.3 */
  distanceToChangeTab?: number;
  /** 是否启用分页模式 | default: true */
  usePaged?: number;
  /** Tab方向 | default: horizontal */
  tabDirection?: 'horizontal' | 'vertical';
  // TabBar shortcut settings.
  /** tabBar下划线样式 */
  tabBarUnderlineStyle?: object;
  /** tabBar背景色 */
  tabBarBackgroundColor?: string;
  /** tabBar激活Tab文字颜色 */
  tabBarActiveTextColor?: string;
  /** tabBar非激活Tab文字颜色 */
  tabBarInactiveTextColor?: string;
  /** tabBar文字样式 */
  tabBarTextStyle?: object;
  /** can't render content | default: false */
  noRenderContent?: boolean;
  /** use left instead of transform | default: false */
  useLeftInsteadTransform?: boolean;
}

export default function Tabs(props: TabsProps): JSX.Element;
