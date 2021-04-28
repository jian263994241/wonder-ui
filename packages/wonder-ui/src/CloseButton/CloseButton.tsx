import * as React from 'react';
import IconButton, { IconButtonProps } from '../IconButton';
import XIcon from './XIcon';
import { SvgIconProps } from '../SvgIcon';

export interface CloseButtonProps extends IconButtonProps {
  SvgIconProps?: Partial<SvgIconProps>;
}

const CloseButton: React.FC<IconButtonProps> = React.forwardRef(
  (props, ref) => {
    const { SvgIconProps, ...rest } = props;
    return (
      <IconButton aria-label="Close" ref={ref} {...rest}>
        <XIcon {...SvgIconProps} />
      </IconButton>
    );
  }
);

export default CloseButton;
