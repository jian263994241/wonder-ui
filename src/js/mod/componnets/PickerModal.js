import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from 'dom7'

import Modal from 'f7-modal'
import {Toolbar} from './Bars'


export default class PickerModal extends Component {

  static uiName = 'PickerModal';

  static propTypes = {
    cancelText: PropTypes.string,
    onCancel: PropTypes.func,
    toolbar: PropTypes.element,
    innerCss: PropTypes.string
  }

  static defaultProps = {
    cancelText: '关闭'
  }

  render() {

    const {
      toolbar,
      innerCss,
      onCancel,
      cancelText,
      children,
      ...other
    } = this.props;

    const type = 'picker';

    const preset = toolbar || (
      <Toolbar>
        <div className="left"></div>
        <div className="right"><a onClick={onCancel}>{cancelText}</a></div>
      </Toolbar>
    )

    return (
      <Modal {...other} type="picker" onCancel={onCancel} fixTop={false}>
        {preset}
        <div className={classnames('picker-modal-inner', innerCss)}>
          {children}
        </div>
      </Modal>
    );
  }
}
