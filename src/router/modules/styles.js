import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;

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

const fadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes `
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const duration = {
  scale: 300,
  slide: 400,
  fade: 275,
  null: 0
};

const fakeShadow = css `
  position: absolute;
  top: 0;
  width: 16px;
  bottom: 0;
  z-index: -1;
  content: '';
  opacity: 0;
  right: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
`
const fakeOpacity = css `
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.1);
  width: 100%;
  bottom: 0;
  content: '';
  opacity: 0;
  z-index: 10000;
`

export const GlobalStyles = createGlobalStyle `
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
` 

export const RouterWrapper = styled.div `
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const RouteWrapper = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1;

  /** scale */
  &.scale-enter {
    display: block;
    opacity: 0;
    transform: scale(1.1);
  }

  &.scale-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity ${formatMs(duration.scale)}, transform ${formatMs(duration.scale)};
  }

  &.scale-enter-done {
    display: block;
  }

  &.scale-exit {
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.scale-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${formatMs(duration.scale)}, transform ${formatMs(duration.scale)};
  }

  &.scale-exit-done {
    display: none;
  }

  /** fade */
  &.fade-enter {
    display: block;
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity ${formatMs(duration.fade)};
  }

  &.fade-enter-done {
    display: block;
  }

  &.fade-exit {
    display: block;
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity ${formatMs(duration.fade)};
  }

  &.fade-exit-done {
    display: none;
  }

  /** slide-ios */
  &.forward.slide-enter {
    display: block;
    z-index: 3;
    transform: translate3d(100%,0,0);
  }

  &.forward.slide-enter-active {
    transform: translate3d(0, 0, 0);
    transition: transform ${easing.easeInOut} ${formatMs(duration.slide)};
    &:before {
      ${fakeShadow}
      animation: ${fadeIn} ${formatMs(duration.slide)} ${easing.easeInOut} forwards;
    }
  }

  &.forward.slide-enter-done {
    display: block;
  }

  &.forward.slide-exit {
    z-index: 1;
    display: block;
    transform: translate3d(0,0,0);
  }

  &.forward.slide-exit-active {
    transform: translate3d(-20%,0,0);
    transition: transform ${easing.easeInOut} ${formatMs(duration.slide)};
    &:after {
      ${fakeOpacity}
      animation: ${fadeIn} ${formatMs(duration.slide)}s ${easing.easeInOut} forwards;
    }
  }

  &.forward.slide-exit-done {
    display: none;
  }

  /** slide right */
  &.backward.slide-enter {
    display: block;
    z-index: 1;
    transform: translate3d(-20%,0,0);
  }

  &.backward.slide-enter-active {
    transform: translate3d(0,0,0);
    transition: transform ${easing.easeInOut} ${formatMs(duration.slide)};
    &:after {
      ${fakeOpacity}
      animation: ${fadeOut} ${formatMs(duration.slide)}s ${easing.easeInOut} forwards;
    }
  }

  &.backward.slide-enter-done {
    display: block;
  }

  &.backward.slide-exit {
    display: block;
    z-index: 3;
    transform: translate3d(0,0,0);
  }

  &.backward.slide-exit-active {
    transform: translate3d(100%,0,0);
    transition: transform ${easing.easeInOut} ${formatMs(duration.slide)};
    &:before {
      ${fakeShadow}
      animation: ${fadeOut} ${formatMs(duration.slide)}s ${easing.easeInOut} forwards;
    }
  }

  &.backward.slide-exit-done {
    display: none;
  }

`