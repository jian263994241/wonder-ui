/**
 * Double RAF is useful for ensuring that animations start before expensive rendering is done.
 * It helps provide smoother user experience by making animations feel reactive.
 * Normal rendering would block the animation from starting.
 * With double RAF as shown here the rendering function safely runs in the main thread after the animation has already started.
 */

type Callback = () => void;

function draf(cb: Callback) {
  return requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

function _raf(cb: Callback) {
  return requestAnimationFrame(cb);
}

function now(cb: Callback) {
  cb();
  return 0;
}

export const raf =
  typeof window.requestAnimationFrame == 'undefined' ? now : _raf;

export const doubleRaf =
  typeof window.requestAnimationFrame == 'undefined' ? now : draf;
