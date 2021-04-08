import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps } from '../styles/types';

export interface ListItemTextAfterProps extends BaseProps {}

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

const ListItemTextAfter: React.FC<ListItemTextAfterProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'WuiListItemTextAfter'
    });
    const { children, component, ...rest } = props;
    return (
      <ListItemTextAfterRoot as={component} ref={ref} {...rest}>
        {children}
      </ListItemTextAfterRoot>
    );
  }
);

export default ListItemTextAfter;
