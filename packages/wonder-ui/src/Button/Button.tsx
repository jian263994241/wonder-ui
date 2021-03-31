import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { InProps, PickStyleProps } from '../styles/types';
import { darken, alpha } from '../styles/colorManipulator';
import { useTouchFeedback } from '@wonder-ui/hooks';
import clsx from 'clsx';

export interface ButtonProps {
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
  shape?: 'circle' | 'round' | 'rect';
  /**
   * @description disable border radius
   */
  disabledBorderRadius?: boolean;
  /**
   * @description disabled
   */
  disabled?: boolean;
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
  ({ theme, styleProps }) => ({
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    outline: 0,
    // Remove grey highlight
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
    transition: theme.transitions.create(
      ['background-color', 'border-color', 'box-shadow', 'color', 'opacity'],
      { duration: 'shorter' }
    ),

    // So we take precedent over the style of a native <a /> element.
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    ...(styleProps.disabled && {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed'
    }),
    '[disabled]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed'
    }
  }),
  ({ theme, styleProps }) => {
    const buttonPadding = {
      small: theme.spacing(0.5, 1),
      medium: theme.spacing(0.75, 1.5),
      large: theme.spacing(1, 2)
    }[styleProps.size];

    const buttonfontSize = {
      small: theme.typography.pxToRem(14),
      medium: theme.typography.pxToRem(16),
      large: theme.typography.pxToRem(20)
    }[styleProps.size];

    return {
      ...theme.typography.button,

      ...(styleProps.disabled && {
        opacity: 0.65
      }),

      ...{
        circle: {
          borderRadius: '50%',
          lineHeight: 1,
          ...{
            small: {
              minWidth: theme.typography.pxToRem(29),
              height: theme.typography.pxToRem(29),
              fontSize: theme.typography.pxToRem(15)
            },
            medium: {
              minWidth: theme.typography.pxToRem(39),
              height: theme.typography.pxToRem(39),
              fontSize: theme.typography.pxToRem(20)
            },
            large: {
              minWidth: theme.typography.pxToRem(49),
              height: theme.typography.pxToRem(49),
              fontSize: theme.typography.pxToRem(25)
            }
          }[styleProps.size]
        },
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
            backgroundColor: darken(theme.palette[styleProps.color].main, 0.2),
            borderColor: darken(theme.palette[styleProps.color].main, 0.2)
          },
          '&:focus': {
            boxShadow: `0 0 0 0.25rem ${alpha(
              theme.palette[styleProps.color].main,
              0.5
            )}`
          }
        },
        outlined: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          borderColor: theme.palette[styleProps.color].main,
          '&.state-active, &.active': {
            color: theme.palette[styleProps.color].contrastText,
            backgroundColor: theme.palette[styleProps.color].main,
            borderColor: theme.palette[styleProps.color].main
            // color: darken(theme.palette[styleProps.color].main, 0.2),
            // borderColor: darken(theme.palette[styleProps.color].main, 0.2)
          },
          '&:focus': {
            boxShadow: `0 0 0 0.25rem ${alpha(
              theme.palette[styleProps.color].main,
              0.5
            )}`
          }
        },
        text: {
          color: theme.palette[styleProps.color].main,
          backgroundColor: 'transparent',
          '&.state-active, &.active': {
            color: darken(theme.palette[styleProps.color].main, 0.2)
          },
          '&:focus': {
            boxShadow: `0 0 0 0.25rem ${alpha(
              theme.palette[styleProps.color].main,
              0.5
            )}`
          }
        }
      }[styleProps.variant]
    };
  }
);

export default function Button<P extends InProps<ButtonProps>>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiButton' });
  const {
    checked,
    children,
    className,
    color = 'primary',
    component,
    disabled = false,
    disabledBorderRadius = false,
    rootRef,
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
    className: clsx(classes.root, { active: checked }),
    activeClassName: 'state-active'
  });

  return (
    <ButtonRoot
      aria-disabled={disabled}
      as={component}
      disabled={disabled}
      ref={rootRef}
      role="button"
      styleProps={styleProps}
      {...rest}
      {...containerProps}
    >
      {children}
    </ButtonRoot>
  );
}
