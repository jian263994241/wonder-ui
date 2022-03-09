import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { listHeaderClasses, useClasses } from './ListHeaderClasses';

export interface ListHeaderProps extends React.HTMLAttributes<HTMLLIElement> {
  classes?: Partial<typeof listHeaderClasses>;
  component?: React.ElementType;
  /**
   * 设置position: sticky
   */
  sticky?: boolean;
}

const ListHeaderRoot = styled('li', {
  name: 'WuiListHeader',
  slot: 'Root'
})(
  ({ theme }) => ({
    ...theme.typography.subtitle2,
    backgroundColor: theme.palette.background.default,
    width: '100%',
    boxSizing: 'border-box',
    color: theme.palette.text.secondary,
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'start',
    position: 'relative',
    top: 0,
    zIndex: 1,
    marginTop: -1
  }),

  `
    &.${listHeaderClasses.sticky} {
      position: sticky;
      position: -webkit-sticky;
    }
  `
);

const ListHeader = React.forwardRef<HTMLElement, ListHeaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListHeader' });
    const { children, component, className, sticky = false, ...rest } = props;

    const styleProps = { ...props, sticky };

    const classes = useClasses(styleProps);

    return (
      <ListHeaderRoot
        className={css(classes.root, className)}
        as={component}
        ref={ref as React.Ref<HTMLLIElement>}
        {...rest}
      >
        {children}
      </ListHeaderRoot>
    );
  }
);

export default ListHeader;
