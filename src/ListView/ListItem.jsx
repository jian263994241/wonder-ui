import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {CheckboxIcon, Input} from '../Checkbox/Styled';

const IconRight = styled(CheckboxIcon) `
  margin-left: 5px;
`
const IconLeft = styled(CheckboxIcon) `
  margin-right: 15px;
`

import {
  StyledListItem,
  StyledListItemContent,
  StyledItemMedia,
  StyledItemInner,
  StyledItemTitle,
  StyledItemHeader,
  StyledItemFooter,
  StyledItemTitleRow,
  StyledItemSubTitle,
  StyledItemText,
  StyledItemAfter,
} from './Styled';

function Mount({as, children, ...rest}){
  if(!children) return null;
  return createElement(as, {children, ...rest})
}

export default class ListItem extends Component {

  static propTypes = {
    after: PropTypes.node,
    arrow: PropTypes.bool,
    footer: PropTypes.node,
    label: PropTypes.bool,
    title: PropTypes.node,
    subTitle: PropTypes.node,
    text: PropTypes.node,
    media: PropTypes.node,
    inset: PropTypes.bool,
    innerStyle: PropTypes.object,
    header: PropTypes.node,
    type: PropTypes.oneOf(['checkbox', 'radio']),
  }

  static contextTypes = {
    mediaList: PropTypes.bool
  }

  renderItem = ()=>{
    const {
      after,
      arrow,
      title,
      text,
      media,
      inset,
      innerStyle,
      label,
      labelStyle,
      header,
      footer,
      children,
      type,
      IconLeft,
      inputProps,
      ...rest
    } = this.props;

    if(type === 'checkbox' || type === 'radio'){

      if(IconLeft){
        return (
          <StyledListItemContent arrow={arrow} inset={inset} as="label" {...rest}>
            <Input type={type} {...inputProps}/>
            <IconLeft/>
            <StyledItemInner style={innerStyle}>
              <Mount as={StyledItemTitle} label={label} style={labelStyle}>
                <Mount as={StyledItemHeader}>{header}</Mount>
                {title}
                <Mount as={StyledItemFooter}>{footer}</Mount>
              </Mount>
              {children}
              <Mount as={StyledItemAfter}>{after}</Mount>
            </StyledItemInner>
          </StyledListItemContent>
        )
      }

      return (
        <StyledListItemContent arrow={arrow} inset={inset} as="label" {...rest}>
          <Mount as={StyledItemMedia}>{media}</Mount>
          <StyledItemInner style={innerStyle}>
            <Mount as={StyledItemTitle} label={label} style={labelStyle}>
              <Mount as={StyledItemHeader}>{header}</Mount>
              {title}
              <Mount as={StyledItemFooter}>{footer}</Mount>
            </Mount>
            {children}
            <Input type={type} {...inputProps}/>
            <IconRight/>
          </StyledItemInner>
        </StyledListItemContent>
      )
    }

    return (

      <StyledListItemContent arrow={arrow} inset={inset} {...rest}>
        <Mount as={StyledItemMedia}>{media}</Mount>
        <StyledItemInner style={innerStyle}>
          <Mount as={StyledItemTitle} label={label} style={labelStyle}>
            <Mount as={StyledItemHeader}>{header}</Mount>
            {title}
            <Mount as={StyledItemFooter}>{footer}</Mount>
          </Mount>
          {children}
          <Mount as={StyledItemAfter}>{after}</Mount>
        </StyledItemInner>
      </StyledListItemContent>

    )
  }

  renderMediaItem = ()=>{
    const {
      after,
      arrow,
      title,
      text,
      media,
      subTitle,
      inset,
      innerStyle,
      label,
      labelStyle,
      header,
      footer,
      children,
      checkbox,
      ...rest
    } = this.props;

    return (

      <StyledListItemContent inset={inset} {...rest}>
        <Mount as={StyledItemMedia}>{media}</Mount>
        <StyledItemInner style={innerStyle}>
          <StyledItemTitleRow arrow={arrow}>
            <Mount as={StyledItemTitle} bold>
              <Mount as={StyledItemHeader}>{header}</Mount>
              {title}
              <Mount as={StyledItemFooter}>{footer}</Mount>
            </Mount>
            <Mount as={StyledItemAfter}>{after}</Mount>
          </StyledItemTitleRow>
          <Mount as={StyledItemSubTitle}>{subTitle}</Mount>
          <Mount as={StyledItemText}>{text}</Mount>
        </StyledItemInner>
      </StyledListItemContent>
    )
  }


  render(){

    const mediaList = this.context.mediaList;

    return (
      <StyledListItem>
        {mediaList ? this.renderMediaItem(): this.renderItem()}
      </StyledListItem>
    );
  }
}
