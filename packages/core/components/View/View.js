import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import { View as RouteView } from '@wonder-ui/router';

/**
 * 用来包裹所有Page
 * @visibleName View 视图
 */
export default function View (props) {
  const app = React.useContext(AppContext);
  return (
    <RouteView dataSource={app.routes} {...props} />
  )
}

View.propTypes = {
 /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  /**
   * Disable animation
   */
  animationDisabled: PropTypes.bool,
  /**
   * 404
   */
  noMatch: PropTypes.node
}

