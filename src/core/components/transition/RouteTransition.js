import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

const RouteTransition = React.memo((props)=>{

  const { className, classNames, children, timeout, wrapperComponent = 'div', ...rest } = props;

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

RouteTransition.propTypes = {
  classNames: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  wrapperComponent: PropTypes.string,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

export default RouteTransition;

