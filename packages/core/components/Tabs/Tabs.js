import React from 'react';
import PropTypes from 'prop-types';
import { DefaultTabBar, Tabs as RMCTabs } from 'rmc-tabs';
import { withStyles } from '@wonder-ui/styles';
import styles from './styles';

/**
 * 用于让用户在不同的视图中进行切换。
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
  /** tabs data */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      key: PropTypes.string,
    })
  ),
  /** TabBar's position | default: top */
  tabBarPosition: PropTypes.oneOf(['top' , 'bottom' , 'left' , 'right']), 
  /**
   *  render for TabBar
   * ((props: TabBarPropsType) => React.ReactNode) | false;
   */
  renderTabBar: PropTypes.func,
  /** initial Tab, index or key */
  initialPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** current tab, index or key */
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** whether to switch tabs with swipe gestrue in the content | default: true */
  swipeable: PropTypes.bool,
  /** use scroll follow pan | default: true */
  useOnPan: PropTypes.bool,
  /** pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page | default: 1 */
  prerenderingSiblingsNumber: PropTypes.number,
  /** whether to change tabs with animation | default: true */
  animated: PropTypes.bool,
  /** 
   * callback when tab is switched
   * (tab: Models.TabData, index: number) => void;
   */
  onChange: PropTypes.func,
  /** 
   * on tab click 
   * (tab: Models.TabData, index: number) => void;
   * */
  onTabClick: PropTypes.func,
  /** destroy inactive tab | default: false */
  destroyInactiveTab: PropTypes.bool,
  /** distance to change tab, width ratio | default: 0.3 */
  distanceToChangeTab: PropTypes.number,
  /** use paged | default: true */
  usePaged: PropTypes.bool,
  /** tab paging direction | default: horizontal */
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  // TabBar shortcut settings.
  /** tabBar underline style */
  tabBarUnderlineStyle: PropTypes.object,
  /** tabBar background color */
  tabBarBackgroundColor: PropTypes.string,
  /** tabBar active text color */
  tabBarActiveTextColor: PropTypes.string,
  /** tabBar inactive text color */
  tabBarInactiveTextColor: PropTypes.string,
  /** tabBar text style */
  tabBarTextStyle: PropTypes.object,
  /** can't render content | default: false */
  noRenderContent: PropTypes.bool,
  /** use left instead of transform | default: false */
  useLeftInsteadTransform: PropTypes.bool,
};

export default withStyles(styles, { name: 'Tabs' })(Tabs);