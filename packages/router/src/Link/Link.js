import React from 'react';
import PropTypes from 'prop-types';
import useRouterContext from '../useRouterContext';

const Link = React.forwardRef(function Link(props, ref) {
  const { 
    to,
    replace,
    back,
    component: Comp = 'a',
    onClick,
    ...rest
  } = props;

  const {routerStore, location } = useRouterContext();

  const handleClick = React.useCallback((e)=>{
    if(onClick){
      onClick(e);
    }
    if(back){
      routerStore.goBack();
      return ;
    } 
    const target = typeof to === 'function' ? to(location) : to;

    if(!target) return null;
    
    const state = target.state || {};
    if(replace){
      routerStore.replace(target, state);
    }else{
      routerStore.push(target, state);
    }
    
  }, [onClick, to, back, replace]);

  return (
    <Comp onClick={handleClick} ref={ref} {...rest}/>
  )
});

Link.propTypes = {
  replace: PropTypes.bool,
  component: PropTypes.element,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
      query: PropTypes.object
    })
  ])
};

export default Link;