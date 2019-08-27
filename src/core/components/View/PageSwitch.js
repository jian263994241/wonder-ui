import React from 'react';
import { Route, matchPath } from 'react-router-dom';
import { WUI_pages } from './styles';
import Utils from '../../utils/utils';
import { getComponents } from './utils';
import CSSTransition from 'react-transition-group/CSSTransition';
import { duration } from '../styles/transitions';

const PageWrapper = ({routeProps, routes, ...props})=>{
  const { children, isMain, init, childrenRoutes } = props;
  const { location, match  } = routeProps;
  // const [isRoute, setRouteState] = React.useState(false);

  if(!children) return null;

  const urlQuery = Utils.parseUrlQuery(location.search);

  const isCurrent = match.url === location.pathname ;

  if(isMain(isCurrent)){
    init();
  }

  React.useEffect(()=>{
    if(childrenRoutes){
      childrenRoutes.forEach((item)=>{
        if(item.async) {
          item.async()
        }
      })
    }
  }, [childrenRoutes])

  // React.useEffect(()=>{
  //   const matchedRoute = routes.find(item=>item.path === match.path);
  //   if(matchedRoute){
  //     const matched = matchPath(location.pathname, {
  //       path: matchedRoute.path,
  //       exact: true
  //     })
  //     if(matched){
  //       setRouteState(true);
  //     } 
  //   }
  // }, [location.pathname])

  return (
    <div className="router-transition-stage">
      {children({...routeProps, query: urlQuery})}
    </div>
  )
}

const PageSwitch = React.memo(({ location, action, noAnimation, routes = [], fallback }) => {
  const { state =  {} } = location;
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

  const timeout = cls === '' ? 0 : duration.complex;

  const setRouteAniState = (element, state)=> {
    element && element.setAttribute('ani-state', state);
  }

  const eventsHandler = {
    onEnter: (element)=> setRouteAniState(element, 'enter'),
    onEntering: (element)=> setRouteAniState(element, 'entering'),
    onEntered: (element)=> setRouteAniState(element, 'entered'),
    onExit: (element)=> setRouteAniState(element, 'exit'),
    onExiting: (element)=> setRouteAniState(element, 'exiting'),
    onExited: (element)=> setRouteAniState(element, 'exited'),
  }

  const [mainRoutes, subRoutes] = React.useMemo(() => {
    const main = [];
    let sub = [];
    routes.forEach((route, i)=>{
      main.push(route);
      if(route.routes){
        sub = sub.concat(route.routes);
      }
    })
    return [main, sub];
  }, [routes]); 

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
          {...eventsHandler}
        >
        {
          mainRoutes.map(({component, async, redirect, routes: childrenRoutes, ...rest}, i)=>(
            <Route 
              {...rest}
              strict
              key={`route_main_${i}`}
              render={ props => (
                <PageWrapper 
                  routeProps={props}
                  routes={mainRoutes}
                  childrenRoutes={childrenRoutes}
                  isMain={isCurrent=> mainView != 'main' && isCurrent}
                  init={()=> setMainView('main')}
                >
                  {
                    (props)=>{
                      const Component = React.useMemo(()=>getComponents({component, async, redirect}), []);
                      return (
                        <React.Suspense fallback={fallback}>
                          <Component {...props}/>
                        </React.Suspense>
                      )
                    }
                  }
                </PageWrapper>
              )}
            />
          ))
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
          {...eventsHandler}
        >
          {
            subRoutes.map(({ component, async, redirect, ...rest }, i)=>(
              <Route 
                {...rest}
                key={`route_${i}`}
                render={props=>(
                  <PageWrapper 
                    routes={subRoutes}
                    routeProps={props}
                    isMain={isCurrent=> mainView != 'nested' && isCurrent}
                    init={()=> setMainView('nested')}
                  >
                    {
                      (props)=>{
                        const Component = React.useMemo(()=>getComponents({component, async, redirect}), []);
                        return (
                          <React.Suspense fallback={fallback}>
                            <Component {...props}/>
                          </React.Suspense>
                        )
                      }
                    }
                  </PageWrapper>
                )}
              />
            ))
          }
        </WUI_pages>
      </CSSTransition>
    </>
  );
});


export default PageSwitch;