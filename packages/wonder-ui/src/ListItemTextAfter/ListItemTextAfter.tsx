import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { InProps } from '../styles/types';

export interface ListItemTextAfterProps {
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
}

const ListItemTextAfterRoot = styled('div', {
  name: 'WuiListItemTextAfter',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  flexShrink: 0,
  display: 'flex',
  verticalAlign: 'middle',
  userSelect: 'none',
  paddingLeft: 5,
  paddingRight: 5
}));

export default function ListItemTextAfter<
  P extends InProps<ListItemTextAfterProps>
>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiListItemTextAfter' });
  const { children, component, rootRef, ...rest } = props;
  return (
    <ListItemTextAfterRoot as={component} ref={rootRef} {...rest}>
      {children}
    </ListItemTextAfterRoot>
  );
}
