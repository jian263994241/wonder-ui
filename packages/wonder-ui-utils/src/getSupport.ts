import { getWindow, getDocument } from 'ssr-window';

interface Supoort {
  touch: boolean;
  pointerEvents: boolean;
  passiveListener: boolean;
  intersectionObserver: boolean;
}

let support: Supoort;

declare global {
  interface Window {
    DocumentTouch: any;
    PointerEvent: any;
    cordova: any;
    phonegap: any;
    Capacitor: any;
    nw: any;
  }
}

function calcSupport() {
  const window = getWindow();
  const document = getDocument();

  return {
    touch: !!(
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    ),

    pointerEvents:
      !!window.PointerEvent &&
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

export function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
