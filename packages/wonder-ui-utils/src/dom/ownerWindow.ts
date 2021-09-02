import { ownerDocument } from './ownerDocument';

/**
 * Returns the owner window of a given element.
 *
 * @param node the element
 */
export function ownerWindow(node?: Element | null): Window {
  const doc = ownerDocument(node);
  return (doc && doc.defaultView) || window;
}
