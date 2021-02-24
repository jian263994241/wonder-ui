import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';
import {
  ContainerSizeType,
  containerSizeKeys
} from '../styles/theme/variables';

export type ContainerSize = ContainerSizeType | 'fluid';

export interface ContainerStyleProps {
  /**
   * @description 边距
   * @default 2
   */
  gutter: number;
  /**
   * @description 断点宽度
   */
  size?: ContainerSize;
}

const ContainerRoot = styled('div', {
  name: 'WuiContainer',
  slot: 'root'
})<StyleProps<ContainerStyleProps>>(
  ({ theme, styleProps }) => ({
    width: '100%',
    boxSizing: 'border-box',
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
    const containerMaxWidths = theme.variables.containerMaxWidths;
    const styles: any = {};

    containerSizeKeys.forEach((key) => {
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

const Container: React.FC<ContainerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiContainer' });
  const { gutter = 2, className, children, size, ...rest } = props;

  const styleProps = { gutter, size };

  const classes = useClasses({ styleProps, className, name: 'WuiContainer' });

  return (
    <ContainerRoot className={classes.root} styleProps={styleProps} {...rest}>
      {children}
    </ContainerRoot>
  );
});

Container.displayName = 'WuiContainer';

export default Container;
