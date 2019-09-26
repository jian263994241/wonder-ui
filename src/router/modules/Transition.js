import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Transition = React.forwardRef((props, ref)=>{
  const { 
    in: inProp,
    action,
    ...rest 
  } = props;

  const [inState, setInState] = React.useState(false);
  const [prefix, setPrefix] = React.useState('');
  
  React.useEffect(()=>{
    setTimeout(() => {
      setInState(inProp);
    }, 0);    
  }, [inProp]);

 React.useEffect(()=>{
  if(action === 'PUSH'){
    setPrefix('forward');
  }else{
    setPrefix('backward');
  }
 }, [action]);

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