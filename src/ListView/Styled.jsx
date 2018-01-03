import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import createTag from '../utils/createTag';
import hairline, {removeHairline} from '../styles/hairline';
import arrow from '../styles/arrow';
import bold from '../styles/bold';

const listBlockBorderColor=  '#DEDEDE';
const listBlockBg=  '#fff';
const dividerBg=  '#f2f2f2';
const dividerColor=  '#8e8e93';

export const StyledItemTitle = styled(createTag({name: 'item-title', propsToOmit:['bold']})) `
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  min-width: 0;
  flex-shrink: 1;
  ${props=>props.bold && bold}
`
export const StyledItemSubTitle = styled(createTag({name: 'item-subtitle'})) `
  font-size: 15px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow:ellipsis;
`
export const StyledItemText = styled(createTag({name: 'item-text'})) `
  font-size: 15px;
  color: #8e8e93;
  line-height: 21px;
  position: relative;
  overflow: hidden;
  height: 42px;
  text-overflow:ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`

export const StyledItemTitleRow = styled(createTag({name: 'item-title-row', propsToOmit: ['arrow']})) `
  padding-right: 20px;
  background: no-repeat right center;
  ${props=>props.arrow && arrow}
  display: flex;
  justify-content:space-between;
`

export const StyledItemAfter = styled(createTag({name: 'item-after'})) `
  white-space: nowrap;
  color: #8e8e93;
  display: flex;
  flex-shrink:1;
  margin-left: 5px;
  max-height: 28px;
`

export const StyledItemInner = styled(createTag({name:'item-inner'})) `
  padding-right: 15px;
  position: relative;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 7px;
  min-height: 44px;
  box-sizing: border-box;
  display: flex;
  flex:1;
  overflow: hidden;
  justify-content:space-between;
  align-items:center;
  align-self:stretch;
  ${hairline('bottom', listBlockBorderColor)}
`

const itemLinkInnerCss = css `
  ${StyledItemInner}{
    ${arrow}
    background-size: 10px 20px;
    background-repeat: no-repeat;
    background-position: 95% center;
    background-position: -webkit-calc(~"100% - 15px") center;
    background-position: calc(~"100% - 15px") center;
    padding-right: 35px;
  }
`

export const StyledItemMedia = styled(createTag({name: 'list-media'})) `
  display: flex;
  flex-shrink:0;
  flex-wrap:nowrap;
  box-sizing: border-box;
  align-items:center;
  padding-top: 9px;
  padding-bottom: 10px;
  img, svg {
      vertical-align:middle;
  }
  i + i {
    margin-left: 5px;
  }
  i + img, img + img {
    margin-left: 5px;
  }
  & + ${StyledItemInner} {
    margin-left: 15px;
  }
`

export const StyledListItem = styled(createTag({name: 'list-item', propsToOmit: ['arrow']})) `
  position: relative;
  box-sizing: border-box;
  padding-left: 15px;
  min-height: 44px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  color: inherit;
  ${props=>props.arrow && itemLinkInnerCss}
  ${'' /* html:not(.watch-active-state) &:active, &.active-state{
    background-color: #d9d9d9;
    ${StyledItemInner} {
      ${hairline('bottom', 'transparent')}
    }
  } */}
`

const insetCss = css `
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 7px;
  ${StyledItemTitle} {
    margin-left: 0;
    margin-right: 0;
  }
  ${StyledListItem}:first-child {
    border-radius: 7px 7px 0 0;
  }
  ${StyledListItem}:last-child {
    border-radius: 0 0 7px 7px;
  }
  ${StyledListItem}:first-child:last-child {
    border-radius: 7px;
  }
`

export const StyledList = styled(createTag({name: 'list', propsToOmit: ['inset', 'mediaList'], propsToNested: ['mediaList']})) `
  background: ${listBlockBg};
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 15px;
  ${hairline('top', listBlockBorderColor)}
  ${hairline('bottom', listBlockBorderColor)}
  ${props=>props.inset && insetCss}
  ${StyledItemInner} {
    ${props=>props.mediaList && css `display: block;`}
  }
`
