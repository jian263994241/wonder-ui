import { height } from './height';
import { isDocument } from './isDocument';
import { ownerWindow } from './ownerWindow';
import { style } from './style';

const overflowScrollReg = /scroll|auto/i;

// function isElement(node: Element) {
//   const ELEMENT_NODE_TYPE = 1;
//   return (
//     node.tagName !== 'HTML' &&
//     node.tagName !== 'BODY' &&
//     node.nodeType === ELEMENT_NODE_TYPE
//   );
// }

export function getScrollParent(element: HTMLElement, firstPossible?: boolean) {
  const position = style(element, 'position');
  const excludeStatic = position === 'absolute';

  //@ts-expect-error
  while ((element = element.parentNode) && !isDocument(element)) {
    const isStatic = excludeStatic && style(element, 'position') === 'static';
    const _style =
      (style(element, 'overflow') || '') +
      (style(element, 'overflow-y') || '') +
      style(element, 'overflow-x');

    if (isStatic) continue;

    if (
      overflowScrollReg.test(_style) &&
      (firstPossible || height(element) < element!.scrollHeight)
    ) {
      return element;
    }
  }

  return ownerWindow(element);

  // while (node && node !== root && isElement(node)) {
  //   const { overflowY } = window.getComputedStyle(node);
  //   if (overflowScrollReg.test(overflowY)) {
  //     return node;
  //   }
  //   node = node.parentNode as HTMLElement;
  // }

  // return root;
}
