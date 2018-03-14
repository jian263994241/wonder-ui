import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const fade = css `
  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 400ms ease;
  }
`

const fadeScale = css `
  &.fade-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%,0) scale(1.185);
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transform: translate3d(-50%, -50%,0) scale(1);
    transition: opacity, transform 400ms ease;
  }

  &.fade-exit {
    opacity: 1;
    transform: translate3d(-50%, -50%,0) scale(1);
  }

  &.fade-exit.fade-exit-active {
    opacity: 0;
    transform: translate3d(-50%, -50%,0) scale(1.185);
    transition: opacity, transform 400ms ease;
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

  &.slideUp-exit {
    visibility: visible;
    transform: translate3d(0,0,0);
  }

  &.slideUp-exit.slideUp-exit-active {
    transform: translate3d(0, 100%,0);
    transition: opacity, transform 400ms ease;
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
  display: none;
  visibility: hidden;
  will-change: transform;
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
  display: none;
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
  display: none;
  visibility: hidden;
  contain: strict;
  z-index: 10500;
  ${fade}
`;
