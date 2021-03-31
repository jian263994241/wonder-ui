import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { InProps } from '../styles/types';

export interface ListItemMediaProps {
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

const ListItemMediaRoot = styled('div', {
  name: 'WuiListItemMedia',
  slot: 'Root'
})(() => ({
  userSelect: 'none',
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'nowrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '10px 0'
}));

export default function ListItemMedia<P extends InProps<ListItemMediaProps>>(
  inProps: P
) {
  const props = useThemeProps({ props: inProps, name: 'WuiListItemMedia' });
  const { children, component, className, rootRef, ...rest } = props;

  const classes = useClasses({ ...props, name: 'WuiListItemMedia' });

  return (
    <ListItemMediaRoot
      className={classes.root}
      as={component}
      ref={rootRef}
      {...rest}
    >
      {children}
    </ListItemMediaRoot>
  );
}
