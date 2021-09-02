import * as React from 'react';
import { getScrollParent } from '@wonder-ui/utils';
import { useMount } from './useMount';

export function useScrollParent(el: React.RefObject<HTMLElement | undefined>) {
  const scrollParent = React.useRef<HTMLElement | Window>();

  useMount(() => {
    if (el.current) {
      scrollParent.current = getScrollParent(el.current);
    }
  });

  return scrollParent;
}
