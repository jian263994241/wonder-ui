import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import loadable from "@loadable/component";
import timeout from './timeout';
import usePageInit from '../usePageInit';
import useRouterContext from '../useRouterContext';

const RouteContent = React.memo(function RouteContent(props) {
  const {
    async,
    fallback = null,
    redirect,
    component,
    current,
    name,
    ...routeProps
  } = props;
  const { routerStore, onRouteChange } = useRouterContext();
  const Component = React.useMemo(()=>{
    if(typeof async === 'function') {
      return loadable(()=> timeout(async, 0), { fallback });
    }else if(typeof redirect === 'string') {
      return function RedirectTo() {
        return <Redirect to={redirect}/>;
      }
    }else if(component) {
      return component.default || component;
    };
  }, [ async, component, redirect ]);

  usePageInit(()=>{
    const _name = typeof name === 'function' 
      ? name(routeProps.match, routerStore.location) : name;
    onRouteChange(routeProps.match, routerStore.location, _name);
  })

  return (
    <Component {...routeProps} routerStore={routerStore} />
  )
}, function shouldUpdate(prevProps, nextProps) {
  if(prevProps.current && prevProps.current != nextProps.current){
    return true;
  }
});

RouteContent.propTypes = {
  current: PropTypes.bool,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  async: PropTypes.func
};

export default RouteContent;