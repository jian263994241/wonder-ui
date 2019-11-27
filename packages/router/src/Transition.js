import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Transition = React.forwardRef((props, ref)=>{
  const { 
    in: inProp,
    action,
    ...rest 
  } = props;

  const prefix = React.useMemo(()=>{
    if(action === 'POP'){
      return 'backward';
    }
    return 'forward';
  }, [inProp]);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={inProp}
      className={prefix}
      ref={ref}    
      {...rest}
    />
  )
});

Transition.propTypes = {
  ...CSSTransition.propTypes
};

export default Transition;