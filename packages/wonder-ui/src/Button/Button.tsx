import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { buttonClasses, ButtonStyleProps, useClasses } from './ButtonClasses';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { css } from '@wonder-ui/utils';
export interface ButtonProps extends ButtonBaseProps {
  LinkComponent?: React.ElementType;
  children?: React.ReactNode;
  classes?: Partial<typeof buttonClasses>;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  component?: React.ElementType;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  disabled?: boolean;
  edge?: 'end' | 'start' | null;
  endIcon?: React.ReactNode;
  focusVisibleClassName?: string;
  fullWidth?: boolean;
  href?: string;
  shape?: 'default' | 'round' | 'square';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  to?: string | object;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'text' | 'outlined' | 'contained';
}

export const ButtonRoot = styled(ButtonBase, {
  name: 'WuiButton',
  slot: 'Root',
  shouldForwardProp: () => true
})<ButtonBaseProps & { styleProps: ButtonStyleProps }>(
  ({ theme, styleProps }) => {
    return {
      ...theme.typography.button,
      display: 'inline-flex',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      ...(styleProps.shape === 'default' && {
        borderRadius: theme.shape.borderRadius
      }),
      transition: theme.transitions.create(
        ['background-color', 'box-shadow', 'border-color', 'color'],
        {
          duration: theme.transitions.duration.short
        }
      ),
      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'text' && {
          color: theme.palette[styleProps.color].main
        }),

      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'contained' && {
          border: '1px solid',
          borderColor: 'transparent',
          color: theme.palette[styleProps.color].contrastText,
          backgroundColor: theme.palette[styleProps.color].main
        }),

      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'outlined' && {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: theme.palette[styleProps.color].main,
          '&.active': {
            color: theme.palette[styleProps.color].contrastText,
            backgroundColor: theme.palette[styleProps.color].main,
            borderColor: theme.palette[styleProps.color].main
          }
        }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: alpha(
          theme.palette.text.primary,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        ...(styleProps.variant === 'text' &&
          styleProps.color !== 'inherit' && {
            backgroundColor: alpha(
              theme.palette[styleProps.color].main,
              theme.palette.action.hoverOpacity
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }),
        ...(styleProps.variant === 'outlined' &&
          styleProps.color !== 'inherit' && {
            border: `1px solid ${theme.palette[styleProps.color].main}`,
            backgroundColor: alpha(
              theme.palette[styleProps.color].main,
              theme.palette.action.hoverOpacity
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }),
        ...(styleProps.variant === 'contained' && {
          backgroundColor: theme.palette.colors.grey.A100,
          boxShadow: theme.shadows[4],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            // boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.colors.grey[300]
          }
        }),
        ...(styleProps.variant === 'contained' &&
          styleProps.color !== 'inherit' && {
            backgroundColor: theme.palette[styleProps.color].dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.palette[styleProps.color].main
            }
          })
      },
      '&:active': {
        ...(styleProps.variant === 'contained' && {
          boxShadow: theme.shadows[6]
        })
      },
      [`&.${buttonClasses.focusVisible}`]: {
        ...(styleProps.variant === 'contained' && {
          boxShadow: theme.shadows[6]
        })
      },
      [`&.${buttonClasses.disabled}`]: {
        color: theme.palette.action.disabled,
        ...(styleProps.variant === 'outlined' && {
          border: `1px solid ${theme.palette.action.disabledBackground}`
        }),
        ...(styleProps.variant === 'outlined' &&
          styleProps.color === 'secondary' && {
            border: `1px solid ${theme.palette.action.disabled}`
          }),
        ...(styleProps.variant === 'contained' && {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground
        })
      },
      [`&.${buttonClasses.sizeSmall}`]: {
        ...(styleProps.shape === 'round' && {
          borderRadius: theme.typography.pxToRem(14)
        }),
        fontSize: theme.typography.pxToRem(12),
        padding: theme.spacing(0.3, 0.7)
      },
      [`&.${buttonClasses.sizeMedium}`]: {
        ...(styleProps.shape === 'round' && {
          borderRadius: theme.typography.pxToRem(16)
        }),
        fontSize: theme.typography.pxToRem(14),
        padding: theme.spacing(0.6, 1.4)
      },
      [`&.${buttonClasses.sizeLarge}`]: {
        ...(styleProps.shape === 'round' && {
          borderRadius: theme.typography.pxToRem(20)
        }),
        fontSize: theme.typography.pxToRem(18),
        padding: theme.spacing(0.9, 2)
      },
      [`&.${buttonClasses.fullWidth}`]: {
        width: '100%'
      },
      [`&.${buttonClasses.edgeStart}`]: {
        marginLeft: styleProps.size === 'small' ? -3 : -12
      },
      [`&.${buttonClasses.edgeEnd}`]: {
        marginRight: styleProps.size === 'small' ? -3 : -12
      }
    };
  }
);

const ButtonLabel = styled('span', {
  name: 'WuiButton',
  slot: 'Label'
})({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit'
});

const commonIconStyles = (styleProps: ButtonStyleProps) => ({
  ...(styleProps.size === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18
    }
  }),
  ...(styleProps.size === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20
    }
  }),
  ...(styleProps.size === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22
    }
  })
});

const ButtonStartIcon = styled('span', {
  name: 'WuiButton',
  slot: 'StartIcon'
})<{ styleProps: ButtonStyleProps }>(({ styleProps }) => ({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4,
  ...(styleProps.size === 'small' && {
    marginLeft: -2
  }),
  ...commonIconStyles(styleProps)
}));

const ButtonEndIcon = styled('span', {
  name: 'WuiButton',
  slot: 'EndIcon'
})<{ styleProps: ButtonStyleProps }>(({ styleProps }) => ({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8,
  ...(styleProps.size === 'small' && {
    marginRight: -2
  }),
  ...commonIconStyles(styleProps)
}));

const Button = React.forwardRef<HTMLElement, ButtonProps>((inProps, ref) => {
  const { ButtonProps } = React.useContext(ButtonGroupContext);
  const props = useThemeProps({
    props: { ...ButtonProps, ...inProps },
    name: 'WuiButton'
  });
  const {
    children,
    color = 'primary',
    component = 'button',
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    disabled = false,
    edge = null,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    shape = 'default',
    size = 'medium',
    startIcon: startIconProp,
    variant = 'text',
    ...rest
  } = props;

  const styleProps = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    shape,
    size,
    variant
  };

  const classes = useClasses(styleProps);

  const startIcon = startIconProp && (
    <ButtonStartIcon className={classes.startIcon} styleProps={styleProps}>
      {startIconProp}
    </ButtonStartIcon>
  );

  const endIcon = endIconProp && (
    <ButtonEndIcon className={classes.endIcon} styleProps={styleProps}>
      {endIconProp}
    </ButtonEndIcon>
  );

  return (
    <ButtonRoot
      classes={classes}
      component={component}
      disableRipple={disableRipple}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={css(classes.focusVisible, focusVisibleClassName)}
      ref={ref}
      styleProps={styleProps}
      {...rest}
    >
      <ButtonLabel className={classes.label}>
        {startIcon}
        {children}
        {endIcon}
      </ButtonLabel>
    </ButtonRoot>
  );
});

Button.displayName = 'WuiButton';

export default Button;
