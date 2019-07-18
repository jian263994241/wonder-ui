import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import appContext from '../app/appContext';
import { withRouter, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { pageTransitionDuration } from './keyframes';

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

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.locationState != this.state.locationState){
      return true;
    }
    return false;
  }

  lock = (fn)=>{

    let locked = false;
    return (...arg)=>{
      if(!locked){
        locked = true;
        fn(...arg);
        setTimeout(()=>{ locked = null }, 100);
      }
    };
  }

  state = {
    locationState: 'POP',
  }

  componentDidMount() {
    const app = this.context;    
    this._isMounted = true;
    const throttled = this.lock((location)=>{
      if(this._isMounted){
        this.setState({ locationState: location.action })
      }
    })
    app.on('routeChange', throttled);
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  static contextType = appContext;

  renderRoutes = ()=>{
    const { history, routes, fallback } = this.props;

    return routes.map(({ component: _component, async, redirect, ...rest }, i)=>{
        
        let Component = _component;
      
        if(async){
          Component = loadable(
            () => new Promise((resolve, reject) => async(history, resolve, reject))
          );
        }

        if(typeof redirect === 'string'){
          Component = () => <Redirect to={redirect}/>
        }

        if(typeof redirect === 'function'){
          Component = loadable(
            ()=> new Promise(
              (resolve, reject) => redirect(history, resolve, reject)
            )
            .then((url, props)=> () => <Redirect to={url} {...props}/> )
          )
        }

        if(Component){
          if(Component.default){
            Component = Component.default;
          }
          
          return (
            <Route 
              {...rest}
              key={`route_${i}`}
              render={(props)=> {
                const { location, match } = props;
                const urlQuery = Utils.parseUrlQuery(location.search);
                return (
                  <div>
                    <Component 
                      exact
                      strict
                      query={urlQuery}
                      fallback={createElement(fallback, {location, match})}
                      {...props}
                    />
                  </div>
                )
              }}
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

    const { location } = history;

    const { locationState: action } = this.state;

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

    const timeout = cls === '' ? 0 : pageTransitionDuration;
  
    return (
      <WUI_pages 
        as={AnimatedSwitch} 
        timeout={timeout} 
        classNames="slide" 
        className={cls} 
      >
        {this.renderRoutes()}
      </WUI_pages>
    );
  }
}

export default withRouter(Pages);
