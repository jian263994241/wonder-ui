import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Transition = React.forwardRef((props, ref)=>{
  const { 
    in: inProp,
    action,
    ...rest 
  } = props;

  const [inState, setInState] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() => {
      setInState(inProp);
    }, 0);    
  }, [inProp]);

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
      in={inState}
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