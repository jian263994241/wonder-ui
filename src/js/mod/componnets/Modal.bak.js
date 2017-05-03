import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'

import OverLay from './OverLay'

export default class Modal extends Component {

  static uiName = 'Modal';

  static defaultProps = {
    show: true
  }

  state = {
    modalShow: true
  }

  _modalTopFix = ()=>{
    if(this.refs.Modal){
      const Modal = $(this.refs.Modal);
      Modal.show();
      Modal.css({marginTop: - Math.round(Modal.outerHeight() / 2) + 'px' });
      Modal.addClass('modal-in');
    }
  }

  componentDidMount() {

    const {
      show
    } = this.props;

    this.setState({
      modalShow: show
    }, this._modalTopFix);

  }

  componentWillReceiveProps(nextProps) {
    const {
      show
    } = nextProps;
    this.setState({
      modalShow: show
    });
  }

  render() {

    const {
      className,
      children,
      show,
      ...other
    } = this.props;

    const {
      modalShow
    } = this.state;

    const cls = classnames('modal', className);

    let styles;


    return (
      <div className={cls} {...other} ref="Modal">{children}</div>
    );
  }
}

class Alert extends Component {

  static uiName = "Alert"

  static defaultProps = {
    okText: '确定'
  };

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    afterText: PropTypes.element,
    okText: PropTypes.string,
    callbackOk: PropTypes.func,
    className: PropTypes.string,
  }

  render() {

    const {
      title,
      text,
      afterText,
      okText,
      show,
      callbackOk,
      children
    } = this.props;

    if(!show) return null;

    return (
      <div className="modal-root" ref="Alert">
        <OverLay></OverLay>
        <Modal>
          <div className="modal-inner">
            <div className="modal-title">{title}</div>
            <div className="modal-text">{text}</div>
            {afterText}
          </div>
          <div className="modal-buttons modal-buttons-1">
            <div className="modal-button modal-button-bold" onClick={callbackOk}>{okText}</div>
          </div>
        </Modal>
      </div>
    );
  }
}



Modal.Alert = Alert;
