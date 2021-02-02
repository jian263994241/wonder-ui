import * as React from 'react';
import EventsClass from './utils/EventsClass';

export function useEventEmitter() {
  const ref = React.useRef<InstanceType<typeof EventsClass>>();
  if (!ref.current) {
    ref.current = new EventsClass();
  }
  return ref.current;
}

export default useEventEmitter;
