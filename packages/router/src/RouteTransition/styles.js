const formatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;

const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const duration = {
  scale: 300,
  slide: 375,
  fade: 275,
  null: 0,
};

const fakeShadow = {
  position: 'absolute',
  top: 0,
  width: 16,
  bottom: 0,
  zIndex: -1,
  content: '""',
  opacity: 0,
  right: '100%',
  background:
    'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%)',
};
const fakeOpacity = {
  position: 'absolute',
  left: 0,
  top: 0,
  background: 'rgba(0,0,0,0.4)',
  width: '100%',
  bottom: 0,
  content: '""',
  opacity: 0,
  zIndex: 10000,
};

export const styles = {
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes fadeOut': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  root: {
    background: '#ddd',
    height: '100%',
    left: 0,
    overflow: 'hidden auto',
    position: 'absolute',
    top: 0,
    touchAction: 'pan-x pan-y',
    transform: 'translate3d(0,0,0)',
    width: '100%',
    willChange: 'auto',
    zIndex: 1,
    //fade
    '&.fade-enter': {
      display: 'block',
      opacity: 0,
    },
    '&.fade-enter-active': {
      opacity: 1,
      transition: `opacity ${formatMs(duration.fade)}`,
    },
    '&.fade-enter-done': {
      display: 'block',
    },
    '&.fade-exit': {
      display: 'block',
      opacity: 1,
    },
    '&.fade-exit-active': {
      opacity: 0,
      transition: `opacity ${formatMs(duration.fade)}`,
    },
    '&.fade-exit-done': {
      display: 'none',
    },
    //scale
    '&.scale-enter': {
      display: 'block',
      opacity: 0,
      transform: `scale(1.1)`,
    },
    '&.scale-enter-active': {
      opacity: 1,
      transform: 'scale(1)',
      transition: `opacity ${formatMs(duration.scale)}, transform ${formatMs(
        duration.scale,
      )}`,
    },
    '&.scale-enter-done': {
      display: 'block',
    },
    '&.scale-exit': {
      display: 'block',
      opacity: 1,
      transform: 'scale(1)',
    },
    '&.scale-exit-active': {
      opacity: 0,
      transform: 'scale(0.9)',
      transition: `opacity ${formatMs(duration.scale)}, transform ${formatMs(
        duration.scale,
      )}`,
    },
    '&.scale-exit-done': {
      display: 'none',
    },
    //slide
    '&.forward.slide-enter': {
      display: 'block',
      zIndex: 3,
      transform: 'translate3d(100%,0,0)',
    },
    '&.forward.slide-enter-active': {
      transform: 'translate3d(0, 0, 0)',
      transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
      '&:before': {
        ...fakeShadow,
        animation: `$fadeIn ${formatMs(duration.slide)} ${
          easing.easeInOut
        } forwards`,
      },
    },
    '&.forward.slide-enter-done': {
      zIndex: 3,
      display: 'block',
    },
    '&.forward.slide-exit': {
      zIndex: 1,
      display: 'block',
      transform: 'translate3d(0,0,0)',
    },
    '&.forward.slide-exit-active': {
      transform: 'translate3d(-20%,0,0)',
      transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
      '&:after': {
        ...fakeOpacity,
        animation: `$fadeIn ${formatMs(duration.slide)} ${
          easing.easeInOut
        } forwards`,
      },
    },
    '&.forward.slide-exit-done': {
      display: 'none',
    },
    /** slide right */
    '&.backward.slide-enter': {
      display: 'block',
      zIndex: 1,
      transform: 'translate3d(-20%,0,0)',
    },
    '&.backward.slide-enter-active': {
      transform: 'translate3d(0,0,0)',
      transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
      '&:after': {
        ...fakeOpacity,
        animation: `$fadeOut ${formatMs(duration.slide)} ${
          easing.easeInOut
        } forwards`,
      },
    },
    '&.backward.slide-enter-done': {
      display: 'block',
    },
    '&.backward.slide-exit': {
      display: 'block',
      zIndex: 3,
      transform: 'translate3d(0,0,0)',
    },
    '&.backward.slide-exit-active': {
      transform: 'translate3d(100%,0,0)',
      transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
      '&:before': {
        ...fakeShadow,
        animation: `$fadeOut ${formatMs(duration.slide)} ${
          easing.easeInOut
        } forwards`,
      },
    },
    '&.backward.slide-exit-done': {
      display: 'none',
    },
  },
};
