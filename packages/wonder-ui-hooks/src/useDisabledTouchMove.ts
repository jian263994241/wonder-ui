import * as React from 'react';

export function useDisabledTouchMove<T extends HTMLElement>() {
  const nodeRef = React.useRef<T>();

  const disableTouchMove = React.useCallback((e) => {
    e.preventDefault();
  }, []);

  React.useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current.addEventListener('touchmove', disableTouchMove, {
        passive: false
      });
    }

    return () => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener('touchmove', disableTouchMove);
      }
    };
  }, [nodeRef]);

  return nodeRef;
}

export default useDisabledTouchMove;
