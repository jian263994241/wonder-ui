import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  capitalize,
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';

const iconButtonClasses = generateUtilityClasses('WuiIconButton', [
  'root',
  'disabled',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorLight',
  'edgeStart',
  'edgeEnd',
  'sizeSmall',
  'sizeMedium',
  'label'
]);

const useClasses = (styleProps: IconButtonStyleProps) => {
  const { classes, disabled, color, edge, size } = styleProps;

  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      color !== 'default' && color && `color${capitalize(color)}`,
      edge && `edge${capitalize(edge)}`,
      size && `size${capitalize(size)}`
    ],
    label: ['label']
  };

  return composeClasses('WuiIconButton', slots, classes);
};

export interface IconButtonProps extends ButtonBaseProps {
  classes?: Partial<typeof iconButtonClasses>;
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'light';
  component?: React.ElementType;
  disableRipple?: boolean;
  disabled?: boolean;
  edge?: 'end' | 'start' | null;
  size?: 'medium' | 'small';
}

interface IconButtonStyleProps extends IconButtonProps {}

const IconButtonRoot = styled(ButtonBase, {
  name: 'WuiIconButton',
  slot: 'Root',
  shouldForwardProp: () => true
})<{ styleProps: IconButtonStyleProps }>(({ theme, styleProps }) => ({
  textAlign: 'center',
  flex: '0 0 auto',
  borderRadius: '50%',
  overflow: 'visible', // Explicitly set the default value to solve a bug on IE11.
  lineHeight: 0,
  color: theme.palette.action.active,
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['background-color', 'opacity'], {
    duration: theme.transitions.duration.shortest
  }),
  fontSize: 'inherit',
  '&:hover': {
    color: alpha(theme.palette.action.active, 0.38),

    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      color: theme.palette.action.active
    }
  },
  [`&.${iconButtonClasses.edgeStart}`]: {
    marginLeft: styleProps.size === 'small' ? -3 : -12
  },
  [`&.${iconButtonClasses.edgeEnd}`]: {
    marginRight: styleProps.size === 'small' ? -3 : -12
  },
  [`&.${iconButtonClasses.colorInherit}`]: {
    color: 'inherit'
  },
  [`&.${iconButtonClasses.colorPrimary}`]: {
    color: theme.palette.primary.main,
    '&:hover': {
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
  [`&.${iconButtonClasses.colorSecondary}`]: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: alpha(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  [`&.${iconButtonClasses.colorLight}`]: {
    color: theme.palette.light.main,
    '&:hover': {
      backgroundColor: alpha(
        theme.palette.light.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },

  [`&.${iconButtonClasses.sizeMedium}`]: {
    padding: 12,
    fontSize: theme.typography.pxToRem(24)
  },
  [`&.${iconButtonClasses.sizeSmall}`]: {
    padding: 3,
    fontSize: theme.typography.pxToRem(16)
  },
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));

const IconButtonLabel = styled('span', {
  name: 'WuiIconButton',
  slot: 'Label'
})({
  width: '100%',
  display: 'flex',
  alignItems: 'inherit',
  justifyContent: 'inherit'
});

const IconButton = forwardRef<HTMLElement, IconButtonProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiIconButton' });

  const {
    edge = null,
    children,
    className,
    classes: classesProp,
    color = 'default',
    disabled = false,
    size = 'medium',
    ...rest
  } = props;

  const styleProps = { ...props, color, disabled, edge, size };

  const classes = useClasses(styleProps);

  return (
    <IconButtonRoot
      centerRipple
      disabled={disabled}
      focusRipple
      styleProps={styleProps}
      ref={ref}
      {...rest}
      classes={{ root: css(classes.root, className) }}
    >
      <IconButtonLabel className={classes.label}>{children}</IconButtonLabel>
    </IconButtonRoot>
  );
});

export default IconButton;
