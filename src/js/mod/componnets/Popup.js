import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'
import Modal from './Modal'


export default class Popup extends Component {

  static uiName = 'Popup';

  render() {

    const {
      children,
      ...other
    } = this.props;

    return (
      <Modal type="popup" fixTop={false} {...other}>{children}</Modal>
    );
  }
}
