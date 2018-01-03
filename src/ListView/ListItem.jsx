import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyledListItem,
  StyledItemMedia,
  StyledItemInner,
  StyledItemTitle,
  StyledItemTitleRow,
  StyledItemSubTitle,
  StyledItemText,
  StyledItemAfter,
} from './Styled';

export default class ListItem extends Component {


  render(){

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

    return mediaList ? (
      <StyledListItem inset={inset} {...rest}>
        {media && <StyledItemMedia>{media}</StyledItemMedia>}
        <StyledItemInner>
          <StyledItemTitleRow arrow={arrow}>
            {title && <StyledItemTitle bold>{title}</StyledItemTitle>}
            {after && <StyledItemAfter>{after}</StyledItemAfter>}
          </StyledItemTitleRow>
          {subTitle && <StyledItemSubTitle>{subTitle}</StyledItemSubTitle>}
          {text && <StyledItemText>{text}</StyledItemText>}
        </StyledItemInner>
      </StyledListItem>
    ) : (
      <StyledListItem arrow={arrow} inset={inset} {...rest}>
        {media && <StyledItemMedia>{media}</StyledItemMedia>}
        <StyledItemInner>
          {title && <StyledItemTitle>{title}</StyledItemTitle>}
          {after && <StyledItemAfter>{after}</StyledItemAfter>}
        </StyledItemInner>
      </StyledListItem>
    )

  }
}
