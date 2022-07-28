import * as React from 'react';
import Image from '../Image/Image';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  avatarClasses,
  avatarCssVars,
  COMPONENT_NAME,
  useAvatarCssVars
} from './AvatarClasses';
import { css } from '@wonder-ui/utils';
import { Fallback } from './Fallback';
import { imageCssVars } from '../Image/ImageClasses';
import type { AvatarProps } from './AvatarTypes';

const AvatarRoot = styled(Image, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(
  imageCssVars.style({
    width: avatarCssVars.value('size'),
    height: avatarCssVars.value('size'),
    roundedRadius: avatarCssVars.value('borderRadius')
  })
);

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    fallback = <Fallback />,
    size,
    className,
    variant = 'rounded',
    style,
    ...rest
  } = props;

  useAvatarCssVars();

  return (
    <AvatarRoot
      variant={variant}
      className={css(avatarClasses.root, className)}
      ref={ref}
      fallback={fallback}
      placeholder={fallback}
      style={{ ...avatarCssVars.style({ size }), ...style }}
      {...rest}
    />
  );
});

export default Avatar;
