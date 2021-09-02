import * as React from 'react';
import { on } from '@wonder-ui/utils';
import { useEventCallback } from './useEventCallback';

/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
export function useEventListener<K extends keyof DocumentEventMap>(
  node: Document | React.Ref<Document | undefined | null>,
  eventName: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<K extends keyof HTMLElementEventMap>(
  node: HTMLElement | React.Ref<HTMLElement | undefined | null>,
  eventName: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<K extends keyof WindowEventMap>(
  node: Window | React.Ref<Window | undefined | null>,
  eventName: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener(
  node: any,
  eventName: string,
  listener: EventListenerOrEventListenerObject,
  useCapture?: boolean | AddEventListenerOptions
): void;

export function useEventListener(
  node: any,
  eventName: string,
  listener: EventListenerOrEventListenerObject,
  useCapture?: boolean | AddEventListenerOptions
) {
  // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders

  const _callback = useEventCallback(listener as any);

  React.useEffect(() => {
    const actualElement = node && 'current' in node ? node.current : node;
    if (!actualElement) {
      return;
    }

    const dispose = on(actualElement, eventName, _callback, useCapture);
    return dispose;
  }, [node, eventName, useCapture]);
}
