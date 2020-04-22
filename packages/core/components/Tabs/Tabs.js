import React from 'react';
import PropTypes from 'prop-types';
import { DefaultTabBar, Tabs as RMCTabs } from 'rmc-tabs';
import { withStyles } from '@wonder-ui/styles';
import styles from './styles';
// import {DefaultTabBar} from './DefaultTabBar';

/**
 * 用于让用户在不同的视图中进行切换。 
 * @see [更多样例](https://mobile.ant.design/kitchen-sink/components/tabs?lang=zh-CN#tabs-demo-0)
 * @visibleName Tabs 标签页
 */
function Tabs(props) {
  const { renderTab, classes, ...rest } = props;

  const renderTabBar = React.useCallback((props) => {
    return (
      <DefaultTabBar 
        {...props} 
        prefixCls={classes.bar} 
        renderTab={renderTab} 
      />
    );
  }, [renderTab]);

  return (
    <RMCTabs 
      renderTabBar={renderTabBar}
      prefixCls={classes.main}
      {...rest}
    />
  );
}

Tabs.propTypes = {
  /** 
   * tab数据	
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      key: PropTypes.string,
    })
  ),
  /** 
   * TabBar位置	 | default: top 
   * */
  tabBarPosition: PropTypes.oneOf(['top' , 'bottom' , 'left' , 'right']), 
  /**
   *  替换TabBar
   * ((props: TabBarPropsType) => React.ReactNode) | false;
   */
  renderTabBar: PropTypes.func,
  /** 
   * 初始化Tab, index or key
   */
  initialPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 
   * 当前Tab, index or key
   */
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 
   * 是否可以滑动内容切换 | default: true 
   * */
  swipeable: PropTypes.bool,
  /** 
   * 使用跟手滚动 | default: true 
   * */
  useOnPan: PropTypes.bool,
  /** 预加载两侧Tab数量 | default: 1 */
  prerenderingSiblingsNumber: PropTypes.number,
  /** 是否开启切换动画 | default: true */
  animated: PropTypes.bool,
  /** 
   * tab切换时触发
   * (tab: Models.TabData, index: number) => void;
   */
  onChange: PropTypes.func,
  /** 
   * tab 被点击的回调
   * (tab: Models.TabData, index: number) => void;
   * */
  onTabClick: PropTypes.func,
  /** 销毁超出范围Tab | default: false */
  destroyInactiveTab: PropTypes.bool,
  /** 滑动切换阈值(宽度比例) | default: 0.3 */
  distanceToChangeTab: PropTypes.number,
  /** 是否启用分页模式 | default: true */
  usePaged: PropTypes.bool,
  /** Tab方向 | default: horizontal */
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  // TabBar shortcut settings.
  /** tabBar下划线样式 */
  tabBarUnderlineStyle: PropTypes.object,
  /** tabBar背景色 */
  tabBarBackgroundColor: PropTypes.string,
  /** tabBar激活Tab文字颜色 */
  tabBarActiveTextColor: PropTypes.string,
  /** tabBar非激活Tab文字颜色 */
  tabBarInactiveTextColor: PropTypes.string,
  /** tabBar文字样式 */
  tabBarTextStyle: PropTypes.object,
  /** can't render content | default: false */
  noRenderContent: PropTypes.bool,
  /** use left instead of transform | default: false */
  useLeftInsteadTransform: PropTypes.bool,
};

export default withStyles(styles, { name: 'Tabs' })(Tabs);