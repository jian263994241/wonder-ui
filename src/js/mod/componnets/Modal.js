import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import OverLay from './OverLay'


export default class Modal extends Component {

  static uiName = 'Modal';

  static defaultProps = {
    visible: false,
    type: 'modal',
    closeByOutside: true
  }

  static propTypes = {
    visible: PropTypes.bool,
    afterClose: PropTypes.func,
    onCancel: PropTypes.func,
    closeByOutside: PropTypes.bool,
    className: PropTypes.string,
    // overlay: PropTypes.bool,
    // overLayCss: PropTypes.string
  }

  // toggle = (opened)=>{
  //   if(this.state.opened === opened) return ;
  //   opened ? this.openModal(): this.closeModal();
  // }

  // openModal = ()=>{
  //   const {onOpen, onOpened} = this.props;
  //   const {modal} = this.refs;
  //
  //   $(modal).show();
  //
  //   this.setState({ opened: true });
  //
  //   onOpen && onOpen();
  //   $(window).trigger('resize');
  //   $(modal).removeClass('modal-out').addClass('modal-in').transitionEnd((e)=>{
  //     onOpened && onOpened();
  //   });

  // }

  componentDidUpdate(prevProps, prevState) {
    const {visible, afterClose} = this.props;
    const modal = $(this.refs.modal);
    if(visible != prevProps.visible){
      if(visible){
        console.log('Modal Opened');
        modal.show();
        setTimeout(()=>{
          $(window).trigger('resize');
          modal.removeClass('modal-out').addClass('modal-in');
        });

      }else{
        console.log('Modal Closed');
        modal.removeClass('modal-in').addClass('modal-out').transitionEnd((e)=>{
          modal.hide();
          afterClose && afterClose();
        });
      }
    }
  }

  // closeModal = ()=>{
  //   const {onClose, onClosed} = this.props;
  //   const {Modal: modal} = this.refs;
  //
  //
  //   this.setState({opened: false});
  //
  //   onClose && onClose();
  //   $(modal).removeClass('modal-in').addClass('modal-out').transitionEnd((e)=>{
  //     $(modal).hide();
  //     onClosed && onClosed();
  //   });
  // }

  // componentDidMount() {
    // const {visible} = this.props;
    // if(!visible){
    //   $(this.refs.modal).hide().addClass('modal-out');
    // }
    // this.toggle(opened);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   const {opened} = nextProps;
  //   // this.toggle(opened);
  // }

  render() {

    const {
      className,
      visible,
      onCancel,
      afterClose,
      closeByOutside,
      children,
      type,
      ...other
    } = this.props;

    const cls = classnames({
      'modal': type === 'modal',
      'popup': type === 'popup',
      'actions-modal': type === 'actions',
      'picker-modal': type === 'picker',
      'popover': type === 'popover',
    }, className);

    return (
      <div>
        <OverLay visible={visible} type={type} onClick={closeByOutside && onCancel}></OverLay>
        <div className={cls} {...other} ref="modal">{children}</div>
      </div>
    );
  }
}

  // <OverLay opened={visible} className="modal-overlay" onClick={onClickOutside && onCancel}></OverLay>
