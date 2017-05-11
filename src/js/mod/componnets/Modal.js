import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import OverLay from './OverLay'
import noScroll from 'no-scroll'

export default class Modal extends Component {

  static uiName = 'Popup';

  static defaultProps = {
    opened: false,
    modalCloseByOutside: false,
    overlay: true
  }

  static propTypes = {
    opened: PropTypes.bool,
    modalCloseByOutside: PropTypes.bool,
    onOpen: PropTypes.func,
    onOpened: PropTypes.func,
    onClose: PropTypes.func,
    onClosed: PropTypes.func,
    className: PropTypes.string,
    overlay: PropTypes.bool
  }

  state={
    opened: false,
    showChildren: true
  }

  toggle = (opened)=>{
    if(this.state.opened === opened) return ;
    opened ? this.openModal(): this.closeModal();
  }

  openModal = ()=>{
    const {onOpen} = this.props;
    const modal = this.refs.Modal;
    modal.style.display = 'block';
    noScroll.on();
    setTimeout(()=>{
      this.setState({ opened: true, showChildren:true }, ()=>{
        $(window).trigger('resize');
        onOpen && onOpen();
      });
    },16);
  }

  closeModal = ()=>{
    const {onClose} = this.props;
    noScroll.off();
    this.setState({opened: false}, ()=>{
      onClose && onClose();
    });
  }

  _transitionEnd = (e)=>{
    //stop transitionend event to happen on child element
    if(e.target != this.refs.Modal) return ;
    const {onOpened, onClosed} = this.props;
    const modal = this.refs.Modal;
    let {opened, modalStyle} = this.state;
    if(opened){
      onOpened && onOpened();
    }else{
      onClosed && onClosed();
      modal.style.display = 'none';
      this.setState({
        showChildren: false
      });
    }
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
      modalCloseByOutside,
      children,
      ...other
    } = this.props;

    const stateOpened = this.state.opened;

    const cls = classnames(className, {'modal-in': stateOpened, 'modal-out': !stateOpened});

    const isPopup = className && className.indexOf('popup') > -1 ;

    const overLayCss = classnames({
      'popup-overlay': isPopup,
      'modal-overlay': !isPopup
    });

    const closeByOutside = ()=>{
      modalCloseByOutside && this.closeModal();
    };

    const childrenNode = (!this.state.showChildren && !stateOpened) ? null : children;

    if(overlay){
      return (
        <div ref="Root">
          <OverLay opened={stateOpened} className={overLayCss} onClick={closeByOutside}></OverLay>
          <div className={cls} {...other} ref="Modal" onTransitionEnd={this._transitionEnd}>{childrenNode}</div>
        </div>
      );
    }

    return (
      <div className={cls} {...other} ref="Modal" onTransitionEnd={this._transitionEnd}>{childrenNode}</div>
    );

  }
}
