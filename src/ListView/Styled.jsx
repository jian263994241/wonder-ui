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

export const StyledItemTitle = styled( createTag({ propsToOmit: ['bold'] }) ) `
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  min-width: 0;
  flex-shrink: 1;
  ${props=>props.bold && bold}
`

export const StyledItemHeader = styled.div `
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  white-space: normal;
`

export const StyledItemFooter = StyledItemHeader.extend `
  color: #888;
`

export const StyledItemSubTitle = styled.div `
  font-size: 15px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow:ellipsis;
`
export const StyledItemText = styled.div `
  font-size: 15px;
  color: #888888;
  line-height: 21px;
  position: relative;
  overflow: hidden;
  text-overflow:ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`

const arrowCss = css `
  background-size: 8px 13px;
  background-repeat: no-repeat;
  background-position: 95% center;
  background-position: -webkit-calc(100% - 15px) center;
  background-position: calc(100% - 15px) center;
  ${arrow}
`

export const StyledItemTitleRow = styled( createTag({ propsToOmit: ['arrow'] }) ) `
  padding-right: 20px;
  background: no-repeat right center;
  ${props=>props.arrow && arrowCss}
  display: flex;
  justify-content:space-between;
`

export const StyledItemAfter = styled.div `
  white-space: nowrap;
  color: #8e8e93;
  display: flex;
  flex-shrink:1;
  margin-left: 5px;
  max-height: 28px;
`

export const StyledItemInner = styled.div `
  padding-right: 15px;
  position: relative;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
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
    padding-right: 35px;
    ${arrowCss}
  }
`

export const StyledItemMedia = styled.div `
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

export const StyledListItemContent = styled( createTag({ propsToOmit: ['arrow'] }) ) `
  position: relative;
  box-sizing: border-box;
  padding-left: 15px;
  min-height: 44px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  color: inherit;
  ${props=>props.arrow && itemLinkInnerCss}
  html:not(.watch-active-state) &:active, &.active-state{
    background-color: #d9d9d9;
    ${StyledItemInner} {
      ${hairline('bottom', 'transparent')}
    }
  }
`

const insetCss = css `
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 7px;
  ${StyledItemTitle} {
    margin-left: 0;
    margin-right: 0;
  }
  ${StyledListItemContent}:first-child {
    border-radius: 7px 7px 0 0;
  }
  ${StyledListItemContent}:last-child {
    border-radius: 0 0 7px 7px;
  }
  ${StyledListItemContent}:first-child:last-child {
    border-radius: 7px;
  }
`
export const StyledListItem = styled.li `
  position: relative;
  box-sizing: border-box;
`

export const StyledList = styled( createTag({ propsToOmit: ['inset', 'mediaList'] }) ) `
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
