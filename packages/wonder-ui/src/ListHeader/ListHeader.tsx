import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps, StyleProps } from '../styles/types';

interface ListHeaderStyleProps {
  disableSticky?: boolean;
}

const ListHeaderRoot = styled('li', {
  name: 'WuiListHeader',
  slot: 'Root'
})<StyleProps<ListHeaderStyleProps>>(
  ({ theme, styleProps }) => ({
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
    width: '100%',
    boxSizing: 'border-box',
    color: theme.palette.text.hint,
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'start',
    position: styleProps.disableSticky ? 'relative' : 'sticky',
    top: 0,
    zIndex: 1,
    marginTop: -1
  }),
  ({ styleProps }) => ({
    //fix ios
    position: styleProps.disableSticky ? 'relative' : '-webkit-sticky'
  })
);

export interface ListHeaderProps
  extends StyledComponentProps<typeof ListHeaderRoot> {
  disableSticky?: boolean;
}

const ListHeader = createFCWithTheme<ListHeaderProps>(
  'WuiListHeader',
  (props, ref) => {
    const { children, component, className, disableSticky, ...rest } = props;

    const styleProps = { disableSticky };

    const classes = useClasses({ ...props, styleProps, name: 'WuiListHeader' });

    return (
      <ListHeaderRoot
        className={classes.root}
        as={component}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        {children}
      </ListHeaderRoot>
    );
  }
);

export default ListHeader;
