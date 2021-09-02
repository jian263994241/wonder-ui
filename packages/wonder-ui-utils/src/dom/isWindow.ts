import { isDocument } from './isDocument';

export function getWindow(node: Element | Document | Window): Window | null {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView;
  return null;
}

export function isWindow(node: Element | Document | Window): node is Window {
  if (getWindow(node)) return true;
  return false;
}
