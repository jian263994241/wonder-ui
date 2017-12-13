import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StylePopup} from './Styled';
import Modal from '../Modal';

const PopupModal = StylePopup.withComponent(Modal);

export default class Popup extends Component {

  render(){

    return (
      <PopupModal overlay {...this.props}/>
    )
  }
}
