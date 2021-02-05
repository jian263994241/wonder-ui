import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
export interface ButtonStyleProps {
  variant: 'text' | 'outlined' | 'contained';
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  full?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

const ButtonRoot = styled(ButtonBase)<ButtonStyleProps>(
  ({ theme, ...styleProps }) => ({})
);

export interface ButtonProps
  extends ButtonBaseProps,
    Partial<ButtonStyleProps> {
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    children,
    className,
    color = 'primary',
    endIcon,
    full,
    disabled,
    fullWidth,
    rounded,
    size = 'medium',
    startIcon,
    variant = 'contained',
    ...rest
  } = props;

  return (
    <ButtonRoot
      variant="contained"
      size="medium"
      color="inherit"
      ref={ref}
      {...rest}
    >
      {children}
      {/* {startIcon && (
        <span
          className={clsx({
            [classes.startIcon]: true,
            [classes.iconSizeSmall]: size === 'small',
            [classes.iconSizeMedium]: size === 'medium',
            [classes.iconSizeLarge]: size === 'large'
          })}
        >
          {startIcon}
        </span>
      )}
      <span className={classes.label}> {children} </span>
      {endIcon && (
        <span
          className={clsx({
            [classes.endIcon]: true,
            [classes.iconSizeSmall]: size === 'small',
            [classes.iconSizeMedium]: size === 'medium',
            [classes.iconSizeLarge]: size === 'large'
          })}
        >
          {endIcon}
        </span>
      )} */}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';

export default Button;
