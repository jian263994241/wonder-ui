import React from 'react';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import { Route, matchPath } from 'react-router-dom';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { pageTransitionDuration } from '../styles/keyframes';
import { getComponents} from './utils';

const AnimatedSwitchPages = WUI_pages.withComponent(AnimatedSwitch);

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

  const timeout = cls === '' ? 0 : {enter: pageTransitionDuration, exit: pageTransitionDuration - 30};

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

  const switchMain = (pathname)=>{
    let matched;

    for(let i = 0; i< mainRoutes.length; i++){
      
      matched = matchPath(pathname, {
        path: mainRoutes[i].path,
        exact: true
      });

      if(matched){
        setTimeout(() => {
          setMainView('main')
        }, pageTransitionDuration);
        return ;
      }
    }
    
    setMainView('nested');
  }

  React.useEffect(()=>{
    switchMain(pathname);
  }, [pathname]);

  return (
    <>
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
         
                return (
                  <WUI_pages className={isCurrent ? 'main': ''}>
                    <Component 
                      query={urlQuery}
                      fallback={fallback}
                      {...props}
                    />
                  </WUI_pages>
                )
              }}
            />
          ): null
        })
      }
     
      <AnimatedSwitchPages 
        timeout={timeout} 
        classNames="slide" 
        className={Utils.classnames(cls, mainView == 'nested' ? 'main': '')} 
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
                    // const isCurrent = match.url === location.pathname;
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
      </AnimatedSwitchPages>
    </>
  );
});


export default PageSwitch;