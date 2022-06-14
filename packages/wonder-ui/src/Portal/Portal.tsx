import * as React from 'react';
import ReactDOM from 'react-dom';
import { setRef, canUseDOM } from '@wonder-ui/utils';
import { useForkRef, useCreation } from '@wonder-ui/hooks';

export type Container = HTMLElement | null | (() => HTMLElement | null);

export function getContainer(container?: Container) {
  return typeof container === 'function' ? container() : container;
}

export interface PortalProps {
  children: React.ReactElement;
  container?: Container;
  disablePortal?: boolean;
}

const Portal = React.forwardRef<HTMLElement, PortalProps>((props, ref) => {
  const { children, container, disablePortal = false } = props;

  const mountNode = useCreation(() => {
    if (canUseDOM && !disablePortal) {
      return getContainer(container) || document.body;
    }
    return null;
  }, [container, disablePortal]);

  const handleRef = useForkRef(
    //@ts-expect-error
    React.isValidElement(children) ? children.ref : null,
    ref
  );

  React.useEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef<HTMLElement | null>(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if (React.isValidElement<any>(children)) {
      return React.cloneElement(children, { ref: handleRef });
    }
    return children;
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : children;
});

export default Portal;
