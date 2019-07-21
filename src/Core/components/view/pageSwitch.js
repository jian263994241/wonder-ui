import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import appContext from '../app/appContext';
import { withRouter, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { pageTransitionDuration } from './keyframes';


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

  return (
    <WUI_pages 
      as={AnimatedSwitch} 
      timeout={timeout} 
      classNames="slide" 
      className={cls} 
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
                      <div>
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