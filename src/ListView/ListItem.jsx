import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyledListItem,
  StyledListItemContent,
  StyledItemMedia,
  StyledItemInner,
  StyledItemTitle,
  StyledItemTitleRow,
  StyledItemSubTitle,
  StyledItemText,
  StyledItemAfter,
} from './Styled';

export default class ListItem extends Component {


  renderContent = ()=>{
    const {
      after,
      arrow,
      title,
      text,
      media,
      mediaList,
      subTitle,
      inset,
      children,
      ...rest
    } = this.props;

    if(mediaList){
      return (
        <StyledListItemContent inset={inset} {...rest}>
          {media && <StyledItemMedia>{media}</StyledItemMedia>}
          <StyledItemInner>
            <StyledItemTitleRow arrow={arrow}>
              {title && <StyledItemTitle bold>{title}</StyledItemTitle>}
              {after && <StyledItemAfter>{after}</StyledItemAfter>}
            </StyledItemTitleRow>
            {subTitle && <StyledItemSubTitle>{subTitle}</StyledItemSubTitle>}
            {text && <StyledItemText>{text}</StyledItemText>}
          </StyledItemInner>
        </StyledListItemContent>
      )
    }

    return (
      <StyledListItemContent arrow={arrow} inset={inset} {...rest}>
        {media && <StyledItemMedia>{media}</StyledItemMedia>}
        <StyledItemInner>
          {title && <StyledItemTitle>{title}</StyledItemTitle>}
          {after && <StyledItemAfter>{after}</StyledItemAfter>}
        </StyledItemInner>
      </StyledListItemContent>
    )
  }


  render(){


    return <StyledListItem>{this.renderContent()}</StyledListItem>

  }
}
