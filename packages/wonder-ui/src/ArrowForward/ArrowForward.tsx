import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { PickStyleProps } from '../styles/types';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export interface ArrowForwardProps extends SvgIconProps {
  /**
   * @description 方向
   * @default right
   */
  direction?: 'left' | 'right' | 'up' | 'down';
}

const StyledSvgIcon = styled(SvgIcon, { name: 'ArrowForward', slot: 'Root' })<
  PickStyleProps<ArrowForwardProps, 'direction'>
>(({ theme, styleProps }) => ({
  color: 'inherit',
  transition: theme.transitions.create(['transform']),
  transform: {
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
    up: 'rotate(-90deg)',
    down: 'rotate(90deg)'
  }[styleProps.direction]
}));

const ArrowForward: React.FC<ArrowForwardProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiArrowForward' });

    const {
      size = 'medium',
      direction = 'right',
      className,
      rootRef,
      ...rest
    } = props;

    const styleProps = { direction };
    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiArrowForward'
    });

    return (
      <StyledSvgIcon
        className={classes.root}
        size={size}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        <path d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" />
      </StyledSvgIcon>
    );
  }
);

export default ArrowForward;
