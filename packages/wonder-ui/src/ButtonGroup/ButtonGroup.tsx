import * as React from 'react';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, PickStyleProps } from '../styles/types';
import styled from '../styles/styled';
import { ButtonRoot, ButtonProps } from '../Button/Button';
import * as ReactIs from 'react-is';

export interface ButtonGroupProps extends BaseProps {
  /**
   * Button Props
   */
  ButtonProps?: Partial<ButtonProps>;
  /**
   * @description direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroupRoot = styled('div', {
  name: 'ButtonGroup',
  slot: 'Root'
})<PickStyleProps<ButtonGroupProps, 'direction'>>(
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

const ButtonGroup: React.FC<ButtonGroupProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonGroup' });
    const {
      ButtonProps,
      children,
      className,
      component,
      direction = 'horizontal',
      ...rest
    } = props;

    const styleProps = { direction };
    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiButtonGroup'
    });

    return (
      <ButtonGroupRoot
        as={component}
        role="group"
        className={classes.root}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {React.Children.toArray(children).map((node: any) => {
          if (ReactIs.isElement(node)) {
            if ((node.type as any).displayName === 'WuiButton') {
              return React.cloneElement(node, {
                ...ButtonProps,
                ...node.props
              });
            }
          }
          return node;
        })}
      </ButtonGroupRoot>
    );
  }
);

export default ButtonGroup;
