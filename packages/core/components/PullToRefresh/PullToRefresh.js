import React from 'react';
import PropTypes from 'prop-types';
import RmcPullToRefresh from 'rmc-pull-to-refresh';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 配合ListView 实现长列表下拉刷新
 * @visibleName PullToRefresh 下拉刷新
 */
const PullToRefresh = React.forwardRef((props, ref)=>{
  const { 
    classes,
    prefixCls,
    onRefresh = ()=>{},
    ...rest
  } = props;
  
  return (
    <RmcPullToRefresh 
      ref={ref}
      prefixCls={classes.root}
      onRefresh={onRefresh}
      {...rest}
    />
  )
})

PullToRefresh.displayName = 'PullToRefresh';

PullToRefresh.defaultProps = {
  damping: 100,
  direction: 'down',
  distanceToRefresh: 50,
  prefixCls: 'pull-to-refresh',
  refreshing: false,
  indicator: {
    activate: '释放即可刷新',
    deactivate: '下拉即可刷新',
    finish: '加载完成',
    release: '正在刷新数据中...'
  }
}

PullToRefresh.propTypes = {
  /**
   * pull direction, can be up or down
   */
  direction: PropTypes.oneOf(['up', 'down']),
  /**
   * distance to pull to refresh
   */
  distanceToRefresh: PropTypes.number,
  /**
   * Whether the view should be indicating an active refresh
   */
  refreshing: PropTypes.bool,
  /**
   * Called when the view starts refreshing.
   */
  onRefresh: PropTypes.func,
  /**
   * indicator config
   */
  indicator: PropTypes.shape({
    activate: PropTypes.any,
    deactivate: PropTypes.any,
    release: PropTypes.any,
    finish: PropTypes.any
  }),
  /**
   * additional css class of root dom node
   */
  className: PropTypes.string,
  /**
   * prefix class
   */
  prefixCls: PropTypes.string,
  /**
   * pull damping, suggest less than 200
   */
  damping: PropTypes.number
}

export default withStyles(styles)(PullToRefresh);