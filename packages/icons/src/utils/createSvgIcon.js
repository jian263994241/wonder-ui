import React from 'react';
import { SvgIcon } from '@wonder-ui/core';

export default function createSvgIcon(path, displayName) {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon data-test={`${displayName}Icon`} ref={ref} {...props}>
        {path}
      </SvgIcon>
    )),
  );

  Component.displayName = `${displayName}Icon`;

  return Component;
}
