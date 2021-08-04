import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  containerClasses,
  ContainerStyleProps,
  useClasses
} from './ContainerClasses';
import { css } from '@wonder-ui/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Css api
   */
  classes?: Partial<typeof containerClasses>;
  /**
   * 节点
   */
  component?: React.ElementType;
  /**
   * 边距
   * @default 2
   */
  gutter?: number;
  /**
   * 断点宽度
   * @default fluid
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
}

const ContainerRoot = styled('div', {
  name: 'WuiContainer',
  slot: 'Root'
})<{ styleProps: ContainerStyleProps }>(({ theme, styleProps }) => ({
  width: '100%',
  boxSizing: 'border-box',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: theme.spacing(styleProps.gutter),
  paddingLeft: theme.spacing(styleProps.gutter),
  [`&.${containerClasses.sizeSm}`]: {
    [`${theme.breakpoints.up('sm')}`]: {
      maxWidth: theme.breakpoints.values['sm'] - 30
    }
  },
  [`&.${containerClasses.sizeMd}`]: {
    [`${theme.breakpoints.up('md')}`]: {
      maxWidth: theme.breakpoints.values['md'] - 30
    }
  },
  [`&.${containerClasses.sizeLg}`]: {
    [`${theme.breakpoints.up('lg')}`]: {
      maxWidth: theme.breakpoints.values['lg'] - 30
    }
  },
  [`&.${containerClasses.sizeXl}`]: {
    [`${theme.breakpoints.up('xl')}`]: {
      maxWidth: theme.breakpoints.values['xl'] - 30
    }
  }
}));

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiContainer' });
    const {
      children,
      className,
      component,
      gutter = 2,
      size = 'fluid',
      ...rest
    } = props;

    const styleProps = { ...props, gutter, size };

    const classes = useClasses(styleProps);

    return (
      <ContainerRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </ContainerRoot>
    );
  }
);

export default Container;
