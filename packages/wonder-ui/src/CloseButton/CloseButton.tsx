import * as React from 'react';
import IconButton, { IconButtonProps } from '../IconButton';
import XIcon from './XIcon';
import { SvgIconProps } from '../SvgIcon';

export interface CloseButtonProps extends IconButtonProps {
  SvgIconProps?: Partial<SvgIconProps>;
  fontSize?: SvgIconProps['fontSize'];
}

const CloseButton = React.forwardRef<HTMLElement, CloseButtonProps>(
  (props, ref) => {
    const { SvgIconProps, fontSize = 'inherit', ...rest } = props;
    return (
      <IconButton aria-label="Close" ref={ref} {...rest}>
        <XIcon fontSize={fontSize} {...SvgIconProps} />
      </IconButton>
    );
  }
);

export default CloseButton;
