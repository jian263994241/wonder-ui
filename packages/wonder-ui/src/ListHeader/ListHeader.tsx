import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface ListHeaderProps extends BaseProps {
  /**
   * @description Disable sticky
   * @default false
   */
  disableSticky?: boolean;
}

const ListHeaderRoot = styled('li', {
  name: 'WuiListHeader',
  slot: 'Root'
})<PickStyleProps<ListHeaderProps, 'disableSticky'>>(
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

const ListHeader: React.FC<ListHeaderProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListHeader' });
    const {
      children,
      component,
      className,
      disableSticky = false,
      ...rest
    } = props;

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
