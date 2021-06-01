import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, globalClasses } from '@wonder-ui/utils';
import { listItemMediaClasses, useClasses } from './ListItemMediaClasses';

export interface ListItemMediaProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  classes?: Partial<typeof listItemMediaClasses>;
  component?: React.ElementType;
  ref?: React.Ref<any>;
}

const ListItemMediaRoot = styled('div', {
  name: 'WuiListItemMedia',
  slot: 'Root'
})(({ theme }) => ({
  userSelect: 'none',
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'nowrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '10px 0',
  marginRight: theme.spacing(2),

  [`.${globalClasses.disabled} &`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}));

const ListItemMedia = React.forwardRef<HTMLElement, ListItemMediaProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItemMedia' });
    const { children, component, className, ...rest } = props;

    const classes = useClasses(props);

    return (
      <ListItemMediaRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {children}
      </ListItemMediaRoot>
    );
  }
);

export default ListItemMedia;
