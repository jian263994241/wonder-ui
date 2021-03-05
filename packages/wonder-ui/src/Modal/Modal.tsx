import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import Portal, { getContainer } from '../Portal';
import ModalManager, { ariaHidden } from './ModalManager';
import { ownerDocument } from '@wonder-ui/utils';

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

const ModalRoot = styled('div', {
  name: 'WuiModal',
  slot: 'Root'
})(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}));

export interface ModalProps {
  disablePortal?: boolean;
  manager?: InstanceType<typeof ModalManager>;
}

const Modal = createFCWithTheme<ModalProps>('WuiModal', (props, ref) => {
  const { disablePortal = false, manager = defaultManager } = props;

  return (
    <Portal disablePortal={disablePortal}>
      <ModalRoot ref={ref}></ModalRoot>
    </Portal>
  );
});

export default Modal;
