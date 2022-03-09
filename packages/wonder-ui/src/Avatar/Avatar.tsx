import * as React from 'react';
import Image from '../Image/Image';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { Fallback } from './Fallback';
import type { AvatarProps } from './AvatarTypes';

const COMPONENT_NAME = 'WuiAvatar';

const AvatarRoot = styled(Image, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  '--image-width': 'var(--avatar-size, 44px)',
  '--image-height': 'var(--avatar-size, 44px)',
  '--image-radius': 'var(--avatar-border-radius, 4px)'
});

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    fit = 'cover',
    variant = 'rounded',
    fallback = <Fallback />,
    placeholder = <Fallback />,
    ...rest
  } = props;

  return (
    <AvatarRoot
      fit={fit}
      variant={variant}
      ref={ref}
      fallback={fallback}
      placeholder={placeholder}
      {...rest}
    />
  );
});

export default Avatar;
