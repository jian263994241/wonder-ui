import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import CSSTransition from 'react-transition-group/CSSTransition';

import {PopupModal, StyleModal, StyleOverlay} from './Styled';


export default class Modal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    overlay: PropTypes.bool,
    fade: PropTypes.bool,
    component: PropTypes.func,
    onCancel: PropTypes.func,
  }

  static defaultProps = {
    overlay: true,
    fade: true,
  }

  state = {
    visible: false,
  }

  componentDidMount(){
    if(this.props.visible){
      this.openModal();
    }
  }

  getModal = ()=> this.modal

  componentWillReceiveProps(nextProps) {

    if(nextProps.visible != this.props.visible){
      if(!nextProps.visible){
        this.closeModal();
      }else{
        this.openModal();
      }
    }
  }

  openModal = ()=>{
    this.setState({ visible: true })
  }

  closeModal = ()=>{
    this.setState({ visible: false });
  }

  render() {
    const {
      className,
      style,
      inline,
      fade,
      visible,
      overlay,
      overlayStyle,
      onCancel,
      children,
      onEnter,
      onEntered,
      onExit,
      onExited
    } = this.props;


    if(inline){
      return <div className={className} style={style} ref="modal">{children}</div>
    }

    const enter = (node)=>{
      onEnter && onEnter(node);
    }
    const entered = (node)=>{
      onEntered && onEntered(node);
    }

    const exit = (node)=>{
      onExit && onExit(node);
    }
    const exited = (node)=>{
      onExited && onExited(node);
    }

    const backdrop = overlay && (
      <CSSTransition
        in={this.state.visible}
        timeout={400}
        classNames="fade"
        onEnter={enter}
        onEntered={entered}
        onExit={exit}
        onExited={exited}
      >
        <StyleOverlay onClick={onCancel} style={overlayStyle} onTouchMove={e=>e.preventDefault()}/>
      </CSSTransition>
    )

    let classNames, Content ;

    if (fade) {
      classNames = 'fade';
      Content = StyleModal;
    }else {
      classNames = 'slideUp';
      Content = PopupModal;
    }

    return (
      <Mounter>
        { backdrop }
        <CSSTransition
          className={className}
          in={this.state.visible}
          timeout={400}
          classNames={classNames}
        >
          <Content innerRef={x=>this.modal=x}>{children}</Content>
        </CSSTransition>
      </Mounter>
    )
  }
}
