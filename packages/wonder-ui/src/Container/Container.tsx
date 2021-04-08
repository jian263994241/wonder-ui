import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface ContainerProps extends BaseProps {
  /**
   * @description 边距
   * @default 2
   */
  gutter?: number;
  /**
   * @description 断点宽度
   * @default fluid
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
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
    const styles: any = {};

    theme.breakpoints.keys.forEach((key) => {
      const mediaQueryKey = theme.breakpoints.up(key);

      if (styleProps.size === key) {
        styles[mediaQueryKey] = {
          maxWidth: theme.breakpoints.values[key] - 30
        };
      }
    });

    return styles;
  }
);

const Container: React.FC<ContainerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiContainer' });
  const {
    children,
    className,
    component,
    gutter = 2,
    size = 'fluid',
    ...rest
  } = props;

  const styleProps = { gutter, size };

  const classes = useClasses({ ...props, styleProps, name: 'WuiContainer' });

  return (
    <ContainerRoot
      as={component}
      className={classes.root}
      ref={ref}
      styleProps={styleProps}
      {...rest}
    >
      {children}
    </ContainerRoot>
  );
});

export default Container;
