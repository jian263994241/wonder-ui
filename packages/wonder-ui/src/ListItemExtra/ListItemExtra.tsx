import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { listItemExtraClasses, useClasses } from './ListItemExtraClasses';

export interface ListItemExtraProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  classes?: Partial<typeof listItemExtraClasses>;
  component?: React.ElementType;
  ref?: React.Ref<any>;
}

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

const ListItemExtra = React.forwardRef<HTMLElement, ListItemExtraProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItemExtra' });
    const { children, className, component, ...rest } = props;

    const classes = useClasses(props);

    return (
      <ListItemExtraRoot
        className={css(classes.root, className)}
        as={component}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {children}
      </ListItemExtraRoot>
    );
  }
);

export default ListItemExtra;
