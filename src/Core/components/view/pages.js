import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import { withRouter, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';

class Pages extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    fallback: PropTypes.func
  }

  static defaultProps = {
    noAnimation: false,
    routes: [],
    fallback: ()=> <div>Loading...</div>
  }

  // static contextType = appContext;

  renderRoutes = ()=>{
    const { history, routes, fallback } = this.props;

    return routes.map(({ component: _component, async, redirect, ...rest }, i)=>{
        
        let Component = _component;
      
        if(async){
          Component = loadable(
            () => new Promise((resolve, reject) => {
              const unblock = history.block();
              const $resolve = (...arg)=> { unblock(); resolve(...arg) }
              const $reject = (...arg)=>{ unblock(); reject(...arg) }
              async(history, $resolve, $reject)
            })
          );
        }

        if(typeof redirect === 'string'){
          Component = () => <Redirect to={redirect}/>
        }

        if(typeof redirect === 'function'){
          Component = loadable(
            ()=> new Promise((resolve, reject) => {
              const unblock = history.block();
              const $resolve = (...arg)=> { unblock(); resolve(...arg) }
              const $reject = (...arg)=>{ unblock(); reject(...arg) }
              redirect(history, $resolve, $reject);
            }).then((url, props)=> () => <Redirect to={url} {...props}/> )
          )
        }

        if(Component){
          if(Component.default){
            Component = Component.default;
          }

          return (
            <Route 
              key={`route_${i}`}
              render={(props)=> (
                <div>
                  <Component {...props} fallback={createElement(fallback, {history})}/>
                </div>
              )}
              {...rest} 
            />
          )
        }
        return null;
    });
  }

  render(){
    const {
      history,
      noAnimation
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

    const cls = Utils.classnames(
      (animationType === 'backward' && animationType!=null) ? 'router-transition-backward': '',
      (animationType != 'backward'&& animationType!=null) ? 'router-transition-forward': ''
    )

    const timeout = cls === '' ? 0 : 400;

    return (
      <WUI_pages
        as={AnimatedSwitch}
        timeout={timeout}
        classNames="slide"
        children={this.renderRoutes()}
        className={cls}
      />
    );
  }
}

export default withRouter(Pages);
