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
    innerStyle: PropTypes.object,
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
      innerStyle,
      ...rest
    } = this.props;

    return (
      <Modal2 visible={visible} noButtons={noButtons} overlay {...rest}>
        <ModalInner style={innerStyle}>
          {title && <ModalTitle>{title}</ModalTitle>}
          {text && <ModalText>{text}</ModalText>}
          {afterText}
        </ModalInner>
        <ButtonGroup vertical={verticalButtons}>
          { buttons.map(({text, ...props}, index)=><Button theme={theme} {...props} key={'modal-button.' + index}>{text}</Button>) }
        </ButtonGroup>
      </Modal2>
    )
  }
}
