import * as React from 'react';

type TargetElement = Element | Document | Window;

export type BasicTarget<T extends TargetElement = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | React.MutableRefObject<T | null | undefined>;

export function getTargetElement<T extends TargetElement = TargetElement>(
  target?: BasicTarget<T>,
  defaultElement?: T
): T | undefined | null {
  if (!target) {
    return defaultElement;
  }

  let targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
