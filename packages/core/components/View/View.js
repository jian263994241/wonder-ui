import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import { AnimationRoutes } from '@wonder-ui/router';

/**
 * 用来包裹所有Page
 * @visibleName View 视图
 */
const View =  (props) => {
  const {
    fallback,
    animationDisabled,
    animation, 
  } = props;
  const app = React.useContext(AppContext);

  return (
    <AnimationRoutes
      dataSource={app.routes}
      fallback={fallback}
      animationDisabled={animationDisabled}
      animation={animation}
    />
  )
}



View.propTypes = {
 /**
  * 异步加载时的等待状态
  */
  fallback: PropTypes.element,
  /**
   * 禁用切换动画
   */
  animationDisabled: PropTypes.bool,
  /**
   * 切换动画
   */
  animation : PropTypes.oneOf(['slide', 'fade', 'scale'])
}

export default View;