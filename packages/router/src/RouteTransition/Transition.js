import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import clsx from 'clsx';
import useForkRef from '@wonder-ui/utils/useForkRef';

const Transition = React.forwardRef(function Transition(props, ref) {
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
  const handleNodeRef = useForkRef(nodeRef, ref);

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
      <div
        ref={handleNodeRef}
        className={clsx(prefix, className)}
        style={style}
      >
        {children}
      </div>
    </CSSTransition>
  );
});

export default Transition;
