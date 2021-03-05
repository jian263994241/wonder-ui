import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEnhancedEffect } from '@wonder-ui/hooks';

type Container = Element | null | (() => Element | null);

export function getContainer(container?: Container) {
  return typeof container === 'function' ? container() : container;
}

export interface PortalProps {
  children?: React.ReactNode;
  container?: Container;
  disablePortal?: boolean;
}

const Portal: React.FC<PortalProps> = (props) => {
  const { children, container, disablePortal = false } = props;
  const [mountNode, setMountNode] = React.useState<Element | null>(null);

  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

  if (disablePortal) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

Portal.displayName = 'Portal';

export default Portal;
