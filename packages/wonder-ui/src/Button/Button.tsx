import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { ButtonProps } from './ButtonTypes';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { capitalize, composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { COMPONENT_NAME, buttonClasses } from './buttonClasses';
import { createCssVars } from '@wonder-ui/utils';

type ButtonStyleProps = ButtonProps &
  Required<Pick<ButtonProps, 'color' | 'size' | 'shape'>>;

const useClasses = (styleProps: ButtonStyleProps) => {
  const { color, edge, fullWidth, shape, size, variant, classes } = styleProps;
  const slots = {
    root: [
      'root',
      variant,
      `${variant}${capitalize(color)}`,
      `size${capitalize(size)}`,
      `${variant}Size${capitalize(size)}`,
      `shape${capitalize(shape)}`,
      edge && `edge${capitalize(edge)}`,
      color === 'inherit' && 'colorInherit',
      fullWidth && 'fullWidth'
    ],
    label: ['label'],
    startIcon: ['startIcon', `iconSize${capitalize(size)}`],
    endIcon: ['endIcon', `iconSize${capitalize(size)}`]
  };

  return {
    ...classes,
    ...composeClasses(COMPONENT_NAME, slots, classes)
  };
};

export const cssVars = createCssVars(COMPONENT_NAME, []);

const ButtonRoot = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Root',
  shouldForwardProp: () => true
})<ButtonBaseProps & { styleProps: ButtonStyleProps }>(
  ({ theme, styleProps }) => {
    const getColor = (name: string, color: string) =>
      `var(--button-${name}-color, ${color})`;

    const mainColor =
      styleProps.color !== 'inherit'
        ? getColor(
            `${styleProps.color}-${styleProps.variant}`,
            theme.palette[styleProps.color].main
          )
        : undefined;

    return {
      ...theme.typography.button,
      backgroundColor: 'transparent',
      border: 'thin solid transparent',
      ...(styleProps.shape === 'default' && {
        borderRadius: theme.shape.borderRadius
      }),
      transition: theme.transitions.create(
        ['background-color', 'box-shadow', 'border-color', 'color'],
        { duration: theme.transitions.duration.short }
      ),

      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'text' && {
          color: mainColor
        }),

      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'contained' && {
          border: 'thin solid',
          borderColor: 'transparent',
          color: `var(--button-contrast-text-color, ${
            theme.palette[styleProps.color].contrastText
          })`,
          backgroundColor: mainColor
        }),

      ...(styleProps.color !== 'inherit' &&
        styleProps.variant === 'outlined' && {
          color: mainColor,
          backgroundColor: 'transparent',
          border: 'thin solid',
          borderColor: mainColor
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
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'text' && {
            // Reset on touch devices, it doesn't add specificity
            backgroundColor: getColor(
              `${styleProps.color}-text-active`,
              alpha(
                theme.palette[styleProps.color].dark,
                theme.palette.action.hoverOpacity
              )
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }),
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'outlined' && {
            backgroundColor: getColor(
              `${styleProps.color}-outlined-active`,
              alpha(
                theme.palette[styleProps.color].dark,
                theme.palette.action.hoverOpacity
              )
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }),
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'contained' && {
            backgroundColor: getColor(
              `${styleProps.color}-contained-active`,
              theme.palette[styleProps.color].dark
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: mainColor
            }
          })
      },
      [`&.${buttonClasses.active}`]: {
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'text' && {
            // Reset on touch devices, it doesn't add specificity
            backgroundColor: getColor(
              `${styleProps.color}-text-active`,
              alpha(
                theme.palette[styleProps.color].dark,
                theme.palette.action.hoverOpacity
              )
            )
          }),
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'outlined' && {
            backgroundColor: getColor(
              `${styleProps.color}-outlined-active`,
              alpha(
                theme.palette[styleProps.color].dark,
                theme.palette.action.hoverOpacity
              )
            )
          }),
        ...(styleProps.color !== 'inherit' &&
          styleProps.variant === 'contained' && {
            backgroundColor: getColor(
              `${styleProps.color}-contained-active`,
              theme.palette[styleProps.color].dark
            )
          })
      },
      '&:active': {
        ...(styleProps.variant === 'contained' && {
          boxShadow: theme.shadows[4]
        })
      },
      [`&.${buttonClasses.focusVisible}`]: {
        ...(styleProps.variant === 'contained' && {
          boxShadow: theme.shadows[4]
        })
      },
      [`&.${buttonClasses.disabled}`]: {
        opacity: theme.palette.action.disabledOpacity
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
  name: COMPONENT_NAME,
  slot: 'Label'
})({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
  [`*:disabled > &`]: {
    pointerEvents: 'none'
  }
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
  name: COMPONENT_NAME,
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
  name: COMPONENT_NAME,
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

const Button = forwardRef<HTMLElement, ButtonProps>((inProps, ref) => {
  const { ButtonProps } = React.useContext(ButtonGroupContext);
  const props = useThemeProps({
    props: { ...ButtonProps, ...inProps },
    name: COMPONENT_NAME
  });
  const {
    children,
    color = 'primary',
    component = 'button',
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

export default Button;
