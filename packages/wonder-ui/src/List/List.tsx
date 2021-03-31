import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { InProps, PickStyleProps } from '../styles/types';

export interface ListProps {
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default ul
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description 内嵌样式
   */
  inset?: boolean;
}

const ListRoot = styled('ul', {
  name: 'WuiList',
  slot: 'Root'
})<PickStyleProps<ListProps, 'inset'>>(({ theme, styleProps }) => ({
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

export default function List<P extends InProps<ListProps>>(inProps: P) {
  const props = useThemeProps({ name: 'WuiList', props: inProps });
  const {
    children,
    className,
    component,
    inset = false,
    rootRef,
    ...rest
  } = props;

  const styleProps = { inset };

  const classes = useClasses({ ...props, styleProps, name: 'WuiList' });

  return (
    <ListRoot
      className={classes.root}
      as={component}
      styleProps={styleProps}
      ref={rootRef}
      {...rest}
    >
      {children}
    </ListRoot>
  );
}
