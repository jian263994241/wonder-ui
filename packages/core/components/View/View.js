import React from 'react';
import PropTypes from 'prop-types';
import { View as RouteView } from '@wonder-ui/router';
import AppContext from '../AppContext';
import styles from './styles';
import withStyles from '../styles/withStyles';

/**
 * 用来包裹所有Page
 * @visibleName View 视图
 */
function View (props) {
  const {classes, ...rest} = props;
  const app = React.useContext(AppContext);

  return (
    <RouteView 
      dataSource={app.routes} 
      classes={{root: classes.root}} 
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
   * 404
   */
  noMatch: PropTypes.node
}

export default withStyles(styles)(View);