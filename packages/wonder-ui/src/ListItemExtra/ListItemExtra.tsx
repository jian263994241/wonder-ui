import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps } from '../styles/types';

export interface ListItemExtraProps extends BaseProps {}

const ListItemExtraRoot = styled('div', {
  name: 'WuiListItemExtra',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  flexShrink: 0,
  display: 'flex',
  verticalAlign: 'middle',
  userSelect: 'none',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1)
}));

const ListItemExtra: React.FC<ListItemExtraProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'WuiListItemExtra'
    });
    const { children, component, ...rest } = props;
    return (
      <ListItemExtraRoot as={component} ref={ref} {...rest}>
        {children}
      </ListItemExtraRoot>
    );
  }
);

export default ListItemExtra;
