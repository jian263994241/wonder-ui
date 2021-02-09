import * as React from 'react';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { StyleTypeProps } from '../styles/types';
import { darken } from '../styles/colorManipulator';
export interface ButtonStyleProps {
  /**
   * @description 按钮类型
   * @default contained
   */
  variant: 'text' | 'outlined' | 'contained';
  /**
   * @description 按钮大小
   * @default medium
   */
  size: 'small' | 'medium' | 'large';
  /**
   * @description 按钮颜色
   * @default primary
   */
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * @description 按钮形状
   * @default rect
   */
  shape: 'circle' | 'round' | 'rect';
  /** 禁用圆角 */
  disabledBorderRadius?: boolean;
  /** 将按钮宽度调整为其父宽度的选项 */
  fullWidth?: boolean;
  /** 按钮失效状态 */
  disabled?: boolean;
}

export const ButtonRoot = styled(ButtonBase)<ButtonStyleProps>(
  ({ theme, ...styleProps }) => {
    const buttonPadding = {
      small: `${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(8)}`,
      medium: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(12)}`,
      large: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`
    }[styleProps.size];

    const buttonfontSize = {
      small: theme.typography.pxToRem(14),
      medium: theme.typography.pxToRem(16),
      large: theme.typography.pxToRem(20)
    }[styleProps.size];

    const iconFontSize = {
      small: theme.typography.pxToRem(16),
      medium: theme.typography.pxToRem(18),
      large: theme.typography.pxToRem(22)
    }[styleProps.size];

    return {
      ...theme.typography.button,
      fontSize: buttonfontSize,

      ...(styleProps.disabled && {
        opacity: 0.65
      }),

      ...{
        circle: {
          borderRadius: '50%',
          lineHeight: 1,
          fontSize: iconFontSize,
          ...{
            small: {
              minWidth: theme.typography.pxToRem(29),
              height: theme.typography.pxToRem(29)
            },
            medium: {
              minWidth: theme.typography.pxToRem(39),
              height: theme.typography.pxToRem(39)
            },
            large: {
              minWidth: theme.typography.pxToRem(49),
              height: theme.typography.pxToRem(49)
            }
          }[styleProps.size]
        },
        round: {
          padding: buttonPadding,
          borderRadius: {
            small: theme.typography.pxToRem(14),
            medium: theme.typography.pxToRem(16),
            large: theme.typography.pxToRem(20)
          }[styleProps.size]
        },
        rect: {
          padding: buttonPadding,
          ...(!styleProps.disabledBorderRadius && {
            borderRadius: {
              small: theme.typography.pxToRem(3.2),
              medium: theme.typography.pxToRem(4),
              large: theme.typography.pxToRem(4.8)
            }[styleProps.size]
          })
        }
      }[styleProps.shape],

      ...{
        contained: {
          color: theme.palette[styleProps.color].contrastText,
          backgroundColor: theme.palette[styleProps.color].main,
          borderColor: theme.palette[styleProps.color].main,
          '&.state-active': {
            backgroundColor: darken(theme.palette[styleProps.color].main, 0.2),
            borderColor: darken(theme.palette[styleProps.color].main, 0.2)
          }
        },
        outlined: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          borderColor: theme.palette[styleProps.color].main,
          '&.state-active': {
            color: darken(theme.palette[styleProps.color].main, 0.2),
            borderColor: darken(theme.palette[styleProps.color].main, 0.2)
          }
        },
        text: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          '&.state-active': {
            color: darken(theme.palette[styleProps.color].main, 0.2)
          }
        }
      }[styleProps.variant]
    };
  }
);

export interface ButtonProps extends StyleTypeProps<typeof ButtonRoot> {}

/**
 * Button
 */
const Button: React.FC<ButtonProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const { children, disabled, ...rest } = props;

  return (
    <ButtonRoot
      variant="contained"
      size="medium"
      color="primary"
      shape="rect"
      role="button"
      aria-disabled={disabled}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';

export default Button;
