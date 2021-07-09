import * as React from 'react';
import { getScrollParent, getWindow } from '@wonder-ui/utils';
import { useMount } from './useMount';

type ScrollElement = HTMLElement | Window;

export function useScrollParent(
  el: React.RefObject<Element | undefined>,
  root?: ScrollElement
) {
  const scrollParent = React.useRef<Element | Window>();

  useMount(() => {
    if (el.current) {
      const _root = root ?? getWindow(root);
      scrollParent.current = getScrollParent(el.current, _root);
    }
  });

  return scrollParent;
}
