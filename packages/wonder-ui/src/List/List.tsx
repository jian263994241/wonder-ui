import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './ListClasses';
import { composeClasses, createCssVars, css } from '@wonder-ui/utils';
import { listItemClasses } from '../ListItem/ListItemClasses';
import type { ListProps, ListStyleProps } from './ListTypes';
import { ListContext } from './ListContext';

export const useClasses = (styleProps: ListStyleProps) => {
  const { classes, mode } = styleProps;

  const slots = {
    root: ['root', mode === 'card' && 'card']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

export const cssVars = createCssVars(COMPONENT_NAME, [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'prefixWidth',
  'prefixPaddingRight',
  'alignItems',
  'extraMaxWidth',
  'extraPaddingLeft',
  'borderRadius',
  'background',
  'titleBackground',
  'divider'
]);

const ListRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: ListStyleProps }>(({ theme, styleProps }) => ({
  ...cssVars.style({
    prefixWidth: 'auto',
    prefixPaddingRight: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    extraMaxWidth: '70%',
    extraPaddingLeft: 12,
    alignItems: 'center',
    divider: `thin solid ${theme.palette.divider}`,
    borderRadius: 8,
    background: theme.palette.background.paper,
    titleBackground: theme.palette.background.default
  }),

  position: 'relative',

  ...(styleProps.mode === 'card' && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  })
}));

const List = React.forwardRef<HTMLDivElement, ListProps>((inProps, ref) => {
  const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
  const { children, className, component, mode, ...rest } = props;

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  const contextValue = { ...props };

  return (
    <ListContext.Provider value={contextValue}>
      <ListRoot
        className={css(classes.root, className)}
        as={component}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </ListRoot>
    </ListContext.Provider>
  );
});

export default List;
