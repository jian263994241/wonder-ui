import { keyframes } from 'styled-components';
import device from '../../utils/device';

export const iosPageNextToCurrent = keyframes `
  from {
    transform: translate3d(100%,0,0);
  }
  to {
    transform: translate3d(0%,0,0);
  }
`

export const iosPagePreviousToCurrent = keyframes `
  from {
    transform: translate3d(-20%,0,0);
  }
  to {
    transform: translate3d(0%,0,0);
  }
`

export const iosPageCurrentToPrevious = keyframes `
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(-20%,0,0);
  }
`

export const iosPageCurrentToNext = keyframes `
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(100%,0,0);
  }
`

export const mdPageNextToCurrent = keyframes `
  from {
    transform: translate3d(0, 56px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
`

export const mdPageCurrentToNext = keyframes `
  from {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 56px, 0);
    opacity: 0;
  }
`

export const pageNextToCurrent = iosPageNextToCurrent;

export const pagePreviousToCurrent = iosPagePreviousToCurrent;

export const pageCurrentToPrevious = iosPageCurrentToPrevious;

export const pageCurrentToNext = iosPageCurrentToNext;

export const pageTransitionDuration = device.ios ? 400: 380;

export const iosPageElementFadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const iosPageElementFadeOut = keyframes `
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`