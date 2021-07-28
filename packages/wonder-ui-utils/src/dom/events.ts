import * as React from 'react';
import { getDocument } from './getDocument';

export function stopPropagation(event: Event | React.BaseSyntheticEvent) {
  event.stopPropagation();
}

export function preventDefault(
  event: Event | React.BaseSyntheticEvent,
  isStopPropagation?: boolean
) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function createEvent(): Event {
  let event;
  if (typeof Event === 'function') {
    // Chrome, Opera, Firefox
    event = new Event('Event');
  } else {
    // IE
    event = getDocument().createEvent('HTMLEvents');
  }
  return event;
}

export function trigger(target: Element, type: string) {
  const event = createEvent();

  event.initEvent(type, true, true);

  target.dispatchEvent(event);
}

/** Raises a click event. */
export function raiseClick(target: Element): void {
  trigger(target, 'click');
}
