import { getDocument as _getDocument } from 'ssr-window';

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
export function getDocument(rootElement?: Element | null): Document {
  const el = rootElement;
  return el && el.ownerDocument ? el.ownerDocument : _getDocument();
}
