import React, { createElement } from 'react';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import { Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { pageTransitionDuration } from './keyframes';

const anitmieState = {};

const PageSwitch = React.memo(({ history, location, action, noAnimation, routes = [], fallback }) => {
  const { state =  {} } = location;
  const [animationType, setAnimationType] = React.useState(null);

  const _setAnimationType = ()=>{
    if(noAnimation || state.nested === 0){
      setAnimationType(null);
    }
    if(action === 'POP' || state.nested === -1){
      setAnimationType('backward');
    }
    if(action === 'PUSH'|| action === 'REPLACE' || state.nested === 1){
      setAnimationType('forward');
    }
  }

  React.useLayoutEffect(()=>{
    _setAnimationType()
  })

  const cls = Utils.classnames(
    (animationType === 'backward' && animationType!=null) ? 'router-transition-backward': '',
    (animationType != 'backward'&& animationType!=null) ? 'router-transition-forward': ''
  )

  const timeout = cls === '' ? 0 : pageTransitionDuration;

  

  const setRouteAniState = (element, state)=> {
    element.setAttribute('ani-state', state);
  }

  return (
    <WUI_pages 
      as={AnimatedSwitch} 
      timeout={timeout} 
      classNames="slide" 
      className={cls} 
      onEnter={(element)=> setRouteAniState(element, 'enter')}
      onEntering={(element)=> setRouteAniState(element, 'entering')}
      onEntered={(element)=> setRouteAniState(element, 'entered')}
      onExit={(element)=> setRouteAniState(element, 'exit')}
      onExiting={(element)=> setRouteAniState(element, 'exiting')}
      onExited={(element)=> setRouteAniState(element, 'exited')}
    >
      {
        routes.map(({ component: _component, async, redirect, ...rest }, i)=>{
        
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
                      <div className="router-transition-stage">
                        <Component 
                          exact
                          strict
                          query={urlQuery}
                          fallback={ fallback ? createElement(fallback, {location, match}): null}
                          {...props}
                        />
                      </div>
                    )
                  }}
                />
              )
            }
            return null;
        })
      }
    </WUI_pages>
  );
});


export default PageSwitch;