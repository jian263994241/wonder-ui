import React from 'react';
import propTypes from 'prop-types';
import useRouterContext from './useRouterContext';

const Link = React.forwardRef(function Link(props, ref) {
  const { 
    to,
    replace,
    component: Comp = 'a',
    onClick,
    ...rest
  } = props;

  const {routerStore, location } = useRouterContext();

  const handleClick = React.useCallback((e)=>{
    if(onClick){
      onClick(e);
    }
    const target = typeof to === 'function' ? to(location) : to;
    const state = target.state || {};
    if(replace){
      routerStore.replace(target, state);
    }else{
      routerStore.push(target, state);
    }
    
  }, [onClick, to]);

  return (
    <Comp onClick={handleClick} {...rest}/>
  )
});

Link.propTypes = {
  replace: propTypes.bool,
  component: propTypes.element,
  to: propTypes.oneOfType([
    propTypes.string,
    propTypes.func,
    propTypes.shape({
      pathname: propTypes.string,
      search: propTypes.string,
      hash: propTypes.string,
      state: propTypes.object,
      query: propTypes.object
    })
  ])
};

export default Link;