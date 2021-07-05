import { IRectangle } from '../IRectangle';

function makeDOMRect(width: number, height: number) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  } as DOMRect;
}

/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
export function getRect(element: HTMLElement | Window | null): IRectangle {
  if (element) {
    if (element === window) {
      return makeDOMRect(window.innerWidth, window.innerHeight);
    } else if (
      (element as { getBoundingClientRect?: unknown }).getBoundingClientRect
    ) {
      return (element as HTMLElement).getBoundingClientRect();
    }
  }

  return makeDOMRect(0, 0);
}
