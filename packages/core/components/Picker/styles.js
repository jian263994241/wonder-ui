import styled from 'styled-components';
import Drawer from '../Drawer';
import Cascader from 'rmc-cascader/lib/Cascader';

export const WUI_picker_header = styled.div `
  background-image: linear-gradient(to bottom, #e7e7e7, #e7e7e7, transparent, transparent);
  background-position: bottom;
  background-size: 100% 1PX;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
`

export const WUI_picker_header_button = styled.span `
  color: #577AED;
  font-size: 17px;
  padding: 9px 15px;
  height: 42px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    opacity: 0.5;
  }
`

export const WUI_picker_header_title = styled.div `
  flex: 1;
  text-align: center;
  color: #000;
  font-size: 17px;
`

export const WUI_picker_header_right = styled.span `
  color: #108ee9;
  font-size: 17px;
  padding: 9px 15px;
  height: 42px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background-color: #ddd;
  }
`
export const WUI_picker_cascader = styled(Cascader) `

  display: flex;
  box-align: center;
  align-items: center;

  .rmc-picker,.rmc-multi-picker {
    height: 238px;
    background-color: #f5f5f5;
  }

  .rmc-multi-picker {
    display: flex;
    align-items: center;
  }

  .rmc-picker-item {
    touch-action: manipulation;
    text-align: center;
    font-size: 16px;
    height: 34px;
    line-height: 34px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    text-align: center;
  }

  .rmc-picker {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    flex: 1;
    text-align: center;
  }

  .rmc-picker-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 204px;
    background-repeat: no-repeat;
  }

  .rmc-picker-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .rmc-picker-indicator {
    box-sizing: border-box;
    width: 100%;
    height: 34px;
    position: absolute;
    left: 0;
    top: 102px;
    z-index: 3;
    border-top: 1PX solid #f5f5f5;
    border-bottom: 1PX solid #f5f5f5;
  }
`

export const WUI_picker = styled(Drawer) `
  background-color: #fff;
  padding-bottom: env(safe-area-inset-bottom);
`


export const WUI_picker_error = styled.span `
  color: ${props=>props.theme.palette.error.main};
`