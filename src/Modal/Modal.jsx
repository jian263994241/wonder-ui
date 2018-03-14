import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import CSSTransition from '@clay.global/react-transition-group/lib/CSSTransition';

import {PopupModal, StyleModal, StyleOverlay} from './Styled';

const show = node => {
  node.style.display = 'block';
  node.style.visibility = 'visible';
};
const hide = node => {
  node.style.visibility = 'hidden';
  node.style.display = 'none';
};

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

  didLeave = (node)=>{
    const {didLeave} = this.props;
    hide(node);
    didLeave && setTimeout(didLeave, 100);
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
      visible,
      overlay,
      onCancel,
      children,
      fade
    } = this.props;


    if(inline){
      return <div className={className} style={style} ref="modal">{children}</div>
    }

    const backdrop = overlay && (
      <CSSTransition
        in={this.state.visible}
        timeout={400}
        classNames="fade"
        onEnter={node=>show(node)}
        onExited={node=>hide(node)}
      >
        <StyleOverlay onClick={onCancel} onTouchMove={e=>e.preventDefault()}/>
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
          onEnter={node=>show(node)}
          onExited={this.didLeave}
        >
          <Content innerRef={x=>this.modal=x}>{children}</Content>
        </CSSTransition>
      </Mounter>
    )
  }
}
