import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import OverLay from './OverLay'
import noScroll from 'no-scroll'

export default class Modal extends Component {

  static uiName = 'Popup';

  static defaultProps = {
    opened: false,
    overlay: true
  }

  static propTypes = {
    opened: PropTypes.bool,
    onClickOutside: PropTypes.func,
    onOpen: PropTypes.func,
    onOpened: PropTypes.func,
    onClose: PropTypes.func,
    onClosed: PropTypes.func,
    className: PropTypes.string,
    overlay: PropTypes.bool,
    overLayCss: PropTypes.string
  }

  state={
    opened: false,
    // showChildren: true,
    transitionEnd: true
  }

  toggle = (opened)=>{
    if(this.state.opened === opened) return ;
    opened ? this.openModal(): this.closeModal();
  }

  openModal = ()=>{
    const {onOpen, onOpened} = this.props;
    const {Modal: modal} = this.refs;

    $(modal).show();
    noScroll.on();
    this.setState({ opened: true });

    onOpen && onOpen();
    $(window).trigger('resize');
    $(modal).removeClass('modal-out').addClass('modal-in').transitionEnd((e)=>{
      onOpened && onOpened();
    });


  }

  closeModal = ()=>{
    const {onClose, onClosed} = this.props;
    const {Modal: modal} = this.refs;

    noScroll.off();
    this.setState({opened: false});
    
    onClose && onClose();
    $(modal).removeClass('modal-in').addClass('modal-out').transitionEnd((e)=>{
      $(modal).hide();
      onClosed && onClosed();
    });
  }

  componentDidMount() {
    const {opened} = this.props;
    this.toggle(opened);
  }

  componentWillReceiveProps(nextProps) {
    const {opened} = nextProps;
    this.toggle(opened);
  }

  render() {

    const {
      className,
      opened,
      onOpen,
      onOpened,
      onClose,
      onClosed,
      overlay,
      overLayCss,
      onClickOutside,
      children,
      ...other
    } = this.props;

    const {opened: stateOpened} = this.state;

    // const cls = classnames(className, {
    //   'modal-in': stateOpened
    // });

    const isPopup = className && className.indexOf('popup') > -1 ;

    // const childrenNode = (!this.state.showChildren && !stateOpened) ? null : children;

    const overlayStyle = overlay ? {} : {'opacity': 0.01};

    return (
      <div>
        <OverLay opened={stateOpened} className={overLayCss || 'modal-overlay'} style={overlayStyle} onClick={onClickOutside}></OverLay>
        <div className={className} {...other} ref="Modal">{children}</div>
      </div>
    );
  }
}
