export function ownerDocument(node: Node | undefined): Document {
  return (node && node.ownerDocument) || document;
}

export default ownerDocument;
