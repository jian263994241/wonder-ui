import React from 'react';
import { WUI_pages } from './styles';
import { Route } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import CSSTransition from 'react-transition-group/CSSTransition';
import { classnames } from '../../utils/helpers';
import { duration } from '../styles/transitions';
import useRouterStore from '../useRouterStore';

const Pages = (props)=>{
  const {
    routes = [],
    classNames,
    fallback,
    noAnimation,
    action,
  } = props;

  const [isCurrent, setCurrent] = React.useState(false);
  const [animationType, setAnimationType] = React.useState(null);

  const routing = useRouterStore();

  const isUnFirstPage = routing.prevLocation.pathname != undefined;

  const cls = isUnFirstPage ? classnames(
    animationType === 'backward' ? 'router-transition-backward': '',
    animationType === 'forward' ? 'router-transition-forward': '',
  ): ''
  
  const timeout = duration.complex;

  React.useEffect(() => {
    if(noAnimation){
      setAnimationType(null);
    }
    if(action === 'POP'){
      setAnimationType('backward');
    }
    if(action === 'PUSH'|| action === 'REPLACE'){
      setAnimationType('forward');
    }
  }, [action, noAnimation]);

  const renderRoutes = React.useMemo(()=>{
    return routes.map((routeConfig, index)=>{
      const {
        component, 
        async, 
        redirect,
        ...rest
      } = routeConfig;

      return (
        <Route
          {...rest}
          strict
          key={index}
          component={
            (routeProps)=>{
              const { location, match } = routeProps;

              React.useEffect(()=>{
                
                if(match.url === location.pathname){
                  setCurrent(true);
                }
               
                return ()=>{
                  if(match.isExact){
                    setCurrent(false);
                  }   
                }
              }, [location]);

              return (
                <AsyncComponent 
                  className="router-transition-stage"
                  component={component}
                  async={async}
                  redirect={redirect}
                  fallback={fallback}
                  {...routeProps}
                />
              )
            }
          }
        />
      )
    })
  }, []);


  return (
    <CSSTransition 
      timeout={timeout} 
      classNames={isUnFirstPage ? classNames: ''} 
      in={isCurrent}
    >
    <WUI_pages 
      timeout={timeout} 
      classNames="slide" 
      className={
        classnames(cls, isCurrent ? 'current': classNames )
      }
    >
    {renderRoutes}
    </WUI_pages>
    </CSSTransition>   
  )
}


export default Pages;