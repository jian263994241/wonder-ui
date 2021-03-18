import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps } from '../styles/types';

const ListHeaderRoot = styled('li', {
  name: 'WuiListHeader',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.body1,
  backgroundColor: 'inherit',
  width: '100%',
  boxSizing: 'border-box',
  color: theme.palette.text.hint,
  padding: theme.spacing(1, 2),
  display: 'flex',
  justifyContent: 'start',
  position: 'sticky',
  top: 0,
  zIndex: 1
}));

export interface ListHeaderProps
  extends StyledComponentProps<typeof ListHeaderRoot> {}

const ListHeader = createFCWithTheme<ListHeaderProps>(
  'WuiListHeader',
  (props, ref) => {
    const { children, component, className, ...rest } = props;

    const classes = useClasses({ ...props, name: 'WuiListHeader' });

    return (
      <ListHeaderRoot
        ref={ref}
        className={classes.root}
        as={component}
        {...rest}
      >
        {children}
      </ListHeaderRoot>
    );
  }
);

export default ListHeader;
