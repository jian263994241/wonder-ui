import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { PickStyleProps, BaseProps } from '../styles/types';
import { darken } from '../styles/colorManipulator';
import { useTouchFeedback } from '@wonder-ui/hooks';
import clsx from 'clsx';

export interface ButtonProps extends BaseProps {
  /**
   * @description checked state
   */
  checked?: boolean;
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * @description Root element
   * @default button
   */
  component?: keyof React.ReactHTML | React.ComponentType;
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
  shape?: 'round' | 'rect';
  /**
   * @description disable border radius
   */
  disabledBorderRadius?: boolean;
  /**
   * @description disabled
   */
  disabled?: boolean;
  /**
   * Click event
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonRoot = styled('button', {
  name: 'WuiButton',
  slot: 'Root'
})<
  PickStyleProps<
    ButtonProps,
    'color' | 'disabled' | 'disabledBorderRadius' | 'shape' | 'size' | 'variant'
  >
>(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    outline: 0,
    // Remove #0f0d0d highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent', // Reset default value
    border: '1px solid transparent',
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none', // Reset
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    transition: theme.transitions.create(
      ['background-color', 'border-color', 'box-shadow', 'color', 'opacity'],
      { duration: theme.transitions.duration.shorter }
    ),

    // So we take precedent over the style of a native <a /> element.
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },

    '&[disabled]': {
      // pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed'
    }
  }),
  ({ theme, styleProps }) => {
    const buttonPadding = {
      small: theme.spacing(0.3, 0.7),
      medium: theme.spacing(0.6, 1.4),
      large: theme.spacing(0.9, 2)
    }[styleProps.size];

    const buttonfontSize = {
      small: theme.typography.pxToRem(12),
      medium: theme.typography.pxToRem(14),
      large: theme.typography.pxToRem(18)
    }[styleProps.size];

    return {
      ...theme.typography.button,

      ...(styleProps.disabled && {
        opacity: 0.65
      }),

      ...{
        round: {
          padding: buttonPadding,
          fontSize: buttonfontSize,
          borderRadius: {
            small: theme.typography.pxToRem(14),
            medium: theme.typography.pxToRem(16),
            large: theme.typography.pxToRem(20)
          }[styleProps.size]
        },
        rect: {
          padding: buttonPadding,
          fontSize: buttonfontSize,
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
          '&.state-active, &.active': {
            backgroundColor: darken(theme.palette[styleProps.color].main, 0.3),
            borderColor: darken(theme.palette[styleProps.color].main, 0.3)
          },
          '&:focus': {
            boxShadow: theme.shadows[2]
          }
        },
        outlined: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          borderColor: theme.palette[styleProps.color].main,
          '&.state-active': {
            color: darken(theme.palette[styleProps.color].main, 0.3),
            borderColor: darken(theme.palette[styleProps.color].main, 0.3)
          },
          '&.active': {
            color: theme.palette[styleProps.color].contrastText,
            backgroundColor: theme.palette[styleProps.color].main,
            borderColor: theme.palette[styleProps.color].main
          },
          '&:focus': {
            boxShadow: theme.shadows[2]
          }
        },
        text: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          '&.state-active': {
            opacity: 0.75
          },
          '&:focus': {
            textShadow: `1px 1px 10px rgba(0,0,0,0.2)}`
          }
        }
      }[styleProps.variant]
    };
  }
);

const Button: React.FC<ButtonProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    checked,
    children,
    className,
    color = 'primary',
    component,
    disabled = false,
    disabledBorderRadius = false,
    shape = 'rect',
    size = 'medium',
    variant = 'contained',
    ...rest
  } = props;

  const styleProps = {
    color,
    disabled,
    disabledBorderRadius,
    shape,
    size,
    variant
  };

  const classes = useClasses({ ...props, styleProps, name: 'WuiButton' });
  const containerProps = useTouchFeedback({
    ...props,
    disabled,
    prefixClassName: clsx(classes.root, { active: checked }),
    activeClassName: 'state-active'
  });

  return (
    <ButtonRoot
      aria-disabled={disabled}
      as={component}
      disabled={disabled}
      ref={ref}
      role="button"
      styleProps={styleProps}
      {...rest}
      {...containerProps}
    >
      {children}
    </ButtonRoot>
  );
});

export default Button;
