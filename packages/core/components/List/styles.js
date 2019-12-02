import React from 'react';
import styled, {css} from 'styled-components';
import { createHairline, removeHairline } from '../styles/hairline';
import utils from '../../utils/utils';

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

export const WUI_list_item_arrow = styled.div(({theme, ...props})=>{

  const vertical = utils.equal(
    [props.arrow, 'vertical'], {
      transform: 'rotate(90deg)'
    }
  )

  const verticalUp = utils.equal(
    [props.arrow, 'vertical-up'], {
      transform: 'rotate(270deg)'
    }
  )

  const align = utils.equal(
    [props.align, 'top'], {
      alignSelf: 'baseline',
      position: 'relative',
      top: 3,
    }
  )
  
  return {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 3,
    ...align,
    svg: {
      display: 'block',
      width: 15,
      height: 15,
      marginLeft: 8,
      ...vertical,
      ...verticalUp
    }
  }
})

export const WUI_list_item_line = styled.div(({theme, ...props})=>{

  return {
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
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

export const WUI_list_item_content = styled(({wrap, align,...props})=> <div {...props}/>)(({theme, ...props})=>{
  const ellipsis = utils.equal(
    [props.wrap, false], 
    theme.typography.ellipsis
  )

  const align = utils.equal(
    [props.align, 'top'], {
      alignSelf: 'baseline',
    }
  )
  
  return {
    ...theme.typography.body1,
    ...ellipsis,
    ...align,
    flex: 1,
    textAlign: 'left',
  }
})

export const WUI_list_item_extra = styled.div(({theme, ...props})=>{
  const align = utils.equal(
    [props.align, 'top'], {
      alignSelf: 'baseline',
    }
  )
  return {
    ...theme.typography.body1,
    ...align,
    color: theme.palette.text.secondary,
    textAlign: 'right',
    paddingLeft: theme.spacing(0.5),
  }
})

export const WUI_list_item = styled.div(({theme, ...props})=>{
  
  const disabled = utils.equal(
    [props.disabled, true],
    {
      '&&' : theme.disabled.text,
      [`& ${WUI_list_item_brief}`]: theme.disabled.text,
      [`& ${WUI_list_item_extra}`]: theme.disabled.text,
      [`& ${WUI_list_item_content}`]: theme.disabled.text,
    }
  );

  const activeState = utils.equal(
    [props.activeState, true], {
      '&:active, &.active-state': {
        backgroundColor : theme.palette.action.selected,
        // backgroundColor: theme.palette.action.active,
      },
    }
  );

  return {
    position: 'relative',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 15,
    minHeight: 44,
    verticalAlign: 'middle',
    overflow: 'hidden',
    transition: 'background-color 200ms',
    alignItems: 'center',
    marginBottom: -1,
    ...disabled,
    ...activeState,
    [`&:last-child ${WUI_list_item_line}`]: {
      ...removeHairline('bottom'),
    }
  }
})

export const WUI_list_body = styled.div(({theme})=>{
  return {
    position: 'relative',
    backgroundColor: 'transparent',
    // ...createHairline('top', theme.palette.divider).object,
    // ...createHairline('bottom', theme.palette.divider).object,
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