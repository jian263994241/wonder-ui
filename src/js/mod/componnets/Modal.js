import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'
import OverLay from './OverLay'
import Mounter from './Mounter'

export default class Modal extends Component {

  static uiName = 'Modal';

  static defaultProps = {
    visible: false,
    fixTop: false,
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

  getModal = ()=>{
    return this.refs.modal
  }

  update = (initial)=>{
    const {visible, afterClose, fixTop} = this.props;
    const modal = $(this.refs.modal);
    if(visible){
      // console.log('Modal Opened');
      modal.show();
      setTimeout(()=>{
        $(window).trigger('resize');
        modal.removeClass('modal-out').addClass('modal-in');
        if(fixTop){
          this.fixTop();
        }
      });
    }else{
      // console.log('Modal Closed');
      modal.removeClass('modal-in').addClass('modal-out');
      if(!initial){
        modal.transitionEnd((e)=>{
          modal.hide();
          afterClose && afterClose();
        });
      }
    }
  }

  fixTop = ()=>{
    const modal = $(this.refs.modal);
    const topx = - Math.round(modal.outerHeight() / 2) - 10 ;
    modal.css({marginTop:  topx+ 'px'});
  }

  getMounter = ()=>{
    return this.refs.mounter;
  }

  componentDidMount() {
    this.update(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.visible != prevProps.visible){
      this.update();
    }
  }

  render() {

    const {
      className,
      visible,
      onCancel,
      afterClose,
      closeByOutside,
      mounter,
      root,
      type,
      fixTop,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'modal': (type === 'modal' || type === 'toast' || type === 'preloader'),
      'popup': type === 'popup',
      'actions-modal': type === 'actions',
      'picker-modal': type === 'picker',
      'popover': type === 'popover',
      'modal-no-buttons': type==='toast',
      'preloader-modal': type === 'preloader',
      'toast': type === 'toast'
    }, className);

    const innerElement = [
      <OverLay visible={visible} type={type} onClick={closeByOutside && onCancel} key="overlay"></OverLay>,
      <div className={cls} {...other} ref="modal" key="modal">{children}</div>
    ]

    if(mounter){
      return (
        <Mounter root={root} ref="mounter">
          {innerElement}
        </Mounter>
      );
    }

    return (
      <div>{innerElement}</div>
    );
  }
}
