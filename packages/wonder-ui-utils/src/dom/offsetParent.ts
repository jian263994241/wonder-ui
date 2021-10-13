import { style } from './style';
import { ownerDocument } from './ownerDocument';

const isHTMLElement = (e: Element | null): e is HTMLElement =>
  !!e && 'offsetParent' in e;

export function getOffsetParent(node: HTMLElement): HTMLElement {
  const doc = ownerDocument(node);
  let parent = node && node.offsetParent;

  while (
    isHTMLElement(parent) &&
    parent.nodeName !== 'HTML' &&
    style(parent, 'position') === 'static'
  ) {
    parent = parent.offsetParent;
  }

  return (parent || doc.documentElement) as HTMLElement;
}
