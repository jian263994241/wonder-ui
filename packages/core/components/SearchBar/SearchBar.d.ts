import * as React from 'react';

export interface SearchBarProps {
  classes?: object;
  cancelText?: React.ReactNode;
  defaultValue?: any;
  value?: any;
  onChange?: (data: any) => void;
  onFocus?: (data: any) => void;
  onBlur?: (data: any) => void;
  onSearch?: (data: any) => void;
  onCancel?: () => void;
  onClear?: () => void;
  showCancelButton?: boolean;
  showSearchButton?: boolean;
  extra?: React.ReactNode;
  bordered?: boolean;
}

export default function SearchBar(props: SearchBarProps): JSX.Element;
