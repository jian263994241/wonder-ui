import * as React from 'react';
import useEventCallback from './useEventCallback';

type Subscription<T> = (val: T) => void;

export class EventEmitter<T> {
  private subscriptions: Subscription<T>[] = [];

  emit = (val: T) => {
    this.subscriptions.forEach((subscription) => {
      subscription(val);
    });
  };

  useSubscription = (callback: Subscription<T>) => {
    const _callback = useEventCallback((val: T) => {
      if (callback) {
        callback(val);
      }
    });

    React.useEffect(() => {
      this.subscriptions.push(_callback);
      return () => {
        const index = this.subscriptions.indexOf(_callback);

        this.subscriptions.splice(index, 1);
      };
    }, []);
  };
}

export function useEventEmitter<T = void>() {
  const ref = React.useRef<EventEmitter<T>>();
  if (!ref.current) {
    ref.current = new EventEmitter();
  }
  return ref.current;
}

export default useEventEmitter;
