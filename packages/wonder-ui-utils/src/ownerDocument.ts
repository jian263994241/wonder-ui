import { getDocument } from 'ssr-window';

export function ownerDocument(node: Node | undefined | null): Document {
  return (node && node.ownerDocument) || getDocument();
}

export default ownerDocument;
