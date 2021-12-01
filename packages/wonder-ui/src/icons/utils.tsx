import * as React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export function createSvgIcon(
  paths: React.ReactNode,
  titleAccess: string,
  viewBox: string = '0 0 16 16'
) {
  const Icon = React.memo(
    React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
      return (
        <SvgIcon
          {...props}
          ref={ref}
          viewBox={viewBox}
          titleAccess={titleAccess}
          children={paths}
        />
      );
    })
  );

  Icon.displayName = titleAccess;

  return Icon;
}
