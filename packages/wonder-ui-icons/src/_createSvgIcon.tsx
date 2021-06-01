import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@wonder-ui/core';

export default function createSvgIcon(
  paths: React.ReactNode,
  title: string,
  viewBox: string = '0 0 16 16'
) {
  const Icon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
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
