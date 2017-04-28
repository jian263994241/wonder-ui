const support = {
  touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
  passiveListener: (function() {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener('testPassiveListener', null, opts);
    } catch (e) {console.error(e);}
    return supportsPassive;
  })()
};

export default support;
