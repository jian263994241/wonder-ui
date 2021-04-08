import * as React from 'react';
import IconButton, { IconButtonProps } from '../IconButton';
import XIcon from './XIcon';

const CloseButton: React.FC<IconButtonProps> = React.forwardRef(
  (props, ref) => {
    return (
      <IconButton aria-label="Close" ref={ref} {...props}>
        <XIcon size={props.size} />
      </IconButton>
    );
  }
);

export default CloseButton;
