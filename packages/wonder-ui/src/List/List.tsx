import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { listClasses, useClasses } from './ListClasses';

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  component?: React.ElementType;
  inset?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export interface ListStyleProps extends ListProps {}

const ListRoot = styled('ul', {
  name: 'WuiList',
  slot: 'Root'
})<{ styleProps: ListStyleProps }>(({ theme, styleProps }) => ({
  ...theme.typography.body1,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  // backgroundColor: theme.palette.background.paper,

  ...(styleProps.inset && {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: 8,
    overflow: 'hidden'
  }),
  /** 嵌套 */
  [`&.${listClasses.root} .${listClasses.root}`]: {
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.paper
  }
}));

const List = React.forwardRef<HTMLElement, ListProps>((inProps, ref) => {
  const props = useThemeProps({ name: 'WuiList', props: inProps });
  const { children, className, component, inset = false, ...rest } = props;

  const styleProps = { ...props, inset };

  const classes = useClasses(styleProps);

  return (
    <ListRoot
      className={css(classes.root, className)}
      {...rest}
      as={component}
      ref={ref as React.Ref<HTMLUListElement>}
      styleProps={styleProps}
    >
      {children}
    </ListRoot>
  );
});

export default List;
