import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@wonder-ui/core';

export default function createSvgIcon(
  paths: React.ReactChild,
  title: string,
  viewBox: string = '0 0 16 16'
) {
  const Icon = React.forwardRef<
    typeof SvgIcon,
    Omit<SvgIconProps, 'viewBox' | 'titleAccess' | 'component'>
  >((props, ref: any) => {
    return (
      <SvgIcon
        {...props}
        ref={ref}
        viewBox={viewBox}
        titleAccess={title}
        children={paths}
      />
    );
  });

  Icon.displayName = title;

  return Icon;
}
