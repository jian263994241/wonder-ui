const regExpInputs = /^(?:input|select|textarea|button)$/i;

/**
 * Checks if a given element is an input (input, select, textarea or button).
 *
 * @param node the element to check
 */
export function isInput(node: Element | null): boolean {
  return node ? regExpInputs.test(node.nodeName) : false;
}
