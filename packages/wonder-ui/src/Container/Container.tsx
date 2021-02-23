import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';
import { foreach } from '@wonder-ui/utils';

const containerMaxWidths = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320
};

type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

export interface ContainerStyleProps {
  gutter: number;
  size: Size;
}

const ContainerRoot = styled('div', {
  name: 'WuiContainer',
  slot: 'root'
})<StyleProps<ContainerStyleProps>>(
  ({ theme, styleProps }) => ({
    width: '100%',
    boxSizing: 'border-box',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: theme.spacing(styleProps.gutter),
    paddingLeft: theme.spacing(styleProps.gutter)
  }),
  ({ styleProps }) => {
    const bq = {} as Record<Size, string>;

    foreach(containerMaxWidths, (value, key) => {
      bq[key as Size] = `@media (min-width: ${value}px)`;
    });

    return {
      ...(styleProps.size &&
        styleProps.size != 'fluid' &&
        {
          sm: {
            [bq.sm]: {
              maxWidth: 540
            }
          },
          md: {
            [bq.md]: {
              maxWidth: 720
            }
          },
          lg: {
            [bq.lg]: {
              maxWidth: 960
            }
          },
          xl: {
            [bq.xl]: {
              maxWidth: 1140
            }
          },
          xxl: {
            [bq.xxl]: {
              maxWidth: 1320
            }
          }
        }[styleProps.size])
    };
  }
);

export interface ContainerProps
  extends StyledComponentProps<typeof ContainerRoot> {}

const Container: React.FC<ContainerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiContainer' });
  const { gutter = 2, className, children, size = 'fluid', ...rest } = props;

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
