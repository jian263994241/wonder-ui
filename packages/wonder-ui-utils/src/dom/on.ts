export function on<K extends keyof DocumentEventMap>(
  node: Document,
  eventName: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): () => void;

export function on<K extends keyof HTMLElementEventMap>(
  node: HTMLElement,
  eventName: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): () => void;

export function on<K extends keyof WindowEventMap>(
  node: Window,
  eventName: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): () => void;

export function on(
  node: any,
  eventName: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): () => void;

export function on(
  node: any,
  eventName: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  node.addEventListener(eventName, listener, options);

  return () => node.removeEventListener(eventName, listener, options);
}
