import * as React from 'react';

export interface DrawerProps {
  visible?: boolean;
  variant?: 'permanent' | 'persistent' | 'temporary';
  modalProps?: any;
  onCancel?: () => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  style?: object;
}

export default function Drawer(props: DrawerProps): JSX.Element;
