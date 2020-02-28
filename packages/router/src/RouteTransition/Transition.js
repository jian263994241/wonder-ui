import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import clsx from 'clsx';

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
      className={clsx(prefix, className)}
      classNames={classNames} 
      {...rest}
    >{children}</CSSTransition>
  )
};

Transition.propTypes = {
  ...CSSTransition.propTypes
};
