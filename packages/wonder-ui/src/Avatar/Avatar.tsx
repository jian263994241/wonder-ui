import * as React from 'react';
import Image, { cssVars as imageCssVars } from '../Image/Image';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './AvatarClasses';
import { createCssVars, composeClasses, css } from '@wonder-ui/utils';
import { Fallback } from './Fallback';
import type { AvatarProps, StyleProps } from './AvatarTypes';

const useClasses = (props: StyleProps) => {
  const { classes } = props.styleProps;

  const slots = {
    root: ['root']
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

export const cssVars = createCssVars(COMPONENT_NAME, ['size', 'borderRadius']);

const AvatarRoot = styled(Image, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<StyleProps>(({ styleProps }) => ({
  ...cssVars.style({
    size: styleProps.size,
    borderRadius: 4
  }),

  ...imageCssVars.style({
    width: cssVars.value('size'),
    height: cssVars.value('size'),
    roundedRadius: cssVars.value('borderRadius')
  })
}));

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    fit = 'cover',
    fallback = <Fallback />,
    size = 44,
    className,
    variant = 'rounded',
    ...rest
  } = props;

  const styleProps = { ...props, fit, fallback, size, variant };
  const classes = useClasses({ styleProps });

  return (
    <AvatarRoot
      fit={fit}
      variant={variant}
      styleProps={styleProps}
      className={css(classes.root, className)}
      ref={ref}
      fallback={fallback}
      placeholder={fallback}
      {...rest}
    />
  );
});

export default Avatar;
