import React, {Component, createElement, Fragment} from 'react';
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
    timeout: PropTypes.number
  }

  static defaultProps = {
    overlay: true,
    fade: true,
    timeout: 400,
    visible: false,
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log(state);
  //   return {
  //     visible: props.visible
  //   }
  // }

  state = {
    visible: false,
  }

  componentDidMount(){
    this.setState({
      visible: this.props.visible
    })
  }

  UNSAFE_componentWillReceiveProps(newProps){
    this.setState({
      visible: newProps.visible
    })
  }

  didLeave = (node)=>{
    const {didLeave} = this.props;
    didLeave && setTimeout(didLeave, 100);
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
      onExited,
      innerRef,
      timeout
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
        timeout={timeout}
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
        <Fragment>
          { backdrop }
          <CSSTransition
            className={className}
            in={this.state.visible}
            timeout={timeout}
            classNames={classNames}
            onExited={this.didLeave}
          >
            <Content
              innerRef={innerRef}
              style={style}
            >
              {children}
            </Content>
          </CSSTransition>
        </Fragment>
      </Mounter>
    )
  }
}
