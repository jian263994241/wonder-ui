import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEnhancedEffect, useForkRef } from '@wonder-ui/hooks';
import { setRef } from '@wonder-ui/utils';

export type Container = HTMLElement | null | (() => HTMLElement | null);

export function getContainer(container?: Container) {
  return typeof container === 'function' ? container() : container;
}

export interface PortalProps<
  Children = (React.ReactElement & React.RefAttributes<any>) | null
> {
  /**
   * children
   */
  children: Children;
  container?: Container;
  disablePortal?: boolean;
  ref?: React.Ref<Children>;
}

const Portal: React.FC<PortalProps> = React.forwardRef((props, ref) => {
  const { children, container, disablePortal = false } = props;
  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null);
  const handleRef = useForkRef(
    React.isValidElement(children) ? children.ref : null,
    ref
  );

  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
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

Portal.displayName = 'Portal';

export default Portal;
