import styled from 'styled-components';

export const WUI_checkbox_inner = styled.span `
  position: absolute;
  right: 0;
  width: 21px;
  height: 21px;
  border: 1px solid #ccc;
  border-radius: 50%;
  transform: rotate(0deg);
  box-sizing: border-box;

  &::after {
    position: absolute;
    display: none;
    top: 1.5px;
    right: 6px;
    z-index: 999;
    width: 5px;
    height: 11px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    content: '\\0020';
    transform: rotate(45deg);
  }
`

export const WUI_checkbox_wrap = styled.span `
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 21px;
  height: 21px;

  &[disabled] {
    opacity: 0.45;
  }

  > input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 0 none;
    appearance: none;
  }

  > input:checked + ${WUI_checkbox_inner}{
    border-color: #108ee9;
    background: #108ee9;
  }

  > input:checked + ${WUI_checkbox_inner}::after {
    display: block;
    border-color: #fff;
  }
`