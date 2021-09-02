import { getWindow } from './isWindow';
import { getOffset } from './offset';

/**
 * Returns the height of a given element.
 *
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */
export function height(node: HTMLElement, client?: boolean) {
  const win = getWindow(node);
  return win
    ? win.innerHeight
    : client
    ? node.clientHeight
    : getOffset(node).height;
}
