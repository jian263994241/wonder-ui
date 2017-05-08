import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import OverLay from './OverLay'
import Modal from './Modal'

export default class Popup extends Component {

  static uiName = 'Popup';

  static defaultProps = {
    removeOnClose: true,
    opened: false
  }

  static propTypes = {
    className: PropTypes.string,
  }

  render() {

    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('popup', className);

    return (
      <Modal className={cls} {...other}>{children}</Modal>
    );
  }
}
