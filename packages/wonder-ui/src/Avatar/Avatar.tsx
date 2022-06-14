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
  ...imageCssVars.style({
    width: cssVars.toVar('size', styleProps.size!),
    height: cssVars.toVar('size', styleProps.size!),
    roundedRadius: cssVars.toVar('borderRadius', 4)
  })
}));

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    fit = 'cover',
    fallback = <Fallback />,
    size = 44,
    className,
    ...rest
  } = props;

  const styleProps = { ...props, fit, fallback, size };
  const classes = useClasses({ styleProps });

  return (
    <AvatarRoot
      fit={fit}
      variant="rounded"
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
