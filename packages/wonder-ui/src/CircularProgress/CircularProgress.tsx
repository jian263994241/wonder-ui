import * as React from 'react';
import Circular from './Circular';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, composeClasses } from '@wonder-ui/utils';
import type { CircularProgressProps } from './CircularProgressTypes';
import { COMPONENT_NAME } from './CircularProgressClasses';
import Typography from '../Typography/Typography';

const useClasses = (styleProps: CircularProgressProps) => {
  const { classes, color, variant } = styleProps;

  const slots = {
    root: ['root', color && `color${capitalize(color)}`, variant && variant],
    text: ['text'],
    icon: ['icon']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const CircularProgressRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: CircularProgressProps }>(({ theme, styleProps }) => ({
  position: 'relative',
  /* Styles applied to the root element. */
  display: 'inline-block',
  userSelect: 'none',
  color: theme.palette[styleProps.color ?? 'primary'].main
}));

const CircularProgressText = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Text'
})({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    color = 'primary',
    className,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    size = 40,
    style,
    children,
    ...rest
  } = props;

  const styleProps = { ...props, color, variant };
  const classes = useClasses(styleProps);

  return (
    <CircularProgressRoot
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      className={classes.root}
      style={{ width: size, height: size, ...style }}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      <Circular
        className={classes.icon}
        width={size}
        height={size}
        thickness={thickness}
        variant={variant}
        value={value}
      />

      {children && (
        <CircularProgressText
          className={classes.text}
          style={{ fontSize: size * 0.25 }}
        >
          {children}
        </CircularProgressText>
      )}
    </CircularProgressRoot>
  );
});

export default CircularProgress;
