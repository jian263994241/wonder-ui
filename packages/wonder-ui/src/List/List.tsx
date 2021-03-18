import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps, StyleProps } from '../styles/types';

interface ListStyleProps {
  inset?: boolean;
}

const ListRoot = styled('ul', {
  name: 'WuiList',
  slot: 'Root'
})<StyleProps<ListStyleProps>>(({ theme, styleProps }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',

  ...(styleProps.inset && {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: 8,
    overflow: 'hidden'
  }),
  /** 嵌套 */
  '& .WuiList-root': {
    paddingLeft: theme.spacing(3),
    backgroundColor: theme.palette.background.paper
  }
}));

export interface ListProps extends StyledComponentProps<typeof ListRoot> {
  inset?: boolean;
}

const List = createFCWithTheme<ListProps>('WuiList', (props, ref) => {
  const { children, className, component, inset = false, ...rest } = props;

  const styleProps = { inset };

  const classes = useClasses({ ...props, styleProps, name: 'WuiList' });

  return (
    <ListRoot
      className={classes.root}
      as={component}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      {children}
    </ListRoot>
  );
});

export default List;
