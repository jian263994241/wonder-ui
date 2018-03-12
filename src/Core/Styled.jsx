import React, {Component} from 'react';
import styled, {injectGlobal, css} from 'styled-components';
import device from './device';

injectGlobal `
  html, body, .root{
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 14px;
    line-height: 1.4;
    width: 100%;
    background: #fff;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media all and (width:1024px) and (height:691px) and (orientation:landscape) {
    html, body, .root {
        height: 671px;
    }
  }
  @media all and (width:1024px) and (height:692px) and (orientation:landscape) {
      html, body, .root  {
          height: 672px;
      }
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout:none;
    -webkit-text-size-adjust:100%;
  }

  a, input, textarea, select {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: #5399ED;
  }

  p {
    margin: 1em 0;
  }

  img{
    vertical-align: bottom;
    max-width: 100%;
  }

  html.with-statusbar-overlay .root {
    padding-top: 20px;
    box-sizing: border-box;
    .statusbar-overlay {
        display: block;
    }
    .panel {
        padding-top: 20px;
    }
  }
  .statusbar-overlay {
      background: #fff;
      z-index: 10000;
      position: fixed;
      left: 0;
      top: 0;
      height: 20px;
      width: 100%;
      display: none;
  }

  .router-transition-forward{
    .slide-enter {
      transform: translate3d(100%, 0, 2px);
    }

    .slide-enter.slide-enter-active {
      z-index: 2;
      transform: translate3d(0, 0, 2px);
      transition: transform 400ms ease;
    }

    .slide-exit {
      transform: translate3d(0, 0, 1px);
    }

    .slide-exit.slide-exit-active {
      z-index: 1;
      transform: translate3d(-20%, 0, 1px);
      transition: transform 400ms ease;
    }
  }

  .router-transition-backward{
    .slide-enter {
      transform: translate3d(-20%, 0, 2px);
    }
    .slide-enter.slide-enter-active {
      z-index: 1;
      transform: translate3d(0, 0, 1px);
      transition: transform 400ms ease;
    }

    .slide-exit {
      transform: translate3d(0, 0, 2px);
    }

    .slide-exit.slide-exit-active {
      z-index: 2;
      transform: translate3d(100%, 0, 2px);
      transition: transform 400ms ease;
    }
  }

`

export const StyledViews = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
`

export const StyledView = StyledViews.extend `
  overflow: hidden;
  box-sizing: border-box;
`


const childrenIndex = (reverse)=> {
  const max = 3, ids = []
  for (let i=1; i<=max; i++){ ids.push(i); }
  reverse && ids.reverse();
  return ids.map((item, i)=>`
    &:nth-child(${i + 1}) {
      z-index: ${item};
    }
  `)
}

const rightToCenter = css `
  ${childrenIndex()}
`

const leftToCenter = css `
  ${childrenIndex(true)}
`


export const StylePages = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  >div{
    width: 100%;
    height: 100%;
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
    ${'' /* ${props=>props.reverse? leftToCenter : rightToCenter} */}
  }
`

export const StylePage = styled.div `
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  contain: layout size style;
`

export const StylePageContent = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  contain: layout size style;
  will-change: scroll-position;
  html.ios & {
    &::before{
      content:'';
      width: 1px;
      float: left;
      height: ~'calc(100% + 1px)';
      margin-left: -1px;
    }
    &::after{
      content:'';
      width: 100%;
      clear: both;
    }
  }
`
