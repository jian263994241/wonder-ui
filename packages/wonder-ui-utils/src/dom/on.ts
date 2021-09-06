import { canUseDOM } from './canUseDOM';

let optionsSupported = false;
let onceSupported = false;

try {
  const options = {
    get passive() {
      return (optionsSupported = true);
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return (onceSupported = optionsSupported = true);
    }
  };
  if (canUseDOM) {
    window.addEventListener('test', options as any, options);
    window.removeEventListener('test', options as any, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
export function addEventListener(
  node: any,
  eventName: any,
  handler: any,
  options?: boolean | AddEventListenerOptions
) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    const { once, capture } = options;
    let wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler =
        handler.__once ||
        function onceHandler(this: any, event: Event) {
          this.removeEventListener(eventName, onceHandler, capture);
          handler.call(this, event);
        };
      handler.__once = wrappedHandler;
    }

    node.addEventListener(
      eventName,
      wrappedHandler,
      optionsSupported ? options : capture
    );
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */

export function removeEventListener(
  node: any,
  eventName: any,
  handler: any,
  options?: boolean | EventListenerOptions
) {
  const capture =
    options && typeof options !== 'boolean' ? options.capture : options;

  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

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
  addEventListener(node, eventName, listener, options);

  return () => removeEventListener(node, eventName, listener, options);
}
