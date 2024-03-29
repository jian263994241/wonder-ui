import * as React from 'react';

export type TargetElement = Element | Document | Window;

export type BasicTarget<T extends TargetElement = TargetElement> =
  | (() => T | null | undefined)
  | T
  | null
  | undefined
  | React.MutableRefObject<T | null | undefined>;

export function getTargetElement<T extends TargetElement>(
  target?: BasicTarget<T>,
  defaultElement?: T
): T | undefined | null {
  if (!target) {
    return defaultElement;
  }

  let targetElement: any;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
