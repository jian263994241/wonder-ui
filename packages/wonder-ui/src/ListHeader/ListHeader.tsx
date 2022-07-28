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
import { listCssVars } from '../List/ListClasses';

export interface ListHeaderProps {
  className?: string;
  classes?: Partial<typeof listHeaderClasses>;
  children?: React.ReactNode;
  component?: React.ElementType;
  style?: React.CSSProperties;
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
    paddingLeft: listCssVars.value('paddingHorizontal'),
    paddingRight: listCssVars.value('paddingHorizontal'),
    backgroundColor: listCssVars.value('titleBgColor')
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
        component={component}
        ref={ref}
        variant="subtitle2"
        color="textSecondary"
        {...rest}
      >
        {children}
      </ListHeaderRoot>
    );
  }
);

export default ListHeader;
