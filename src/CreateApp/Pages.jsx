import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from './transition/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import {StylePages} from './Styled';

const Switch = StylePages.withComponent(AnimatedSwitch);

const fullfade = { stiffness: 330, damping: 33, precision: 1 };
const halffade = { stiffness: 110, damping: 17, precision: 1 };

const pageAnimation = {
  'slide-left': {
    atEnter: {
      offset: 100
    },
    atLeave: {
      offset: spring(-33, halffade)
    },
    atActive: {
      offset: spring(0, fullfade)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`
      };
    },
  },
  'slide-right': {
    atEnter: {
      offset: -33
    },
    atLeave: {
      offset: spring(102, fullfade)
    },
    atActive: {
      offset: spring(0, halffade)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`
      };
    }
  },
  'empty': {
    atEnter: {},
    atLeave:{},
    atActive:{}
  }
}

class Pages extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool,
    shadow: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    redirects: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    noAnimation: false,
    shadow: true,
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
      shadow,
      ...rest
    } = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const animationType = (()=>{
      if(noAnimation || state.animation === null){
        return 'empty';
      }
      if(action === 'POP' || state.animation === 'back'){
        return 'slide-right';
      }
      if(action === 'PUSH'|| action === 'REPLACE' || state.animation === 'push'){
        return 'slide-left';
      }
      return 'empty';
    })();

    return (
      <Switch
        runOnMount={false}
        reverse={animationType==='slide-right'}
        shadow={shadow}
        {...pageAnimation[animationType]}
      >
        {this.renderRoutes()}
      </Switch>
    );
  }
}

export default withRouter(Pages);
