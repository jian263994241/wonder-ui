import * as React from 'react';

function stopPropagation(event: Event | React.BaseSyntheticEvent) {
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
