import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import SwipeItem from '../SwipeItem';

export interface TabProps {
  className?: string;
  disabled?: boolean;
  title: string;
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Tab = React.forwardRef<HTMLElement, TabProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiTab' });
  const { children, className, disabled = false, ...rest } = props;

  return <SwipeItem>{children}</SwipeItem>;
});

export default Tab;
