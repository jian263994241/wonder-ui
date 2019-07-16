import styled from 'styled-components';
import device from '../../utils/device';

export const WUI_view = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 100;
  top: 0;
  left: 0;
`

export const WUI_pages = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  > div {
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    &::after{
      position: absolute;
      right: 100%;
      top: 0;
      width: 16px;
      height: 100%;
      background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
      background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
      z-index: -1;
      content: '';
      display: ${props=>device.ios ? 'block': 'none'};
    }
  }
  &.router-transition-forward{
    .slide-enter {
      transform: translate3d(100%, 0, 0);
    }

    .slide-enter.slide-enter-active {
      z-index: 10;
      transform: translate3d(0, 0, 0);
      transition: transform 400ms ease;
    }

    .slide-enter-done {
      z-index: 10;
    }

    .slide-exit {
      transform: translate3d(0, 0, 0);
    }

    .slide-exit.slide-exit-active {
      z-index: 1;
      transform: translate3d(-20%, 0, 0);
      transition: transform 400ms ease;
    }

    .slide-exit-done {
      visibility: hidden;
    }
  }

  &.router-transition-backward{
    .slide-enter {
      transform: translate3d(-20%, 0, 0);
    }
    .slide-enter.slide-enter-active {
      z-index: 1;
      transform: translate3d(0, 0, 0);
      transition: transform 400ms ease;
    }

    .slide-enter-done {
      z-index: 10;
    }

    .slide-exit {
      transform: translate3d(0, 0, 0);
    }

    .slide-exit.slide-exit-active {
      z-index: 10;
      transform: translate3d(100%, 0, 10px);
      transition: transform 400ms ease;
    }
    .slide-exit-done {
      visibility: hidden;
    }
  }
`