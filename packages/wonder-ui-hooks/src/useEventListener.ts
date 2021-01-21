import * as React from 'react';
import { BasicTarget, getTargetElement } from './utils/dom';
import useEventCallback from './useEventCallback';

type Target = BasicTarget<HTMLElement | Element | Window | Document>;

interface EventListenerOptions extends AddEventListenerOptions {
  target?: Target;
}

export function useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: Function,
  options: EventListenerOptions
) {
  const _handler = useEventCallback((e: Event) => {
    if (handler) {
      handler(e);
    }
  });

  React.useEffect(() => {
    const targetElement = getTargetElement(options.target, window)!;
    if (!targetElement.addEventListener) {
      return;
    }

    const eventListener = (event: Event) => {
      return _handler(event);
    };

    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive
    });

    return () => {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture
      });
    };
  }, [
    eventName,
    options.target,
    options.capture,
    options.once,
    options.passive
  ]);
}

export default useEventListener;
