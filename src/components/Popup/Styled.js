import React, {Component} from 'react';
import styled from 'styled-components';

export const StylePopup = styled.div `
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  background-color: ${props=>props.bgColor? props.bgColor :'#fff'};

  html.with-statusbar-overlay {

    @media all and (max-width:629px), (max-height:629px) {
        & {
            height: ~"-webkit-calc(100% - 20px)";
            height: ~"calc(100% - 20px)";
            top: 20px;
        }
        & + div {
            z-index: 9500;
        }
    }

`

export const StyledPopupBody = styled.div `
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`
