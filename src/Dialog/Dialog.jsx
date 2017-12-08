import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ModalMixin, ModalInner,  ModalTitle, ModalText, ButtonGroup, Button} from './Styled';
import Modal from '../Modal';

const Modal2 = ModalMixin.withComponent(Modal);

export default class Dialog extends Component {

  static propTypes = {
    title: PropTypes.any,
    text: PropTypes.any,
    buttons: PropTypes.array,
    verticalButtons: PropTypes.bool,
    noButtons: PropTypes.bool,
    afterText: PropTypes.node,
  }

  static defaultProps = {
    title: null,
    text: '',
    buttons : [],
    verticalButtons: false,
    afterText: null
  }

  render(){

    const {
      afterText,
      buttons,
      title,
      text,
      theme,
      noButtons,
      visible,
      verticalButtons,
      ...rest
    } = this.props;

    return (
      <Modal2 visible={visible} noButtons={noButtons} fade overlay {...rest}>
        <ModalInner>
          {title && <ModalTitle>{title}</ModalTitle>}
          <ModalText>{text}</ModalText>
          {afterText}
        </ModalInner>
        <ButtonGroup vertical={verticalButtons}>
          { buttons.map(({text, ...props}, index)=><Button {...props} theme={theme} key={'modal-button.' + index}>{text}</Button>) }
        </ButtonGroup>
      </Modal2>
    )
  }
}
