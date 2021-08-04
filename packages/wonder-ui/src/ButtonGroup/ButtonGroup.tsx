import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { buttonClasses, ButtonProps } from '../Button';
import { buttonGroupClasses, useClasses } from './ButtonGroupClasses';
import { ButtonGroupContext } from './ButtonGroupContext';
import { css } from '@wonder-ui/utils';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 按钮属性 [ButtonProps](#/components/general/button#api)
   */
  ButtonProps?: Partial<ButtonProps>;
  /**
   * 节点
   */
  component?: React.ElementType;
  /**
   * 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroupRoot = styled('div', {
  name: 'ButtonGroup',
  slot: 'Root'
})(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',

  [`& > .${buttonClasses.root}`]: {
    flex: '1 1 auto'
  },

  [`&.${buttonGroupClasses.directionVertical}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [`&>&:not(:last-child)> .${buttonClasses.root}, &>.${buttonClasses.root}:not(:last-child)`]:
      {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
    [`&>&:not(:first-of-type)>.${buttonClasses.root}, &>.${buttonClasses.root}~.${buttonClasses.root}`]:
      {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
    [`& >.${buttonClasses.root} + .${buttonClasses.root}`]: {
      borderTop: 0
    },
    [`& >.${buttonClasses.contained} + .${buttonClasses.contained}`]: {
      borderLeft: 0,
      '&:before': {
        content: '""',
        width: '100%',
        height: 1,
        backgroundColor: theme.palette.divider,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'scaleY(0.5)'
      }
    },
    [`&>.${buttonClasses.root}, &>&`]: {
      width: '100%'
    }
  },
  [`&.${buttonGroupClasses.directionHorizontal}`]: {
    [`&>&:not(:last-child)>.${buttonClasses.root}, &>.${buttonClasses.root}:not(:last-child)`]:
      {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
    [`&>&:not(:first-of-type)>.${buttonClasses.root}, &>.${buttonClasses.root}:nth-of-type(n+3), &>:not(.${buttonClasses.root}-check)+.${buttonClasses.root}`]:
      {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
    [`& >.${buttonClasses.contained} + .${buttonClasses.contained}`]: {
      borderLeft: 0,
      '&:before': {
        content: '""',
        width: 1,
        height: '100%',
        backgroundColor: theme.palette.divider,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'scaleX(0.5)'
      }
    },
    [`& >.${buttonClasses.root} + .${buttonClasses.root}`]: {
      borderLeft: 0
    }
  }
}));

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
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

    const styleProps = { ...props, direction };
    const classes = useClasses(styleProps);

    return (
      <ButtonGroupContext.Provider value={{ ButtonProps }}>
        <ButtonGroupRoot
          as={component}
          role="group"
          className={css(classes.root, className)}
          ref={ref}
          {...rest}
        >
          {children}
        </ButtonGroupRoot>
      </ButtonGroupContext.Provider>
    );
  }
);

export default ButtonGroup;
