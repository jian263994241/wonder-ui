import Modal from '../Modal';
import Toolbar from '../Toolbar';
import {StyledPopupBody, StylePopup} from './Styled';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

//
const PopupModal = StylePopup.withComponent(Modal);

export default class Popup extends Component {

  render(){
    const {
      visible,
      children,
      bgColor,
      title,
      extraLeft,
      extraRight,
      ...rest
    } = this.props;
    console.log(this.props);
    return (
      <PopupModal
        visible={visible}
        fade={false}
        bgColor={bgColor}
        {...rest}
      >
        {
          (title || extraLeft || extraRight) && (
            <Toolbar
              title={title}
              extraLeft={extraLeft}
              extraRight={extraRight}
            />
          )
        }
        <StyledPopupBody>
          {children}
        </StyledPopupBody>
      </PopupModal>
    )
  }
}
