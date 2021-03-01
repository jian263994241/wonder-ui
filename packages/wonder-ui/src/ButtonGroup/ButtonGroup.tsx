import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import { ButtonRoot } from '../Button';

interface ButtonStyleProps {
  /**
   * @description 方向
   * @default horizontal
   */
  orientation?: 'horizontal' | 'vertical';
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
    ...(styleProps.orientation === 'vertical'
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

const ButtonGroup: React.FC<ButtonGroupProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonGroup' });
    const { children, orientation = 'horizontal', className, ...rest } = props;

    const styleProps = { orientation };
    const classes = useClasses({
      styleProps,
      className,
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
