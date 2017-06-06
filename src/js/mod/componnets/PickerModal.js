import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import Modal from './Modal'


export default class PickerModal extends Component {

  static uiName = 'PickerModal';

  static propTypes = {
    className: PropTypes.string,
    innerClassName: PropTypes.string
  }

  render() {

    const {
      toolbar,
      className,
      innerClassName,
      children,
      ...other
    } = this.props;

    const cls = classnames('picker-modal', className);
    const innerCls = classnames('picker-modal-inner', innerClassName);
    return (
      <Modal className={cls} {...other} overLayCss="picker-modal-overlay">
        {toolbar}
        <div className={innerCls}>
          {children}
        </div>
      </Modal>
    );
  }
}
