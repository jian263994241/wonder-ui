import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from './transition/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import classnames from 'classnames';
import {StylePages} from './Styled';

const Switch = StylePages.withComponent(AnimatedSwitch);

class Pages extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    redirects: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    noAnimation: false,
    routes: null,
    redirects: null
  }

  renderRoutes = ()=>{
    const {
      children,
      routes,
      redirects
    } = this.props;

    let result = Children.toArray(children);

    if(routes){
      result = result.concat(routes.map((conf, i)=>{
        if(conf.path === '/'){
          conf.exact = true;
        }
        return createElement(Route, {key: `route_${i}`, ...conf})
      }));
    }

    if(redirects){
      result = result.concat(redirects.map((conf, i)=>{
        return createElement(Redirect, {key: `redirect_${i}`, ...conf})
      }))
    }

    return result;
  }

  render(){
    const {
      history,
      children,
      noAnimation,
      ...rest
    } = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const animationType = (()=>{
      if(noAnimation || state.nested === 0){
        return null;
      }
      if(action === 'POP' || state.nested === -1){
        return 'backward';
      }
      if(action === 'PUSH'|| action === 'REPLACE' || state.nested === 1){
        return 'forward';
      }
      return null;
    })();

    const cls = classnames({
      'router-transition-backward': animationType === 'backward' && animationType!=null,
      'router-transition-forward': animationType != 'backward'&& animationType!=null
    })

    return (
      <Switch
        ref="s"
        timeout={400}
        classNames="slide"
        children={this.renderRoutes()}
        className={cls}
      />
    );
  }
}

export default withRouter(Pages);
