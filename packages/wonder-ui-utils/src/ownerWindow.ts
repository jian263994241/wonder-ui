import ownerDocument from './ownerDocument';

function ownerWindow(node: Node | undefined | null) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

export default ownerWindow;
