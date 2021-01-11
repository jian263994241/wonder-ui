import * as React from 'react';
import { ModalProps } from '../Modal';

export interface DrawerProps {
  visible?: boolean;
  variant?: 'permanent' | 'persistent' | 'temporary';
  onCancel?: () => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement;
  safeAreaBottom?: boolean;
  modalProps?: Partial<ModalProps>;
}

export default function Drawer(props: DrawerProps): JSX.Element;
