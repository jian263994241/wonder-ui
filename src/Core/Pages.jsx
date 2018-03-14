import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from './transition/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
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

    const onEntered = (node)=>{
      removeClass(node.parentNode, `router-transition-${animationType}`);
    }

    const onEnter= (node)=>{
      addClass(node.parentNode, `router-transition-${animationType}`);
    }

    return (
      <Switch
        timeout={410}
        classNames="slide"
        onEnter={onEnter}
        onEntered={onEntered}
        children={this.renderRoutes()}
      />
    );
  }
}

export default withRouter(Pages);
