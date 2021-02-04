import * as React from 'react';
import { SvgIcon } from '@wonder-ui/core';

type C = typeof SvgIcon;

export default function createSvgIcon(paths: React.ReactChild, title: string) {
  const Icon = React.forwardRef<
    C,
    Omit<React.ComponentProps<C>, 'children' | 'titleAccess'>
  >((props, ref) => {
    return (
      <SvgIcon {...props} ref={ref} children={paths} titleAccess={title} />
    );
  });

  Icon.displayName = title;

  return Icon;
}
