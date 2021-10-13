import { on } from './on';
import { style } from './style';
import { triggerEvent } from './triggerEvent';

function parseDuration(node: HTMLElement) {
  const str = style(node, 'transitionDuration') || '';

  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(
  element: HTMLElement,
  duration: number,
  padding = 5
) {
  let called = false;

  const handle = setTimeout(() => {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);

  const remove = on(
    element,
    'transitionend',
    () => {
      called = true;
    },
    { once: true }
  );

  return () => {
    clearTimeout(handle);
    remove();
  };
}

type Listener = (this: HTMLElement, ev: TransitionEvent) => any;

export function transitionEnd(
  element: HTMLElement,
  handler: Listener,
  duration?: number | null,
  padding?: number
) {
  if (duration == null) duration = parseDuration(element) || 0;
  const removeEmulate = emulateTransitionEnd(element, duration, padding);

  const remove = on(element, 'transitionend', handler);

  return () => {
    removeEmulate();
    remove();
  };
}
