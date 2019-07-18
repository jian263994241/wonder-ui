import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

export default React.memo(function RouteTransition(props){

  const { className, classNames, children, timeout, wrapperComponent = 'div', ...rest } = props;

  console.log(children);
  

  return (
    <TransitionGroup
      className={className}
      component={wrapperComponent}
    >
      <CSSTransition
        timeout={timeout}
        key={children.key}
        classNames={classNames}
        {...rest}
      >
      {children}
      </CSSTransition>
    </TransitionGroup>
  )
});