import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@wonder-ui/core';

export default function createSvgIcon(
  paths: React.ReactNode,
  titleAccess: string,
  viewBox: string = '0 0 16 16'
) {
  const Icon = React.memo(
    React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
      const [mounted, setMounted] = React.useState(false);

      React.useEffect(() => {
        setTimeout(() => {
          setMounted(true);
        }, 0);
      }, []);

      return (
        <SvgIcon
          {...props}
          ref={ref}
          viewBox={viewBox}
          titleAccess={titleAccess}
          children={mounted ? paths : null}
        />
      );
    })
  );

  Icon.displayName = titleAccess;

  return Icon;
}
