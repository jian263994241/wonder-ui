import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { PickStyleProps, InProps } from '../styles/types';

export interface ContainerProps {
  /**
   * @description Children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description 边距
   * @default 2
   */
  gutter?: number;
  /**
   * @description 断点宽度
   * @default fluid
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
}

const ContainerRoot = styled('div', {
  name: 'WuiContainer',
  slot: 'Root'
})<PickStyleProps<ContainerProps, 'size' | 'gutter'>>(
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

export default function Container<P extends InProps<ContainerProps>>(
  inProps: P
) {
  const props = useThemeProps({ props: inProps, name: 'WuiContainer' });
  const {
    children,
    className,
    component,
    gutter = 2,
    rootRef,
    size = 'fluid',
    ...rest
  } = props;

  const styleProps = { gutter, size };

  const classes = useClasses({ ...props, styleProps, name: 'WuiContainer' });

  return (
    <ContainerRoot
      as={component}
      className={classes.root}
      ref={rootRef}
      styleProps={styleProps}
      {...rest}
    >
      {children}
    </ContainerRoot>
  );
}
