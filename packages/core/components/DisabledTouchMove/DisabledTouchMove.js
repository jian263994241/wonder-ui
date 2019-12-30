import React from 'react';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import elementAcceptingRef from '@wonder-ui/utils/elementAcceptingRef';

const DisabledTouchMove = React.forwardRef(function DisabledTouchMove (props, ref){
  const { children } = props;
  const rootRef = React.useRef();
  const handleRef = useForkRef(ref, rootRef);

  useDisabledRefTouchMove(rootRef);

  return React.cloneElement(children, {ref: handleRef});
});

DisabledTouchMove.propTypes = {
  children: elementAcceptingRef
};

export default DisabledTouchMove;