import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
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
    title: PropTypes.node,
    subTitle: PropTypes.node,
    text: PropTypes.node,
    media: PropTypes.node,
    inset: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    innerStyle: PropTypes.object,
  }

  static contextTypes = {
    mediaList: PropTypes.bool
  }

  renderContent = ()=>{
    const {
      after,
      arrow,
      title,
      text,
      media,
      subTitle,
      inset,
      innerStyle,
      header,
      footer,
      children,
      ...rest
    } = this.props;

    const mediaList = this.context.mediaList;

    if(mediaList){
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

    return (
      <StyledListItemContent arrow={arrow} inset={inset} {...rest}>
        <Mount as={StyledItemMedia}>{media}</Mount>
        <StyledItemInner style={innerStyle}>
          <Mount as={StyledItemTitle}>
            <Mount as={StyledItemHeader}>{header}</Mount>
            {title}
            <Mount as={StyledItemFooter}>{footer}</Mount>
          </Mount>
          <Mount as={StyledItemAfter}>{after}</Mount>
        </StyledItemInner>
      </StyledListItemContent>
    )
  }


  render(){


    return <StyledListItem>{this.renderContent()}</StyledListItem>

  }
}
