import * as React from 'react';
import clsx from 'clsx';
import { capitalize } from '@wonder-ui/utils';
import {
  colorManipulator,
  createStyles,
  withStyles,
  ClassKeysOfStyles
} from '../styles';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';

const { alpha } = colorManipulator;

const styles = createStyles((theme) => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.button,
    boxSizing: 'border-box',
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    '&:hover': {
      textDecoration: 'none',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      },
      '&$disabled': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      opacity: 0.4
    }
  },
  /* Styles applied to the span element that wraps the children. */
  label: {
    width: '100%', // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },
  /* Styles applied to the root element if `variant="text"`. */
  text: {
    padding: '6px 8px',
    '&:hover': {
      color: alpha(theme.palette.text.primary, 0.65),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: alpha(theme.palette.primary.main, 0.65),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: alpha(theme.palette.secondary.main, 0.65),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    padding: '5px 15px',
    border: `1px solid ${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)'
    }`,
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`
    }
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: alpha(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`
    }
  },
  /* Styles applied to the root element if `variant="contained"`. */
  contained: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    // boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      // boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        // boxShadow: theme.shadows[2],
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    '&$focusVisible': {
      // boxShadow: theme.shadows[6],
    },
    '&:active': {
      // boxShadow: theme.shadows[8],
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      // boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground
    }
  },
  /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main
      }
    }
  },
  /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },
  /* Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    '&$focusVisible': {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    '&$disabled': {
      boxShadow: 'none'
    }
  },
  /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit',
    borderColor: 'currentColor'
  },
  /* Styles applied to the root element if `size="small"` and `variant="text"`. */
  textSizeSmall: {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  },
  /* Styles applied to the root element if `size="large"` and `variant="text"`. */
  textSizeLarge: {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  },
  /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
  outlinedSizeSmall: {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  },
  /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
  outlinedSizeLarge: {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  },
  /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
  containedSizeSmall: {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  },
  /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  },
  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {},
  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {},
  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
    // display: 'block',
  },
  full: {
    width: '100%',
    height: '100%',
    // display: 'block',
    borderRadius: 0
  },
  borderRounded: {
    borderRadius: theme.shape.buttonBorderRadius
  },
  /* Styles applied to the startIcon element if supplied. */
  startIcon: {
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    '&$iconSizeSmall': {
      marginLeft: -2
    }
  },
  /* Styles applied to the endIcon element if supplied. */
  endIcon: {
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    '&$iconSizeSmall': {
      marginRight: -2
    }
  },
  /* Styles applied to the icon element if supplied and `size="small"`. */
  iconSizeSmall: {
    '& > *:first-child': {
      fontSize: 18
    }
  },
  /* Styles applied to the icon element if supplied and `size="medium"`. */
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: 20
    }
  },
  /* Styles applied to the icon element if supplied and `size="large"`. */
  iconSizeLarge: {
    '& > *:first-child': {
      fontSize: 22
    }
  }
}));

export interface ButtonProps extends ButtonBaseProps {
  classes: ClassKeysOfStyles<typeof styles>;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  full?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = React.forwardRef(function Button(props: ButtonProps, ref) {
  const {
    children,
    classes,
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
    <ButtonBase
      className={clsx(
        classes.root,
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}` as 'containedPrimary']]:
            color !== 'default' && color !== 'inherit',
          [classes[
            `${variant}Size${capitalize(size)}` as 'containedSizeSmall'
          ]]: size !== 'medium',
          [classes[`size${capitalize(size)}` as 'sizeSmall']]: size !== 'medium'
        },
        {
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
          [classes.full]: full,
          [classes.borderRounded]: rounded,
          [classes.colorInherit]: color === 'inherit'
        },
        className
      )}
      ref={ref}
      {...rest}
    >
      {startIcon && (
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
      )}
    </ButtonBase>
  );
});

Button.displayName = 'button';

export default withStyles(styles)(Button);
