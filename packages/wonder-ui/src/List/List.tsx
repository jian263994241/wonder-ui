import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, listCssVars, useListCssVars } from './ListClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { ListContext } from './ListContext';
import type { ListProps, ListStyleProps } from './ListTypes';

const useClasses = (styleProps: ListStyleProps) => {
  const { classes, card } = styleProps;

  const slots = {
    root: ['root', card && 'card']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ListRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: ListStyleProps }>(({ theme, styleProps }) => ({
  position: 'relative',

  ...(styleProps.card && {
    padding: `0 ${listCssVars.value('cardMarginHorizontal')}`
  })
}));

const List = React.forwardRef<HTMLDivElement, ListProps>((inProps, ref) => {
  const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
  const { children, className, component, card = false, ...rest } = props;

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  const contextValue = { ...props };

  useListCssVars();

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
