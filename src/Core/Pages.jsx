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

const slide = { stiffness: 130, damping: 20, precision: 1 };
const crude = {stiffness: 110, damping:17, precision: 100};

const pageAnimation = {
  'slide-left': {
    atEnter: {
      offset: 100
    },
    atLeave: {
      offset: spring(-22, slide)
    },
    atActive: {
      offset: spring(0, slide)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`
      };
    },
  },
  'slide-right': {
    atEnter: {
      offset: -22
    },
    atLeave: {
      offset: spring(102, slide)
    },
    atActive: {
      offset: spring(0, slide)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`
      };
    }
  },
  'empty': {
    atEnter: {
      offset: -22
    },
    atLeave: {
      offset: spring(102, crude)
    },
    atActive: {
      offset: spring(0, crude)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(0%)`
      };
    }
  }
}

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
        return 'empty';
      }
      if(action === 'POP' || state.nested === -1){
        return 'slide-right';
      }
      if(action === 'PUSH'|| action === 'REPLACE' || state.nested === 1){
        return 'slide-left';
      }
      return 'empty';
    })();

    return (
      <Switch
        runOnMount={false}
        reverse={animationType==='slide-right'}
        {...pageAnimation[animationType]}
      >
        {this.renderRoutes()}
      </Switch>
    );
  }
}

export default withRouter(Pages);
