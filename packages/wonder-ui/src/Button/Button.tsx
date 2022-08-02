import * as React from 'react';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  addUnit,
  capitalize,
  composeClasses,
  css,
  forwardRef
} from '@wonder-ui/utils';
import {
  buttonClasses,
  buttonCssVars,
  COMPONENT_NAME,
  useButtonCssVars
} from './buttonClasses';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { ButtonProps } from './ButtonTypes';

const useClasses = (styleProps: ButtonProps) => {
  const { color, edge, fullWidth, shape, size, variant, classes } = styleProps;
  const slots = {
    root: [
      'root',
      variant,
      variant && color && `${variant}${capitalize(color)}`,
      size && `size${capitalize(size)}`,
      variant && size && `${variant}Size${capitalize(size)}`,
      shape && `shape${capitalize(shape)}`,
      edge && `edge${capitalize(edge)}`,
      fullWidth && 'fullWidth'
    ],
    label: ['label'],
    startIcon: ['startIcon', size && `iconSize${capitalize(size)}`],
    endIcon: ['endIcon', size && `iconSize${capitalize(size)}`]
  };

  return {
    ...classes,
    ...composeClasses(COMPONENT_NAME, slots, classes)
  };
};

const ButtonRoot = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Root',
  shouldForwardProp: () => true
})<{ styleProps: ButtonProps }>(({ theme, styleProps }) => {
  return {
    fontFamily: 'inherit',
    fontSize: buttonCssVars.value('fontSize', 'inherit'),
    fontWeight: buttonCssVars.value('fontWeight'),
    lineHeight: buttonCssVars.value('lineHeight'),
    letterSpacing: buttonCssVars.value('letterSpacing'),
    backgroundColor: buttonCssVars.value('bgColor', 'transparent'),
    border: `${buttonCssVars.value(
      'borderWidth',
      '0px'
    )} solid ${buttonCssVars.value('borderColor')}`,
    minWidth: buttonCssVars.value('minWidth'),
    boxShadow: buttonCssVars.value('boxShadow'),
    borderRadius: buttonCssVars.value('borderRadius'),
    color: buttonCssVars.value('textColor'),
    textDecoration: 'none',
    textTransform: buttonCssVars.value('textTransform') as any,
    padding: `${buttonCssVars.value(
      'paddingVertical',
      '0px'
    )} ${buttonCssVars.value('paddingHorizontal')}`,

    [`&.${buttonClasses.contained}`]: buttonCssVars.style({
      bgColor: buttonCssVars.value('color'),
      borderColor: buttonCssVars.value('bgColor'),
      textColor: theme.palette.common.white
    }),

    [`&.${buttonClasses.outlined}`]: buttonCssVars.style({
      textColor: buttonCssVars.value('color'),
      borderColor: buttonCssVars.value('color')
    }),

    [`&.${buttonClasses.text}`]: buttonCssVars.style({
      textColor: buttonCssVars.value('color'),
      borderColor: 'transparent'
    }),

    [`&.${buttonClasses.shapeRound}`]: buttonCssVars.style({
      borderRadius: `calc(${buttonCssVars.value('fontSize')} * 2)`
    }),

    [`&.${buttonClasses.shapeSquare}`]: buttonCssVars.style({
      borderRadius: 0
    }),

    [`&.${buttonClasses.sizeSmall}`]: buttonCssVars.style({
      fontSize: theme.typography.pxToRem(14),
      paddingHorizontal: theme.spacing(0.5),
      paddingVertical: theme.spacing(0)
    }),

    [`&.${buttonClasses.sizeMedium}`]: buttonCssVars.style({
      fontSize: theme.typography.pxToRem(16),
      paddingHorizontal: theme.spacing(1.5),
      paddingVertical: theme.spacing(0.5)
    }),

    [`&.${buttonClasses.sizeLarge}`]: buttonCssVars.style({
      fontSize: theme.typography.pxToRem(18),
      paddingHorizontal: theme.spacing(2),
      paddingVertical: theme.spacing(1)
    }),

    [`&.${buttonClasses.fullWidth}`]: {
      width: '100%'
    },

    [`&.${buttonClasses.edgeStart}`]: {
      marginLeft: `calc(${buttonCssVars.value(
        'edge',
        addUnit(theme.shape.distanceHorizontal)
      )} * -1)`
    },
    [`&.${buttonClasses.edgeEnd}`]: {
      marginRight: `calc(${buttonCssVars.value(
        'edge',
        addUnit(theme.shape.distanceHorizontal)
      )} * -1)`
    }
  };
});

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

const commonIconStyles = (styleProps: ButtonProps) => ({
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
})<{ styleProps: ButtonProps }>(({ styleProps }) => ({
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
})<{ styleProps: ButtonProps }>(({ styleProps }) => ({
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
    color,
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
    theme,
    style,
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

  useButtonCssVars();

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
      style={{
        ...buttonCssVars.style({
          color: styleProps.color
            ? theme.palette[styleProps.color!].main
            : undefined
        }),
        ...style
      }}
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
