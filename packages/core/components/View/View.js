import React from 'react';
import PropTypes from 'prop-types';
import { View as RouteView } from '@wonder-ui/router';
import AppContext from '../AppContext';
import styles from './styles';
import withStyles from '@wonder-ui/styles/withStyles';

/**
 * 一个包装Pages的容器
 * @visibleName View 视图
 */
function View (props) {
  const {classes, ...rest} = props;
  const app = React.useContext(AppContext);

  return (
    <RouteView 
      dataSource={app.routes} 
      routeProps={{classes: {root: classes.routeRoot}}} 
      {...rest}  
    />
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
   * React Element
   */
  noMatch: PropTypes.node
}

export default withStyles(styles)(View);