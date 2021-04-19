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
    style,
    ...rest
  } = props;
  const nodeRef = React.useRef(null);

  const prefix = action === 'POP' ? 'backward' : 'forward';

  if (!!!classNames) {
    return inProp ? children : null;
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      in={inProp}
      classNames={classNames}
      {...rest}
    >
      <div ref={nodeRef} className={clsx(prefix, className)} style={style}>
        {children}
      </div>
    </CSSTransition>
  );
}
