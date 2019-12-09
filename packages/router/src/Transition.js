import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

function mergeClassName() {
  return Array.prototype.slice.apply(arguments).join(' ');
}

export default function Transition(props) {
  const { 
    in: inProp,
    action,
    className,
    classNames,
    children,
    ...rest 
  } = props;
  
  const prefix = action === 'POP' ? 'backward': 'forward';
  
  if(!!!classNames){
    return inProp ? children : null;
  }
  
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={inProp}
      className={mergeClassName(prefix, className)}
      classNames={classNames} 
      {...rest}
    >{children}</CSSTransition>
  )
};

Transition.propTypes = {
  ...CSSTransition.propTypes
};
