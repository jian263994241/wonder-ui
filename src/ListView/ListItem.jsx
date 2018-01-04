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

    if(this.props.mediaList){
      return (
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
      )
    }

    return (
      <StyledListItem arrow={arrow} inset={inset} {...rest}>
        {media && <StyledItemMedia>{media}</StyledItemMedia>}
        <StyledItemInner>
          {title && <StyledItemTitle>{title}</StyledItemTitle>}
          {after && <StyledItemAfter>{after}</StyledItemAfter>}
        </StyledItemInner>
      </StyledListItem>
    )
  }


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

    return (
      <div>
        {this.renderContent()}
      </div>
    )

  }
}
