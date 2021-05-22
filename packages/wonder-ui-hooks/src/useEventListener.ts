import * as React from 'react';
import { on } from '@wonder-ui/utils';

/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
export function useEventListener<
  TElement extends Element,
  IEvent extends Event
>(
  element:
    | React.RefObject<TElement | undefined | null>
    | TElement
    | Window
    | Document
    | undefined
    | null,
  eventName: string,
  callback: (event: IEvent) => void,
  useCapture?: boolean
) {
  // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  React.useEffect(() => {
    const actualElement =
      element && 'current' in element ? element.current : element;
    if (!actualElement) {
      return;
    }

    const dispose = on(
      actualElement,
      eventName,
      (event: IEvent) => callbackRef.current(event),
      useCapture
    );
    return dispose;
  }, [element, eventName, useCapture]);
}
