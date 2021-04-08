import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps } from '../styles/types';

export interface ListItemMediaProps extends BaseProps {}

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

const ListItemMedia: React.FC<ListItemMediaProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItemMedia' });
    const { children, component, className, ...rest } = props;

    const classes = useClasses({ ...props, name: 'WuiListItemMedia' });

    return (
      <ListItemMediaRoot
        className={classes.root}
        as={component}
        ref={ref}
        {...rest}
      >
        {children}
      </ListItemMediaRoot>
    );
  }
);

export default ListItemMedia;
