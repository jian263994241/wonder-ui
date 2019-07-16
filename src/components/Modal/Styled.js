import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const fade = css `
  &.fade-enter {
    visibility: visible;
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }
  &.fade-enter-done {
    visibility: visible;
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
    visibility: visible;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 400ms ease;
  }
  &.fade-exit-done {
    visibility: hidden;
    opacity: 0.01;
  }
`

const fadeScale = css `
  &.fade-enter {
    visibility: visible;
    opacity: 0;
    transform: translate3d(-50%, -50%,0) scale(1.185);
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translate3d(-50%, -50%,0) scale(1);
    transition: opacity, transform 400ms ease;
  }

  &.fade-enter-done {
    visibility: visible;
    opacity: 1;
    transform: translate3d(-50%, -50%,0) scale(1);
  }

  &.fade-exit {
    visibility: visible;
    opacity: 1;
    transform: translate3d(-50%, -50%,0) scale(1);
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transform: translate3d(-50%, -50%,0) scale(1.185);
    transition: opacity, transform 400ms ease;
  }
  &.fade-exit-done {
    visibility: hidden;
    transform: translate3d(-50%, -50%,0) scale(1.185);
  }
`

const slideUp = css `
  &.slideUp-enter {
    visibility: visible;
    transform: translate3d(0, 100%,0);
  }

  &.slideUp-enter.slideUp-enter-active {
    transform: translate3d(0,0,0);
    transition: transform 400ms ease;
  }
  &.slideUp-enter-done {
    visibility: visible;
    transform: translate3d(0,0,0);
  }

  &.slideUp-exit {
    visibility: visible;
    transform: translate3d(0,0,0);
  }

  &.slideUp-exit.slideUp-exit-active {
    transform: translate3d(0, 100%,0);
    transition: opacity, transform 400ms ease;
  }
  &.slideUp-exit-done{
    visibility: hidden;
    transform: translate3d(0, 100%,0);
  }
`

export const PopupModal = styled.div `
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  z-index: 12500;
  visibility: hidden;
  will-change: transform;
  transform: translate3d(0, 100%,0);
  ${slideUp}
`;

export const StyleModal = styled.div `
  box-sizing: border-box;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 13500;
  contain: content;
  visibility: hidden;
  will-change: transform,opacity;
  ${fadeScale}
`;

export const StyleOverlay = styled.div `
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  will-change: opacity;
  visibility: hidden;
  contain: strict;
  z-index: 10500;
  ${fade}
`;
