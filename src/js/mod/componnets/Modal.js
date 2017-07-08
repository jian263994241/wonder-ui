import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import OverLay from './OverLay'
import Mounter from './Mounter'


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

  getModal = ()=>{
    return this.refs.modal
  }


  render() {

    const {
      className,
      visible,
      onCancel,
      afterClose,
      closeByOutside,
      mounter,
      type,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'modal': type === 'modal',
      'popup': type === 'popup',
      'actions-modal': type === 'actions',
      'picker-modal': type === 'picker',
      'popover': type === 'popover',
    }, className);

    const Wrapper = mounter? Mounter : 'div';

    return (
      <Wrapper>
        <OverLay visible={visible} type={type} onClick={closeByOutside && onCancel}></OverLay>
        <div className={cls} {...other} ref="modal">{children}</div>
      </Wrapper>
    );
  }
}



  // <OverLay opened={visible} className="modal-overlay" onClick={onClickOutside && onCancel}></OverLay>
