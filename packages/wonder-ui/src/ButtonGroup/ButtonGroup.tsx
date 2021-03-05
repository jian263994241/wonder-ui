import * as React from 'react';
import useClasses from '../styles/useClasses';
import createFCWithTheme from '../styles/createFCWithTheme';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import { ButtonRoot } from '../Button';

interface ButtonStyleProps {
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroupRoot = styled('div', {
  name: 'ButtonGroup',
  slot: 'Root'
})<StyleProps<ButtonStyleProps>>(
  () => ({
    position: 'relative',
    display: 'inline-flex',

    [`& > ${ButtonRoot}`]: {
      flex: '1 1 auto'
    }
  }),
  ({ styleProps }) => ({
    ...(styleProps.direction === 'vertical'
      ? {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          [`&>&:not(:last-child)>${ButtonRoot}, &>${ButtonRoot}:not(:last-child)`]: {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`&>&:not(:first-of-type)>${ButtonRoot}, &>${ButtonRoot}~${ButtonRoot}`]: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
          [`&>&:not(:first-of-type), &>.WuiButton-variant-outlined:not(:first-of-type)`]: {
            marginTop: -1
          },
          [`&>${ButtonRoot}, &>&`]: {
            width: '100%'
          }
        }
      : {
          [`&>&:not(:last-child)>${ButtonRoot}, &>${ButtonRoot}:not(:last-child)`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          [`&>&:not(:first-of-type)>${ButtonRoot}, &>${ButtonRoot}:nth-of-type(n+3), &>:not(${ButtonRoot}-check)+${ButtonRoot}`]: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`&>&:not(:first-of-type), &>.WuiButton-variant-outlined:not(:first-of-type)`]: {
            marginLeft: -1
          }
        })
  })
);

export interface ButtonGroupProps extends ButtonStyleProps {
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<any>;
}

const ButtonGroup = createFCWithTheme<ButtonGroupProps>(
  'WuiButtonGroup',
  (props, ref) => {
    const { children, direction = 'horizontal', className, ...rest } = props;

    const styleProps = { direction };
    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiButtonGroup'
    });

    return (
      <ButtonGroupRoot
        role="group"
        className={classes.root}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </ButtonGroupRoot>
    );
  }
);

export default ButtonGroup;
