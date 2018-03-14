import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StylePopup} from './Styled';
import Modal from '../Modal';
//
const PopupModal = StylePopup.withComponent(Modal);

export default class Popup extends Component {

  render(){
    const {
      visible,
      children,
      bgColor
    } = this.props;
    return (
      <PopupModal
        visible={visible}
        fade={false}
        bgColor={bgColor}
      >
        {children}
      </PopupModal>
    )
  }
}
