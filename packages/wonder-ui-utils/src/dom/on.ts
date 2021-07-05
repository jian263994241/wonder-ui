import { isObject } from '../validate';

export function on<IEvent extends Event>(
  element: Element | Window | Document,
  eventName: string,
  callback: (ev: IEvent) => void,
  options?: boolean | AddEventListenerOptions
): () => void {
  //@ts-expect-error
  element.addEventListener(eventName, callback, options);

  return () =>
    element.removeEventListener(
      eventName,
      //@ts-expect-error
      callback,
      isObject(options) ? options.capture : options
    );
}
