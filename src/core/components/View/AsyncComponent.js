import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import useRouterStore from '../useRouterStore';

/**
 * 解析异步&同步components
 */
const AsyncComponent = React.memo((props)=>{
  const {
    component, 
    async, 
    redirect,
    fallback = null,
    wrap = true,
    className,
    style,
    ...routeProps
  } = props;

  const Component = React.useMemo(()=>{
    if(async){
      return React.lazy(async);
    }
  
    if(typeof redirect === 'string'){
      return () => <Redirect to={redirect}/>
    }

    if(component.default){
      return component.default;
    }
  
    return component;
  }, []);

  const routing = useRouterStore();
  const query = routing.location.query;

  const content = (
    <React.Suspense fallback={fallback}>
      <Component query={query} {...routeProps}/>
    </React.Suspense>
  );
  
  if(wrap){
    return (
      <div className={className} style={style}> {content} </div>
    );
  }

  return content;
});

AsyncComponent.propTypes = {
  /**
   * route component
   */
  component: Route.propTypes.component,
  /**
   * React.lazy
   */
  async: PropTypes.func,
  /**
   * Redirect
   */
  redirect: PropTypes.string,
  /**
   * React.lazy props 
   */
  fallback: PropTypes.element,
  /**
   * @ignore
   */
  wrap: PropTypes.bool,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object
}


export default AsyncComponent;