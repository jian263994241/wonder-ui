import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';

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
`

export const StyleViews = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5000;
`

export const StyleView = StyleViews.extend `
  overflow: hidden;
  box-sizing: border-box;
`

export const StylePage = styled.div `
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
`

export const StylePageContent = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
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
