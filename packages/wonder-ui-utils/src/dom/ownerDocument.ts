/**
 * Returns the owner document of a given element.
 *
 * @param node the element
 */
export function ownerDocument(node?: Element | null) {
  return (node && node.ownerDocument) || document;
}
