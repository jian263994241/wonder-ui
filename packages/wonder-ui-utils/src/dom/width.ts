import { getWindow } from './isWindow';
import { getOffset } from './offset';

/**
 * Returns the width of a given element.
 *
 * @param node the element
 * @param client whether to use `clientWidth` if possible
 */
export default function getWidth(node: HTMLElement, client?: boolean) {
  const win = getWindow(node);
  return win
    ? win.innerWidth
    : client
    ? node.clientWidth
    : getOffset(node).width;
}
