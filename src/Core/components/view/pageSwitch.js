import React from 'react';
import { Route } from 'react-router-dom';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { getComponents } from './utils';
import CSSTransition from 'react-transition-group/CSSTransition';
import { duration } from '../styles/transitions';

const PageSwitch = React.memo(({ location, action, noAnimation, routes = [], fallback }) => {
  const { state =  {}, pathname } = location;
  const [animationType, setAnimationType] = React.useState(null);
  const [mainView, setMainView] = React.useState('main');
  const nested = state.nested;

  React.useEffect(() => {
    if(noAnimation || nested === 0){
      setAnimationType(null);
    }
    if(action === 'POP' || nested === -1){
      setAnimationType('backward');
    }
    if(action === 'PUSH'|| action === 'REPLACE' || nested === 1){
      setAnimationType('forward');
    }
  }, [action, noAnimation])

  const cls = Utils.classnames(
    animationType === 'backward' ? 'router-transition-backward': '',
    animationType === 'forward' ? 'router-transition-forward': '',
  )

  const timeout = cls === '' ? 0 : duration.standard;

  const setRouteAniState = (element, state)=> {
    element && element.setAttribute('ani-state', state);
  }

  const [mainRoutes, subRoutes] = React.useMemo(() => {
    const main = [];
    let sub = [];
    routes.forEach((route, i)=>{
      const { routes, ...mainProps } = route;
      main.push(mainProps);
      if(routes){
        sub = sub.concat(routes);
      }
    })
    return [main, sub];
  }, [routes]); 

  // const switchMain = (pathname)=>{
  //   let matched;

  //   for(let i = 0; i< mainRoutes.length; i++){
      
  //     matched = matchPath(pathname, {
  //       path: mainRoutes[i].path,
  //       exact: true
  //     });

  //     if(matched){
  //       setTimeout(() => {
  //         setMainView('main')
  //       }, pageTransitionDuration);
  //       return ;
  //     }
  //   }
    
  //   setMainView('nested');
  // }

  // React.useEffect(()=>{
  //   switchMain(pathname);
  // }, [pathname]);

  return (
    <>
      <CSSTransition
        timeout={timeout}
        classNames="previous"
        in={mainView === 'main'}
      >
        <WUI_pages 
          timeout={timeout} 
          classNames="slide" 
          className={Utils.classnames(cls, mainView == 'main' ? 'current': 'previous')} 
          onEnter={(element)=> setRouteAniState(element, 'enter')}
          onEntering={(element)=> setRouteAniState(element, 'entering')}
          onEntered={(element)=> setRouteAniState(element, 'entered')}
          onExit={(element)=> setRouteAniState(element, 'exit')}
          onExiting={(element)=> setRouteAniState(element, 'exiting')}
          onExited={(element)=> setRouteAniState(element, 'exited')}
        >
        {
          mainRoutes.map(({component, async, redirect, ...rest}, i)=>{
            let Component = getComponents({component, async, redirect});
            return Component ? (
              <Route 
                {...rest}
                key={`route_${i}`}
                render={(props)=> {
                  const { location, match } = props;
                  const urlQuery = Utils.parseUrlQuery(location.search);
                  const isCurrent = match.url === location.pathname;

                  if(mainView != 'main' && isCurrent){
                    setMainView('main');
                  }
        
                  return (
                    <div className="router-transition-stage">
                      <Component 
                        query={urlQuery}
                        fallback={fallback}
                        {...props}
                      />
                    </div>
                  )
                }}
              />
            ): null
          })
        }
        </WUI_pages>
      </CSSTransition>
      <CSSTransition
        timeout={timeout}
        classNames="next"
        in={mainView === 'nested'}
      >
        <WUI_pages 
          timeout={timeout} 
          classNames="slide" 
          className={Utils.classnames(cls, mainView == 'nested' ? 'current': 'next')} 
          onEnter={(element)=> setRouteAniState(element, 'enter')}
          onEntering={(element)=> setRouteAniState(element, 'entering')}
          onEntered={(element)=> setRouteAniState(element, 'entered')}
          onExit={(element)=> setRouteAniState(element, 'exit')}
          onExiting={(element)=> setRouteAniState(element, 'exiting')}
          onExited={(element)=> setRouteAniState(element, 'exited')}
        >
          {
            subRoutes.map(({ component, async, redirect, ...rest }, i)=>{
                let Component = getComponents({component, async, redirect});
                return (
                  <Route 
                    {...rest}
                    key={`route_${i}`}
                    render={(props)=> {
                      const { location, match } = props;
                      const urlQuery = Utils.parseUrlQuery(location.search);
                      const isCurrent = match.url === location.pathname;
                      if(mainView != 'nested' && isCurrent){
                        setMainView('nested');
                      }
                      return (
                        <div className="router-transition-stage">
                          <Component 
                            query={urlQuery}
                            fallback={fallback}
                            {...props}
                          />
                        </div>
                      )
                    }}
                  />
                )
            })
          }
        </WUI_pages>
      </CSSTransition>
      
    </>
  );
});


export default PageSwitch;