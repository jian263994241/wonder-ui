import * as React from 'react';
import EventEmitter from 'eventemitter3';

export function useEventEmitter<
  EventTypes extends EventEmitter.ValidEventTypes = symbol,
  Context extends any = any
>(context: Context) {
  const ref = React.useRef<EventEmitter<EventTypes, Context> | null>(null);
  if (!ref.current) {
    ref.current = new EventEmitter<EventTypes, Context>();
  }
  const EE = ref.current;

  const useSubscription = <T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    options: {
      once?: boolean;
    } = {}
  ) => {
    const callbackRef = React.useRef(fn);

    React.useEffect(() => {
      callbackRef.current = fn;
    });

    React.useEffect(() => {
      const _handler: any = (...args: any) => {
        if (callbackRef.current) {
          callbackRef.current(...args);
        }
      };

      if (options.once) {
        EE.once(event, _handler, context);
      } else {
        EE.on(event, _handler, context);
      }

      return () => {
        EE.off(event, _handler);
      };
    }, [event]);
  };

  return { ...EE, useSubscription };
}

export default useEventEmitter;
