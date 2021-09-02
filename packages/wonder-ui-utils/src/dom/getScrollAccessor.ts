import { isWindow } from './isWindow';

export function getScrollAccessor(offset: 'pageXOffset' | 'pageYOffset') {
  const prop: 'scrollLeft' | 'scrollTop' =
    offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node: Element | Window): number;
  function scrollAccessor(node: Element | Window, val: number): undefined;
  function scrollAccessor(node: Element | Window, val?: number) {
    const win = isWindow(node) ? node : false;

    if (val === undefined) {
      return win ? win[offset] : (node as Element)[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      (node as Element)[prop] = val;
    }
  }

  return scrollAccessor;
}
