import React, {Component} from 'react';
import styled from 'styled-components';
import Modal from '../Modal';


export const StylePopup = styled(Modal) `
  width: 100%;
  height: 100%;
  background-color: #fff;

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
