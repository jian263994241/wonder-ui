import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Transition from './Transition';
import { PageWrapper } from './styles';

/**
 * 
 * @visibleName NestedRoute 
 */
const NestedRoute = (props)=>{
  const {
    component,
    classNames = 'scale',
    className,
    timeout = 300,
    async,
    fallback = null,
    redirect,
    ...rest
  } = props;

  const Component = React.useMemo(()=>{
    if(typeof async === 'function') return React.lazy(async);
    if(typeof redirect === 'string') return () => <Redirect to={redirect}/>;
    if(component) return component.default || component;
  }, [async, component]);


  return (
    <Route {...rest}>
      {(routeProps)=>{
        const { match, location, history } = routeProps;
        const visible = match && match.isExact;

        return (
          <Transition
            in={visible}
            classNames={classNames}
            timeout={timeout}
            unmountOnExit={!match}
          >
            <PageWrapper className={className}>
              {
                async != undefined ? (
                  <React.Suspense fallback={fallback}>
                    <Component {...routeProps}/>
                  </React.Suspense>
                ): (
                  <Component {...routeProps}/>
                )
              }
            </PageWrapper>
          </Transition>
        )
      }}
    </Route>
  );
};


NestedRoute.propTypes = {
  ...Route.propTypes
}


export default NestedRoute;