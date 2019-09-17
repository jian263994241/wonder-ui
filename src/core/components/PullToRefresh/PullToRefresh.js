import React from 'react';
import PropTypes from 'prop-types';
import RmcPullToRefresh from 'rmc-pull-to-refresh';
import Indicator from '../ActivityIndicator';
import styled, { css } from 'styled-components';

const WUI_PullToRefresh = styled.div((props)=>{
  const { prefixCls } = props;

  return css `
    .${prefixCls} {
      &-content {
        &-wrapper {
          
        }
        transform-origin: left top 0;
      }

      &-transition {
        transition: transform 0.3s;
      }

      &-indicator {
        color: grey;
        text-align: center;
        height: 25px;
      }

      &-down .${prefixCls}-indicator {
        margin-top: -25px;
      }

      &-up .${prefixCls}-indicator {
        margin-bottom: -25px;
      }
    }
  `
});

/**
 * 配合ListView 实现长列表下拉刷新
 * @visibleName PullToRefresh 下拉刷新
 */
const PullToRefresh = React.forwardRef((props, ref)=>{

  const { prefixCls } = props;
  
  return (
    <WUI_PullToRefresh prefixCls={prefixCls}>
      <RmcPullToRefresh ref={ref} {...props}/>
    </WUI_PullToRefresh>
  )
})

PullToRefresh.defaultProps = {
  direction: 'down',
  distanceToRefresh: 50,
  refreshing: false,
  damping: 100,
  prefixCls: 'pull-to-refresh',
  indicator: {
    activate: '松开立即刷新',
    deactivate: '下拉可以刷新',
    finish: '完成刷新',
    release: <Indicator size="small"/>
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

export default PullToRefresh;