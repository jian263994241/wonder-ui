import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import Modal from './Modal'

export default class Popup extends Component {

  static uiName = 'Popup';

  static defaultProps = {
    opened: false
  }

  static propTypes = {
    className: PropTypes.string,
    opened: PropTypes.bool
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
