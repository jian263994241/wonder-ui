import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, MemoryRouter, Router as ReactRouter, withRouter } from 'react-router-dom';
import RouterStore from '../RouterStore';

const Store = withRouter((props)=>{
  const { 
    children,
    routerStore = {},
    location,
    history,
  } = props;

  const store = React.useMemo(()=> {
    if(routerStore){
      routerStore.__initial(history);
    }
    return routerStore;
  }, [routerStore]);

  const updateLocation = React.useCallback(()=>{
    if(store){
      store.update(location);
    }
  }, [
    location.pathname,
    location.state,
    location.hash, 
    location.search
  ])

  updateLocation();

  return children;
});

Store.propTypes = {
  routerStore: PropTypes.instanceOf(RouterStore)
};

/**
 * Wrap ReactRouter
 */
const Router = (props)=>{
  const { 
    children,
    type,
    routerStore,
    ...rest
  } = props;

  const RouterComp = React.useMemo(()=>{
    if(type === 'hash') return HashRouter;
    if(type === 'browser') return BrowserRouter;
    if(type === 'memory') return MemoryRouter;
    return ReactRouter;
  }, [type]);

  return (
    <RouterComp {...rest}>
      <Store routerStore={routerStore}>
        {children}
      </Store>
    </RouterComp>
  )
}


Router.defaultProps = {
  type: 'memory'
}

Router.propTypes = {
  /**
   * 路由类型
   */
  type: PropTypes.oneOf(['browser', 'memory', 'hash']),
}


export default Router;

