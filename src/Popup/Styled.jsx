import React, {Component} from 'react';
import styled from 'styled-components';
import {PopupModal} from '../Modal/Styled';


export const StylePopup = styled(PopupModal) `
  width: 100%;
  height: 100%;
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
