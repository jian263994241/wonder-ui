import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ModalMixin, ModalInner,  ModalTitle, ModalText, ButtonGroup, Button} from './Styled';
import styled, {ThemeProvider} from 'styled-components';
import Modal from '../Modal';

const Modal2 = ModalMixin.withComponent(Modal);

export default class Alert extends Component {

  static defaultProps = {
    title: null,
    text: '',
    buttons : []
  }

  render(){

    const {
      buttons,
      title,
      text,
      theme
    } = this.props;

    return (
      <Modal2 visible overlay>
        <ModalInner>
          {title && <ModalTitle>{title}</ModalTitle>}
          <ModalText>{text}</ModalText>
        </ModalInner>
        <ButtonGroup>
          { buttons.map(({text, ...props}, index)=><Button {...props} theme={theme} key={'modal-button.' + index}>{text}</Button>) }
        </ButtonGroup>
      </Modal2>
    )
  }
}
