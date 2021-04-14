import { getWindow } from 'ssr-window';
import ownerDocument from './ownerDocument';

function ownerWindow(node: Node | undefined | null) {
  const doc = ownerDocument(node);
  return doc.defaultView || getWindow();
}

export default ownerWindow;
