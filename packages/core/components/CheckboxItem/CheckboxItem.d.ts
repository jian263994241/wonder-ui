import * as React from 'react';
import { ListItemProps } from '../ListItem';

export interface CheckboxItemProps extends ListItemProps {
  visible?: boolean;
  disabled?: boolean;
  onChange?: (val: any) => void;
  checked?: boolean;
  position?: 'left' | 'right';
}

export default function CheckboxItem(props: CheckboxItemProps): JSX.Element;
