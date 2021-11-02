import * as React from 'react';
import ReactDOM from 'react-dom';
import { setRef } from '@wonder-ui/utils';
import { useForkRef, useSafeState } from '@wonder-ui/hooks';

export type Container = HTMLElement | null | (() => HTMLElement | null);

export function getContainer(container?: Container) {
  return typeof container === 'function' ? container() : container;
}

export interface PortalProps {
  children: React.ReactElement;
  container?: Container;
  disablePortal?: boolean;
  ref?: React.Ref<HTMLElement | null>;
}

const Portal: React.FC<PortalProps> = React.forwardRef((props, ref) => {
  const { children, container, disablePortal = false } = props;
  const [mountNode, setMountNode] = useSafeState<HTMLElement | null>(null);
  const handleRef = useForkRef(
    //@ts-expect-error
    React.isValidElement(children) ? children.ref : null,
    ref
  );

  React.useEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

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
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});

export default Portal;
