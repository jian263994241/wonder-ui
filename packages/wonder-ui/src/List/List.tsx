import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { RestProps, PickStyleProps } from '../styles/types';

export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  inset?: boolean;
  ref?: React.Ref<any>;
  style?: React.CSSProperties;
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

const List: React.FC<ListProps & RestProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ name: 'WuiList', props: inProps });
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
  }
);

export default List;
