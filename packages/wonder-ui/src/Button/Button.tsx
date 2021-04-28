import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { PickStyleProps } from '../styles/types';
import { alpha, darken } from '../styles/colorManipulator';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import { getDevice } from '@wonder-ui/utils';
import clsx from 'clsx';

const device = getDevice();

export interface ButtonProps extends ButtonBaseProps {
  /**
   * @description checked state
   */
  checked?: boolean;
  /**
   * @description color
   * @default primary
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * @description button type
   * @default contained
   */
  variant?: 'text' | 'outlined' | 'contained';
  /**
   * @description size
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description shape
   * @default rect
   */
  shape?: 'default' | 'round' | 'square';
  /**
   * @description disabled
   */
  disabled?: boolean;
}

export const ButtonRoot = styled(ButtonBase, {
  name: 'WuiButton',
  slot: 'Root'
})<
  ButtonBaseProps &
    PickStyleProps<
      ButtonProps,
      'color' | 'disabled' | 'shape' | 'size' | 'variant'
    >
>(({ theme, styleProps }) => {
  return {
    ...theme.typography.button,
    padding: {
      small: theme.spacing(0.3, 0.7),
      medium: theme.spacing(0.6, 1.4),
      large: theme.spacing(0.9, 2)
    }[styleProps.size],
    fontSize: {
      small: theme.typography.pxToRem(12),
      medium: theme.typography.pxToRem(14),
      large: theme.typography.pxToRem(18)
    }[styleProps.size],

    ...(styleProps.disabled && {
      opacity: 0.65
    }),

    ...{
      default: {
        borderRadius: theme.shape.borderRadius
      },
      round: {
        borderRadius: {
          small: theme.typography.pxToRem(14),
          medium: theme.typography.pxToRem(16),
          large: theme.typography.pxToRem(20)
        }[styleProps.size]
      },
      square: {}
    }[styleProps.shape],

    ...{
      contained: {
        color: theme.palette[styleProps.color].contrastText,
        backgroundColor: theme.palette[styleProps.color].main,
        borderColor: theme.palette[styleProps.color].main,
        '&.state-active, &.active': {
          backgroundColor: darken(theme.palette[styleProps.color].main, 0.3),
          borderColor: darken(theme.palette[styleProps.color].main, 0.3)
        },
        '&:focus': {
          boxShadow: theme.shadows[3]
        }
      },
      outlined: {
        color: theme.palette[styleProps.color].main,
        backgroundColor: 'transparent',
        borderColor: theme.palette[styleProps.color].main,
        '&.state-active': {
          color: darken(theme.palette[styleProps.color].main, 0.3),
          backgroundColor: alpha(
            theme.palette[styleProps.color].main,
            theme.palette.action.hoverOpacity
          ),
          borderColor: darken(theme.palette[styleProps.color].main, 0.3)
        },
        '&.active': {
          color: theme.palette[styleProps.color].contrastText,
          backgroundColor: theme.palette[styleProps.color].main,
          borderColor: theme.palette[styleProps.color].main
        },
        '&:focus': {
          backgroundColor: alpha(
            theme.palette[styleProps.color].main,
            theme.palette.action.hoverOpacity
          )
        }
      },
      text: {
        color: theme.palette[styleProps.color].main,
        backgroundColor: 'transparent',
        '&.state-active': {
          opacity: 0.75
        },
        '&:focus': {
          textShadow: `1px 1px 5px rgba(0,0,0,0.22)}`
        }
      }
    }[styleProps.variant]
  };
});

const Button: React.FC<ButtonProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    checked,
    children,
    className,
    color = 'primary',
    disabled = false,
    shape = 'default',
    size = 'medium',
    variant = 'contained',
    ...rest
  } = props;

  const styleProps = {
    color,
    disabled,
    shape,
    size,
    variant
  };

  const classes = useClasses({ ...props, styleProps, name: 'WuiButton' });

  return (
    <ButtonRoot
      disabled={disabled}
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, { active: checked })}
      {...rest}
    >
      {children}
    </ButtonRoot>
  );
});

export default Button;
