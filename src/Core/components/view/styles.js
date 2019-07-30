import styled, { css } from 'styled-components';
import device from '../../utils/device';
import AnimatedSwitch from '../transition/AnimatedSwitch';
import { easing, duration } from '../styles/transitions';

import {
  pageNextToCurrent,
  pagePreviousToCurrent,
  pageCurrentToPrevious,
  pageCurrentToNext,
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

export const WUI_pages = styled(AnimatedSwitch) `
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  z-index: 1;

  > .router-transition-stage {
    width: 100%;
    height: 100%;
    background: ${({theme})=>theme.palette.background.default};
    position: absolute;
  }

  &.router-transition-forward{
    .slide-enter {
      z-index: 2;
    }

    .slide-enter.slide-enter-active {
      animation: ${pageNextToCurrent} ${duration.complex}ms ${easing.easeInOut} forwards;
      &:before {
        ${pageFakeShadow}
        animation: ${iosPageElementFadeIn} ${duration.complex}ms ${easing.easeInOut} forwards;
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
      animation: ${pageCurrentToPrevious} ${duration.complex}ms ${easing.easeInOut} forwards;
      &:after {
        ${pageFakeOpacity}
        animation: ${iosPageElementFadeIn} ${duration.complex}ms ${easing.easeInOut} forwards;
      }
    }

    .slide-exit-done{
      z-index: 1;
      ${'' /* display: none; */}
    }

  }

  &.router-transition-backward{
    .slide-enter {
      z-index: 1;
    }
    .slide-enter.slide-enter-active {
      animation: ${pagePreviousToCurrent} ${duration.complex}ms ${easing.easeInOut} forwards;
      &:after {
        ${pageFakeOpacity}
        animation: ${iosPageElementFadeOut} ${duration.complex}ms ${easing.easeInOut} forwards;
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
      animation: ${pageCurrentToNext} ${duration.standard}ms ${easing.easeInOut} forwards;
      &:before {
        ${pageFakeShadow}
        animation: ${iosPageElementFadeOut} ${duration.standard}ms ${easing.easeInOut} forwards;
      }
    }

    .slide-exit-done{
      z-index: 2;
      ${'' /* display: none; */}
    }
  }
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

  .previous-enter {
    z-index: 1;
  }
  .previous-enter-active {
    animation: ${pagePreviousToCurrent} ${duration.standard}ms forwards;
    &:after {
      ${pageFakeOpacity}
      animation: ${iosPageElementFadeOut} ${duration.standard}ms forwards;
    }
  }

  .previous-enter-done {
    z-index: 2;
    will-change: transform;
  }

  .previous-exit {
    z-index: 1;
  }

  .previous-exit-active {
    animation: ${pageCurrentToPrevious} ${duration.standard}ms forwards;
    &:after {
      ${pageFakeOpacity}
      animation: ${iosPageElementFadeIn} ${duration.standard}ms forwards;
    }
  }

  .previous-exit-done{
    display: none;
  }

  .next-enter {
    z-index: 3!important;
  }
  .next-enter-active{
    z-index: 3!important;
  }

  .next-enter-done{
    ${'' /* z-index: 2; */}
  }

  .next-exit {
    z-index: 3!important;
  }
  .next-exit-active{
    z-index: 3!important;
  }

  .next-exit-done{
    ${'' /* z-index: 1; */}
  }

  ${WUI_pages} {
    
  }

  ${WUI_pages}.current {
    z-index: 2;
  }

  ${WUI_pages}.previous {
    z-index: 1;
  }

  ${WUI_pages}.next {
    z-index: 1;
  }

`