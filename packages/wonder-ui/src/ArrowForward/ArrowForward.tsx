import * as React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';
import useThemeProps from '../styles/useThemeProps';
export interface ArrowForwardProps extends SvgIconProps {
  /**
   * @description 方向
   * @default right
   */
  direction?: 'left' | 'right' | 'up' | 'down';
}

const ArrowForward = React.forwardRef<SVGSVGElement, ArrowForwardProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiArrowForward' });
    const { direction = 'right', ...rest } = props;

    return (
      <SvgIcon titleAccess="WuiArrowForward" ref={ref} {...rest}>
        {direction === 'left' && (
          <path d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" />
        )}
        {direction === 'right' && (
          <path d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" />
        )}
        {direction === 'up' && (
          <path d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" />
        )}
        {direction === 'down' && (
          <path d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" />
        )}
      </SvgIcon>
    );
  }
);

export default ArrowForward;
