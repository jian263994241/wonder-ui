import * as React from 'react';

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

export function trigger(target: Element, type: string) {
  const inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}
