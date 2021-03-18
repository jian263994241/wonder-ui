import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps } from '../styles/types';

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

export interface ListItemMediaProps
  extends StyledComponentProps<typeof ListItemMediaRoot> {}

const ListItemMedia = createFCWithTheme<ListItemMediaProps>(
  'WuiListItemMedia',
  (props, ref) => {
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
