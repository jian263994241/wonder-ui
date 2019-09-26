import styled from 'styled-components';

const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;

export const duration = {
  scale: 300,

}

export const PageWrapper = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  display: none;
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

  /** slide-ios */


`