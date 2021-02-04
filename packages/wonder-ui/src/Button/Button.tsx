import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled, { StyledComponentProps } from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
export interface ButtonStyleProps {
  variant: 'text' | 'outlined' | 'contained';
  size: 'small' | 'medium' | 'large';
  color: 'default' | 'inherit' | 'primary' | 'secondary';
}

const ButtonRoot = styled(ButtonBase)<ButtonStyleProps>(
  ({ theme, ...styleProps }) => ({
    color: styleProps.color
  })
);

export interface ButtonProps extends StyledComponentProps<typeof ButtonRoot> {
  disabled?: boolean;
  endIcon?: React.ReactNode;
  full?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  startIcon?: React.ReactNode;
}

const Button = React.forwardRef(function Button(inProps: ButtonProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    children,
    className,
    color = 'default',
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

Button.displayName = 'button';

export default Button;
