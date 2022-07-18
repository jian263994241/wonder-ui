import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  listHeaderClasses,
  useClasses
} from './ListHeaderClasses';
import { css } from '@wonder-ui/utils';
import { cssVars } from '../List/List';

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof listHeaderClasses>;
  component?: React.ElementType;
  /**
   * 设置position: sticky
   */
  sticky?: boolean;
}

const ListHeaderRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(
  {
    paddingTop: 8,
    paddingBlock: 8,
    paddingLeft: cssVars.value('paddingLeft'),
    paddingRight: cssVars.value('paddingRight'),
    backgroundColor: cssVars.value('titleBackground')
  },

  `
  &.${listHeaderClasses.sticky} {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 10;
  }
`
);

const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const { children, component, className, sticky = false, ...rest } = props;

    const styleProps = { ...props, sticky };

    const classes = useClasses(styleProps);

    return (
      <ListHeaderRoot
        className={css(classes.root, className)}
        as={component}
        ref={ref}
        {...rest}
        variant="subtitle2"
        color="textSecondary"
      >
        {children}
      </ListHeaderRoot>
    );
  }
);

export default ListHeader;
