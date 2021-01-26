import { getWindow, getDocument } from 'ssr-window';

interface Supoort {
  touch: boolean;
  pointerEvents: boolean;
  passiveListener: boolean;
  intersectionObserver: boolean;
}

let support: Supoort;

function calcSupport() {
  const window = getWindow();
  const document = getDocument();

  return {
    touch: !!(
      'ontouchstart' in window ||
      ((window as any).DocumentTouch &&
        document instanceof (window as any).DocumentTouch)
    ),

    pointerEvents:
      !!(window as any).PointerEvent &&
      'maxTouchPoints' in window.navigator &&
      window.navigator.maxTouchPoints >= 0,

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', () => null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    })(),

    intersectionObserver: (function checkObserver() {
      return 'IntersectionObserver' in window;
    })()
  };
}

export default function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
