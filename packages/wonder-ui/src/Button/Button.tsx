import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { PickStyleProps, ClassNameMap } from '../styles/types';
import { alpha, darken } from '../styles/colorManipulator';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import clsx from 'clsx';

export interface ButtonProps extends ButtonBaseProps {
  classes?: ClassNameMap<'root' | 'label' | 'startIcon' | 'endIcon'>;
  /**
   * @description checked state
   */
  checked?: boolean;
  /**
   * @description color
   * @default primary
   */
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
  edge?: 'end' | 'start' | boolean;
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
   * 左边图标
   */
  startIcon?: React.ReactNode;
  /**
   * 右边图标
   */
  endIcon?: React.ReactNode;
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
      'color' | 'disabled' | 'edge' | 'shape' | 'size' | 'variant'
    >
>(({ theme, styleProps }) => {
  return {
    ...theme.typography.button,
    display: 'inline-flex',
    backgroundColor: 'transparent',
    color: 'inherit',
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

    '&[disabled]': {
      opacity: 0.5
    },

    /* Styles applied to the root element if `edge="start"`. */
    ...(styleProps.edge === 'start' && {
      marginLeft: styleProps.size === 'small' ? -3 : -12
    }),
    /* Styles applied to the root element if `edge="end"`. */
    ...(styleProps.edge === 'end' && {
      marginRight: styleProps.size === 'small' ? -3 : -12
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

    ...(styleProps.variant === 'text' && {
      '&.active-state': {
        opacity: '0.3'
      }
    }),
    ...(styleProps.color !== 'inherit' &&
      styleProps.variant === 'text' && {
        color: theme.palette[styleProps.color].main
      }),

    ...(styleProps.disabled && {
      color: theme.palette.action.disabled
    }),
    ...(styleProps.color !== 'inherit' &&
      styleProps.variant === 'contained' && {
        color: theme.palette[styleProps.color].contrastText,
        backgroundColor: theme.palette[styleProps.color].main,
        borderColor: theme.palette[styleProps.color].main,
        ...(styleProps.disabled && {
          color: theme.palette.action.disabled,
          backgroundColor: theme.palette.action.disabledBackground,
          borderColor: theme.palette.action.disabled
        }),
        '&.active-state, &.active': {
          backgroundColor: darken(theme.palette[styleProps.color].main, 0.3),
          borderColor: darken(theme.palette[styleProps.color].main, 0.3)
        },

        '&:focus': {
          boxShadow: theme.shadows[3]
        }
      }),

    ...(styleProps.color !== 'inherit' &&
      styleProps.variant === 'outlined' && {
        color: theme.palette[styleProps.color].main,
        backgroundColor: 'transparent',
        borderColor: theme.palette[styleProps.color].main,
        ...(styleProps.disabled && {
          color: theme.palette.action.disabled,
          borderColor: theme.palette.action.disabled
        }),
        '&.active-state': {
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
          boxShadow: theme.shadows[3]
        }
      })
  };
});

const ButtonLabel = styled('span', {
  name: 'WuiButton',
  slot: 'Label'
})({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit'
});

const ButtonStartIcon = styled('span', {
  name: 'WuiButton',
  slot: 'StartIcon'
})<PickStyleProps<ButtonProps, 'size'>>(({ styleProps }) => ({
  display: 'inherit',
  marginRight: 4,
  marginLeft: -4,
  ...(styleProps.size === 'small' && {
    marginLeft: -2
  })
}));

const ButtonEndIcon = styled('span', {
  name: 'WuiButton',
  slot: 'EndIcon'
})<PickStyleProps<ButtonProps, 'size'>>(({ styleProps }) => ({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 4,
  ...(styleProps.size === 'small' && {
    marginRight: -2
  })
}));

const Button: React.FC<ButtonProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    checked,
    children,
    className,
    component = 'button',
    color = 'primary',
    disabled = false,
    edge = false,
    shape = 'default',
    size = 'medium',
    startIcon: startIconProp,
    endIcon: endIconProp,
    variant = 'contained',
    ...rest
  } = props;

  const styleProps = {
    color,
    disabled,
    edge,
    shape,
    size,
    variant
  };

  const classes = useClasses({ ...props, styleProps, name: 'WuiButton' });

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
      component={component}
      disabled={disabled}
      ref={ref}
      styleProps={styleProps}
      className={clsx(classes.root, { active: checked })}
      {...rest}
    >
      {component != 'input' ? (
        <ButtonLabel className={classes.label}>
          {startIcon}
          {children}
          {endIcon}
        </ButtonLabel>
      ) : (
        children
      )}
    </ButtonRoot>
  );
});

export default Button;
