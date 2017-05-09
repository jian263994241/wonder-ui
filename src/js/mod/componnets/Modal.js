import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import OverLay from './OverLay'

export default class Modal extends Component {

  static uiName = 'Popup';

  static defaultProps = {
    opened: false,
    removeOnClose: true,
    modalCloseByOutside: false
  }

  static propTypes = {
    opened: PropTypes.bool,
    removeOnClose: PropTypes.bool,
    modalCloseByOutside: PropTypes.bool,
    onOpen: PropTypes.func,
    onOpened: PropTypes.func,
    onClose: PropTypes.func,
    onClosed: PropTypes.func,
    className: PropTypes.string,
  }

  state={
    opened: false,
  }

  toggle = (opened)=>{
    if(this.state.opened === opened) return ;
    opened ? this.openModal(): this.closeModal();
  }

  openModal = ()=>{
    const {onOpen} = this.props;
    const modal = this.refs.Modal;
    modal.style.display = 'block';
    setTimeout(()=>{
      this.setState({ opened: true }, ()=>{
        onOpen && onOpen();
      });
    },16);
  }

  closeModal = ()=>{
    const {onClose} = this.props;
    this.setState({opened: false}, ()=>{
      onClose && onClose();
    });
  }

  _transitionEnd = ()=>{
    const {onOpened, onClosed} = this.props;
    const modal = this.refs.Modal;
    let {opened, modalStyle} = this.state;
    if(opened){
      onOpened && onOpened();
    }else{
      onClosed && onClosed();
      modal.style.display = 'none';
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
      removeOnClose,
      modalCloseByOutside,
      children,
      ...other
    } = this.props;

    const stateOpened = this.state.opened;

    const cls = classnames(className, {'modal-in': stateOpened, 'modal-out': !stateOpened});

    const childrenNode = (removeOnClose && !stateOpened)? null : children;

    const isPopup = className && className.indexOf('popup') > -1 ;

    const overLayCss = classnames({
      'popup-overlay': isPopup
    });

    const closeByOutside = ()=>{
      modalCloseByOutside && this.closeModal();
    };

    return (
      <div>
        <OverLay opened={stateOpened} className={overLayCss} onClick={closeByOutside}></OverLay>
        <div className={cls} {...other} ref="Modal" onTransitionEnd={this._transitionEnd}>{childrenNode}</div>
      </div>
    );
  }
}
