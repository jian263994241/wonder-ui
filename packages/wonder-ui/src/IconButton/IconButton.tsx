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
import { iconButtonClasses, iconButtonCssVars } from './IconButtonClasses';
import { IconButtonProps } from './IconButtonTypes';
import { svgIconCssVars } from '../SvgIcon';

const useClasses = (styleProps: IconButtonProps) => {
  const { classes, disabled, edge } = styleProps;

  const slots = {
    root: ['root', edge && `edge${capitalize(edge)}`, disabled && 'disabled'],
    label: ['label']
  };

  return composeClasses('WuiIconButton', slots, classes);
};

const IconButtonRoot = styled(ButtonBase, {
  name: 'WuiIconButton',
  slot: 'Root',
  shouldForwardProp: () => true
})<{ styleProps: IconButtonProps }>(({ theme }) => ({
  fontFamily: 'inherit',
  textAlign: 'center',
  flex: '0 0 auto',
  borderRadius: '50%',
  lineHeight: 0,
  backgroundColor: iconButtonCssVars.value('bgColor'),
  padding: iconButtonCssVars.value('padding', '12px'),

  '& > svg': {
    display: 'block'
  },

  ...svgIconCssVars.style({
    size: iconButtonCssVars.value('size', theme.typography.pxToRem(20)),
    color: iconButtonCssVars.value('color', theme.palette.text.secondary)
  }),

  [`&.${iconButtonClasses.edgeStart}`]: {
    marginLeft: `calc(${iconButtonCssVars.value(
      'edge',
      addUnit(theme.shape.distanceHorizontal)
    )} * -1)`
  },
  [`&.${iconButtonClasses.edgeEnd}`]: {
    marginRight: `calc(${iconButtonCssVars.value(
      'edge',
      addUnit(theme.shape.distanceHorizontal)
    )} * -1)`
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
    color,
    disabled = false,
    theme,
    style,
    ...rest
  } = props;

  const styleProps = { ...props, color, disabled, edge };

  const classes = useClasses(styleProps);

  return (
    <IconButtonRoot
      centerRipple
      disabled={disabled}
      focusRipple
      styleProps={styleProps}
      ref={ref}
      style={{
        ...iconButtonCssVars.style({
          color: color ? theme.palette[color]?.main : undefined
        }),
        ...style
      }}
      {...rest}
      classes={{ root: css(classes.root, className) }}
    >
      <IconButtonLabel className={classes.label}>{children}</IconButtonLabel>
    </IconButtonRoot>
  );
});

export default IconButton;
