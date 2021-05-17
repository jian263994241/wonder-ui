import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { RestProps } from '../styles/types';

export interface ListItemMediaProps {
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  disabled?: boolean;
  ref?: React.Ref<any>;
  style?: React.CSSProperties;
}

type StyleProps = {
  styleProps: Partial<ListItemMediaProps>;
};

const ListItemMediaRoot = styled('div', {
  name: 'WuiListItemMedia',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
  userSelect: 'none',
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'nowrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '10px 0',
  marginRight: theme.spacing(2),
  ...(styleProps.disabled && {
    opacity: theme.palette.action.disabledOpacity
  })
}));

const ListItemMedia: React.FC<
  ListItemMediaProps & RestProps
> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiListItemMedia' });
  const { children, component, className, disabled = false, ...rest } = props;

  const styleProps = { disabled };
  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiListItemMedia'
  });

  return (
    <ListItemMediaRoot
      as={component}
      className={classes.root}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      {children}
    </ListItemMediaRoot>
  );
});

export default ListItemMedia;
