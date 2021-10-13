import { style } from './style';
import { getOffset } from './offset';
import { getOffsetParent } from './offsetParent';
import { scrollLeft } from './scrollLeft';
import { scrollTop } from './scrollTop';

const nodeName = (node: Element) =>
  node.nodeName && node.nodeName.toLowerCase();

/**
 * Returns the relative position of a given element.
 *
 * @param node the element
 * @param offsetParent the offset parent
 */
export function position(node: HTMLElement, offsetParent?: HTMLElement) {
  let parentOffset = { top: 0, left: 0 };
  let offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if (style(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    const parent: HTMLElement = offsetParent || getOffsetParent(node);
    offset = getOffset(node);

    if (nodeName(parent) !== 'html') parentOffset = getOffset(parent);
    const borderTop = String(style(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;

    const borderLeft = String(style(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }

  const marginTop = String(style(node, 'marginTop') || 0);
  const marginLeft = String(style(node, 'marginLeft') || 0);
  // Subtract parent offsets and node margins
  return {
    ...offset,
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  };
}
