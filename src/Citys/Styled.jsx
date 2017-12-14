import React, {Component} from 'react';
import styled from 'styled-components';
import ScrollView from '../ScrollView';
import SwipeableViews from 'react-swipeable-views';
import svg from '../styles/svg';
import tick from '../styles/tick';

export const StyleCitys = styled(SwipeableViews).attrs({
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  slideStyle:{
    width: '100%',
    height: '100%'
  },
  disabled: true
}) `
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;


export const Panel = styled(ScrollView) `

  ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333333;

    >li {
      width: 100%;
      height: 44px;
      list-style: none;
      box-sizing: border-box;
      padding: 10px 20px;
      font-size: 15px;
      position: relative;
      &.active {
        color: #F54D4F;
        &::after {
          ${ tick }
          content: '';
          width: 18px;
          height: 18px;
          background-size: cover;
          position: absolute;
          right: 12px;
          top:12px;
        }
      }
    }
  }

`;


export const Subbar = styled.div `
  width: 100%;
  height: 44px;
  background-color: #F8F8F8;
  box-sizing: border-box;
  padding: 0 8px;
  color: #666666;
  display: flex;
  >div{
    float: left;
    padding: 12px;
    margin-right: 5px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    text-overflow:ellipsis;
    max-width: 100%;
    overflow: hidden;
    &:last-child{
      margin-right: 0;
    }
    &.active {
      color: #F54D4F;
      ::after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #F54D4F;
        bottom: 0;
        left: 0;
      }
    }
  }
`
