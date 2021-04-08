import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { PickStyleProps } from '../styles/types';

export interface ToastProps {
  visible?: boolean;
  message?: string;
}

const ToastRoot = styled('div', {
  name: 'WuiToast',
  slot: 'Root'
})(({ theme }) => {
  return {
    outline: 0,
    zIndex: 20000,
    position: 'fixed'
  };
});

const ToastBody = styled('div', {
  name: 'WuiToast',
  slot: 'Body'
})(({ theme }) => ({}));

export default function Toast<P extends ToastProps>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiToast' });
  const { visible = false, message } = props;

  return (
    <ToastRoot>
      <ToastBody>{message}</ToastBody>
    </ToastRoot>
  );
}
