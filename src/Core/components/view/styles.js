import styled, { css } from 'styled-components';
import device from '../../utils/device';

import {
  pageNextToCurrent,
  pagePreviousToCurrent,
  pageCurrentToPrevious,
  pageCurrentToNext,
  pageTransitionDuration,
  iosPageElementFadeIn,
  iosPageElementFadeOut
} from '../styles/keyframes';

const pageFakeShadow = device.ios ? css `
  position: absolute;
  top: 0;
  width: 16px;
  bottom: 0;
  z-index: -1;
  content: '';
  opacity: 0;
  right: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
`: css `
  display; none;
`

const pageFakeOpacity = css `
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

export const WUI_view = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 10;
  top: 0;
  left: 0;
`

export const WUI_pages = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  z-index: 1;

  &.main{
    z-index: 2;
  }

  > .router-transition-stage {
    width: 100%;
    height: 100%;
    background: ${props=>props.theme.page.backgroundColor};
    position: fixed;
  }

  &.router-transition-forward{
    .slide-enter {
      z-index: 2;
    }

    .slide-enter.slide-enter-active {
      animation: ${pageNextToCurrent} ${pageTransitionDuration}ms forwards;
      &:before {
        ${pageFakeShadow}
        animation: ${iosPageElementFadeIn} ${pageTransitionDuration}ms forwards;
      }
    }

    .slide-enter-done {
      z-index: 2;
      will-change: transform;
    }

    .slide-exit {
      z-index: 1;
    }

    .slide-exit.slide-exit-active {
      animation: ${pageCurrentToPrevious} ${pageTransitionDuration}ms forwards;
      &:after {
        ${pageFakeOpacity}
        animation: ${iosPageElementFadeIn} ${pageTransitionDuration}ms forwards;
      }
    }

    .slide-exit-done{
      display: none;
    }

  }

  &.router-transition-backward{
    .slide-enter {
      z-index: 1;
    }
    .slide-enter.slide-enter-active {
      animation: ${pagePreviousToCurrent} ${pageTransitionDuration}ms forwards;
      &:after {
        ${pageFakeOpacity}
        animation: ${iosPageElementFadeOut} ${pageTransitionDuration}ms forwards;
      }
    }

    .slide-enter-done {
      z-index: 1;
      will-change: transform;
    }

    .slide-exit {
      z-index: 2;
    }

    .slide-exit.slide-exit-active {
      animation: ${pageCurrentToNext} ${pageTransitionDuration}ms forwards;
      &:before {
        ${pageFakeShadow}
        animation: ${iosPageElementFadeOut} ${pageTransitionDuration}ms forwards;
      }
    }

    .slide-exit-done{
      display: none;
    }
  }
`

