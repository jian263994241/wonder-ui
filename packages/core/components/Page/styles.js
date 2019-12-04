import styled, {css} from 'styled-components';
import ScrollContent from '../ScrollContent';

export const WUI_page_root = styled.div(({theme})=>{
  return css `
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    background: ${theme.palette.background.default};
    z-index: 10;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    & > * {
      flex-shrink: 0;
    }
  `
})

export const WUI_page_body = styled.div `
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const WUI_page_content = styled(ScrollContent) `
 
  html.device-ios & {
    &:before{
      content:'';
      width: 1px;
      float: left;
      height: ~'calc(100% + 1px)';
      margin-left: -1px;
    }
    &:after{
      content:'';
      width: 100%;
      clear: both;
    }
  }
`

