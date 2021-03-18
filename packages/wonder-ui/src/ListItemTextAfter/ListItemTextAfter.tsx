import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import type { StyledComponentProps } from '../styles/types';

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

export interface ListItemTextAfterProps
  extends StyledComponentProps<typeof ListItemTextAfterRoot> {}

const ListItemTextAfter = createFCWithTheme<ListItemTextAfterProps>(
  'WuiListItemTextAfter',
  (props, ref) => {
    const { children, component, ...rest } = props;
    return (
      <ListItemTextAfterRoot as={component} ref={ref} {...rest}>
        {children}
      </ListItemTextAfterRoot>
    );
  }
);

export default ListItemTextAfter;
