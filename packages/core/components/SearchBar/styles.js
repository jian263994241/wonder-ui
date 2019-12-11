import styled from '../styled';
import { visible, createSvgBackground, display, borderBox } from '../styles/utils';
import { createHairline } from '../styles/hairline';

export const SearchRoot = styled('div') `
  background-color: #fff;
  width: 100%;
  height: 44px;
  display: flex;
  position: relative;
  ${props=>props.bordered && createHairline('bottom', '#ddd').css}
`
export const SearchBody = styled('form') `
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 5px 0 5px 10px;
  ${borderBox}
`

export const IconSearch = styled('i') `
  display: inline-block;
  width: 20px;
  height: 15px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 15px auto;
  align-self: center;
  ${createSvgBackground('<svg width="38" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M29.05 25.23a15.81 15.81 0 0 0 3.004-9.294c0-8.8-7.17-15.934-16.017-15.934C7.192.002.02 7.136.02 15.936c0 8.802 7.172 15.937 16.017 15.937a16 16 0 0 0 10.772-4.143l8.873 8.232 2.296-2.45-8.927-8.282zM16.2 28.933c-7.19 0-13.04-5.788-13.04-12.903 0-7.113 5.85-12.904 13.04-12.904 7.19 0 12.9 5.79 12.9 12.904 0 7.115-5.71 12.903-12.9 12.903z" fill="#bbb" fill-rule="evenodd"/></svg>')}
`

export const SearchInput = styled('div') `
  background-color: #F2F2F2;
  height: 100%;
  border-radius: 8px;
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: ${props=>props.start ? 68: 0}px;
  transition: margin-right ease ${props=>props.transitionDisabled ? 0 : 200}ms;
  width: 100%;
  flex: 1;
  > input {
    width: 100%;
    height: 100%;
    font-size: 14px;
    border: 0;
    box-sizing: border-box;
    padding: 0 5px;
    outline: none;
    background-color: transparent;
    appearance: none;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
`
export const CancelText = styled('span') `
  ${visible}
  display: block;
  align-self: center;
  color: #6988EF;
  transition: opacity ease 375ms;
  padding: 0 20px;
  position: absolute;
  right: 0;
`
export const SearchClear = styled('i') `
  ${display}
  width: 20px;
  height: 100%;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  ${createSvgBackground(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#ccc"/><path stroke="#fff" stroke-width="2" stroke-miterlimit="10" d="M8 8l12 12"/><path fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" d="M20 8L8 20"/></svg>`)}
  transition: all ease 200ms;
  position: relative;
  align-self: center;
` 

export const Extra = styled('div') `
  align-self: center;
  ${display}
`

export const End = styled('div') `
  padding-left: 10px;
`