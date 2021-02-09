import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@wonder-ui/core';

type Options = {
  title: string;
  viewBox?: string;
};

export default function createSvgIcon(
  paths: React.ReactChild,
  options: Options
) {
  const Icon = React.forwardRef<
    typeof SvgIcon,
    Omit<SvgIconProps, 'viewBox' | 'titleAccess' | 'component'>
  >((props, ref: any) => {
    return (
      <SvgIcon
        {...props}
        ref={ref}
        viewBox={options.viewBox || `0 0 16 16`}
        titleAccess={options.title}
        children={paths}
      />
    );
  });

  Icon.displayName = options.title;

  return Icon;
}
