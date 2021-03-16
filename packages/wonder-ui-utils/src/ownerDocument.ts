export function ownerDocument(node: Node | undefined | null): Document {
  return (node && node.ownerDocument) || document;
}

export default ownerDocument;
