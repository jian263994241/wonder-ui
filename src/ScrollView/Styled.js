import React, {Component} from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';
import {toolbarSize} from '../styles/vars';
import {StylePreloader} from '../Preloader/Styled';
import Arrow from '../SvgIcon/Arrow';

export const GlobalStyle = createGlobalStyle `
  .zscroller-scrollbar-y {
    position: absolute;
    z-index: 9999;
    width: 7px;
    bottom: 2px;
    top: 2px;
    right: 1px;
    overflow: hidden;
    -webkit-transform: translateZ(0px);
            transform: translateZ(0px);
    transition-property: opacity;
    transition-duration: 250ms;
    opacity: 0;
  }
  .zscroller-indicator-y {
    box-sizing: border-box;
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.901961);
    border-radius: 3px;
    width: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.498039);
  }
  .zscroller-scrollbar-x {
    position: absolute;
    z-index: 9999;
    height: 7px;
    left: 2px;
    right: 2px;
    bottom: 1px;
    overflow: hidden;
    -webkit-transform: translateZ(0px);
            transform: translateZ(0px);
    transition-property: opacity;
    transition-duration: 250ms;
    opacity: 0;
  }
  .zscroller-indicator-x {
    box-sizing: border-box;
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.901961);
    border-radius: 3px;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.498039);
  }
`

export const Container = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  >div{
    width: 100%;
    overflow: auto;
  }
`
export const PullToRefreshArrow = styled.div.attrs({
  children: <Arrow/>
}) `
  width: 13px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -6px;
  margin-top: -10px;
  z-index: 10;
  transform: rotate(0deg) translate3d(0,0,0);
  transition-duration: 300ms;
`

export const PullToRefreshLayer = styled.div `
  position: relative;
  margin-top: ${toolbarSize};
  left:0;
  top:0;
  width:100%;
  height:${toolbarSize};
  ${StylePreloader} {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    visibility: hidden;
  }
`

const refreshing = css `
  ${'' /* transform:  translate3d(0, ${toolbarSize},0); */}
  ${PullToRefreshArrow} {
    visibility: hidden;
    transition-duration: 0ms;
  }
  ${StylePreloader} {
    visibility: visible;
  }
`

const pullUp = css `
  overflow: visible;
  ${PullToRefreshArrow} {
    transform: rotate(180deg) translate3d(0,0,0);
  }
`

export const PullToRefreshContent = styled(Container) `
  margin-top: -${toolbarSize};
  height: calc(100% + ${toolbarSize});
  ${PullToRefreshLayer} {
    margin-top: 0;
  }
  ${props=>{ if(props.stage === 'refreshing') return refreshing; if(props.stage === 'pull-up') return pullUp; }}
`
