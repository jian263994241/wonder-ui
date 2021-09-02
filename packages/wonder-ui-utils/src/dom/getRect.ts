/**
 * Rectangle interface.
 *
 * @public
 * {@docCategory IRectangle}
 */
export interface IRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
}

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
      const rect = (element as HTMLElement).getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      };
    }
  }

  return makeDOMRect(0, 0);
}
