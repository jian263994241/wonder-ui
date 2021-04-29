import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { PickStyleProps } from '../styles/types';
import { alpha } from '../styles/colorManipulator';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

export interface IconButtonProps extends ButtonBaseProps {
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  edge?: 'end' | 'start' | boolean;
  size?: 'medium' | 'small';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButtonRoot = styled(ButtonBase, {
  name: 'WuiIconButton',
  slot: 'Root'
})<
  ButtonBaseProps & PickStyleProps<IconButtonProps, 'color' | 'edge' | 'size'>
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

    // So we take precedent over the style of a native <a /> element.
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },

    '&[disabled]': {
      // pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed'
    }
  }),
  ({ theme, styleProps }) => ({
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: '50%',
    overflow: 'visible', // Explicitly set the default value to solve a bug on IE11.
    lineHeight: 0,
    color: theme.palette.action.active,
    '&.active-state': {
      opacity: 0.3
    },
    /* Styles applied to the root element if `edge="start"`. */
    ...(styleProps.edge === 'start' && {
      marginLeft: styleProps.size === 'small' ? -3 : -12
    }),
    /* Styles applied to the root element if `edge="end"`. */
    ...(styleProps.edge === 'end' && {
      marginRight: styleProps.size === 'small' ? -3 : -12
    })
  }),
  ({ theme, styleProps }) => ({
    /* Styles applied to the root element if `color="inherit"`. */
    ...(styleProps.color === 'inherit' && {
      color: 'inherit'
    }),
    /* Styles applied to the root element if `color="primary"`. */
    ...(styleProps.color === 'primary' && {
      color: theme.palette.primary.main
    }),
    /* Styles applied to the root element if `color="secondary"`. */
    ...(styleProps.color === 'secondary' && {
      color: theme.palette.secondary.main
    }),
    /* Styles applied to the root element if `size="small"`. */
    ...(styleProps.size === 'small' && {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    }),
    /* Styles applied to the root element if `disabled={true}`. */
    '&[disabled]': {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled
    }
  })
);

const IconButton: React.FC<IconButtonProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiIconButton' });

    const {
      edge = false,
      children,
      className,
      color = 'default',
      disabled = false,
      size = 'medium',
      ...rest
    } = props;

    const styleProps = { color, edge, size };

    const classes = useClasses({ ...props, styleProps, name: 'WuiIconButton' });

    return (
      <IconButtonRoot
        styleProps={styleProps}
        disabled={disabled}
        className={classes.root}
        ref={ref}
        {...rest}
      >
        {children}
      </IconButtonRoot>
    );
  }
);

export default IconButton;
