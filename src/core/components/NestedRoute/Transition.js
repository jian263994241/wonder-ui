import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Transition = React.forwardRef((props, ref)=>{
  const { in: inProp, ...rest } = props;
  const [inState, setInState] = React.useState(false);

  React.useEffect(()=>{
    setInState(inProp)
  }, [inProp]);
  
  return (
    <CSSTransition in={inState} ref={ref} {...rest}/>
  )
});


export default Transition;