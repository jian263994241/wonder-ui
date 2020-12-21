import * as React from 'react';

export interface DropdownMenuProps {
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
    contentWrap?: string;
    content?: string;
    backdrop?: string;
    hidden?: string;
  };
}

export interface DropdownMenuItemProps {
  classes?: {
    root?: string;
    icon?: string;
    buttonActive?: string;
  };
  children?: React.ReactNode | (() => React.ReactNode);
  className?: string;
  onClick?: () => void;
  title?: React.ReactNode;
  visible?: boolean;
}

declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;

declare namespace DropdownMenu {
  export function Item(props: DropdownMenuItemProps): JSX.Element;
}

export default DropdownMenu;
