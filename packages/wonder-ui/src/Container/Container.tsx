import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';

export interface ContainerStyleProps {
  /**
   * @description 边距
   * @default 2
   */
  gutter: number;
  /**
   * @description 断点宽度
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
}

const ContainerRoot = styled('div', {
  name: 'WuiContainer',
  slot: 'Root'
})<StyleProps<ContainerStyleProps>>(
  ({ theme, styleProps }) => ({
    width: '100%',
    boxSizing: 'border-box',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight:
      typeof styleProps.gutter === 'number'
        ? theme.spacing(styleProps.gutter)
        : 'auto',
    paddingLeft:
      typeof styleProps.gutter === 'number'
        ? theme.spacing(styleProps.gutter)
        : 'auto'
  }),
  ({ theme, styleProps }) => {
    const containerMaxWidths = theme.containerMaxWidths as any;
    const styles: any = {};

    Object.keys(containerMaxWidths).forEach((key) => {
      const mediaQueryKey = `@media (min-width: ${containerMaxWidths[key]}px)`;
      if (styleProps.size === key) {
        styles[mediaQueryKey] = {
          maxWidth: containerMaxWidths[key]
        };
      }
    });

    return styles;
  }
);

export interface ContainerProps
  extends StyledComponentProps<typeof ContainerRoot> {}

const Container = createFCWithTheme<ContainerProps>(
  'WuiContainer',
  (props, ref) => {
    const { gutter = 2, className, children, component, size, ...rest } = props;

    const styleProps = { gutter, size };

    const classes = useClasses({ ...props, styleProps, name: 'WuiContainer' });

    return (
      <ContainerRoot
        as={component}
        className={classes.root}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        {children}
      </ContainerRoot>
    );
  }
);

export default Container;
