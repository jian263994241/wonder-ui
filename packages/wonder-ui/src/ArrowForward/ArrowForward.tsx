import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { PickStyleProps, InProps } from '../styles/types';
import SvgIcon, { SvgIconProps } from '../SvgIcon';
import { alpha } from '../styles/colorManipulator';

export interface ArrowForwardProps extends Pick<SvgIconProps, 'size'> {
  /**
   * @description 方向
   * @default right
   */
  direction?: 'left' | 'right' | 'up' | 'down';
}

const StyledSvgIcon = styled(SvgIcon, { name: 'ArrowForward', slot: 'Root' })<
  PickStyleProps<ArrowForwardProps, 'direction'>
>(({ theme, styleProps }) => ({
  color: alpha(theme.palette.text.primary, 0.3),
  transition: theme.transitions.create(['transform']),
  transform: {
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
    up: 'rotate(-90deg)',
    down: 'rotate(90deg)'
  }[styleProps.direction]
}));

export default function ArrowForward<T>(
  inProps: InProps<T, ArrowForwardProps>
) {
  const props = useThemeProps({ props: inProps, name: 'WuiArrowForward' });

  const {
    size = 'small',
    direction = 'right',
    className,
    rootRef,
    ...rest
  } = props;

  const styleProps = { direction };
  const classes = useClasses({ ...props, styleProps, name: 'WuiArrowForward' });

  return (
    <StyledSvgIcon
      viewBox="0 0 24 24"
      className={classes.root}
      size={size}
      styleProps={styleProps}
      rootRef={rootRef}
      {...rest}
    >
      <path d="M7.892 2.808a1 1 0 00-.077 1.327l.077.087L15.671 12l-7.779 7.778a1 1 0 00-.077 1.327l.077.087a1 1 0 001.327.078l.088-.078 8.485-8.485a1 1 0 00.078-1.327l-.078-.087-8.485-8.485a1 1 0 00-1.415 0z" />
    </StyledSvgIcon>
  );
}
