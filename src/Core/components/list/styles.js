import styled, {css} from 'styled-components';
import { createHairline, removeHairline } from '../styles/hairline';

export const WUI_list_header = styled.div(({theme, center})=>{
  return  `
    width: 100%;
    box-sizing: border-box;
    font-size: ${theme.typography.fontSize}px;
    color: ${theme.palette.text.hint};
    padding: 10px 15px 7px 15px;
    display: flex;
    justify-content: ${center ? 'center' : 'start'};
  `
})

export const WUI_list_footer = styled.div(({theme, center})=>{
  return css `
    width: 100%;
    box-sizing: border-box;
    font-size: ${theme.typography.fontSize}px;
    color: ${theme.palette.text.hint};
    padding: 10px 15px;
    display: flex;
    justify-content: ${center ? 'center' : 'start'};
  `
})

export const WUI_list_item_arrow = styled.div `

`

export const WUI_list_item_line = styled.div(({theme})=>{

  return {
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    paddingRight: 15,
    overflow: 'hidden',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    ...createHairline('bottom', theme.palette.divider).object,
  }
})

export const WUI_list_item_brief = styled.div(({theme})=>{
  return {
    color: theme.palette.text.secondary,
    ...theme.typography.caption,
  }
})

export const WUI_list_item_media = styled.div `
  &:first-child {
    margin-right: 15px;
  }

  &:last-child {
    margin-left: 10px;
  }
`

export const WUI_list_item_content = styled.div(({theme})=>{
  return {
    ...theme.typography.body1,
    ...theme.typography.ellipsis,
    flex: 1,
    textAlign: 'left',
  }
})

export const WUI_list_item_extra = styled.div(({theme})=>({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  textAlign: 'right',
  paddingLeft: theme.spacing(0.5),
}))

export const WUI_list_item = styled.div(({theme})=>{
  return {
    position: 'relative',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 15,
    // minHeight: 44,
    verticalAlign: 'middle',
    overflow: 'hidden',
    transition: 'background-color 200ms',
    alignItems: 'center',
    '&:first-child': {
      // ...createHairline('top', theme.palette.divider).object,
    },
    '&:last-child': {
      // ...createHairline('bottom', theme.palette.divider).object,
      // [`&& ${WUI_list_item_line}`]: {
      //   ...removeHairline('bottom')
      // }
    },
    // '&:only-child': {
    //   [`&& ${WUI_list_item_line}`]: {
    //     ...removeHairline('bottom')
    //   }
    // }
  }
})

export const WUI_list_body = styled.div(({theme})=>{
  return {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    ...createHairline('top', theme.palette.divider).object,
    ...createHairline('bottom', theme.palette.divider).object,
  }
})

export const WUI_list = styled.div(({theme})=>{

  return {
    'select': {
      ...theme.typography.body1,
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      padding: 0,
      border: 0,
      appearance: 'none',
      backgroundColor: 'transparent',
    }
  }
})